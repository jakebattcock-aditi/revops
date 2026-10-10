// Deal Sync demo: the decision logic, as plain functions.
// Everything here uses made-up codes and values. No real company data.
// Each function is small enough to paste into an n8n Code node.

const MAX_NAME = 40; // example limit imposed by a downstream billing system

// 1. Name handling -------------------------------------------------------
// Split a long account name on a word boundary and make it safe for a query string.
function splitName(name, max = MAX_NAME) {
  const full = (name || "").trim();
  if (full.length <= max) return { line1: full, line2: "" };
  const cut = full.lastIndexOf(" ", max);
  if (cut > 0) return { line1: full.slice(0, cut), line2: full.slice(cut).trim() };
  return { line1: full.slice(0, max), line2: full.slice(max).trim() };
}

function escapeQuery(str) {
  return (str || "").replace(/'/g, "\\'");
}

// 2. Region mapping with a fallback ----------------------------------------
const SALES_ORG = {
  UK01: { country: "United Kingdom", region: "EMEA" },
  FR01: { country: "France", region: "EMEA" },
  US01: { country: "United States", region: "Americas" },
  CA01: { country: "Canada", region: "Americas" },
};
const CURRENCY_TO_ORG = { GBP: "UK01", EUR: "FR01", USD: "US01", CAD: "CA01" };

function regionFor(salesOrg, currency) {
  const org = (salesOrg || "").trim() || CURRENCY_TO_ORG[(currency || "").trim()] || "";
  const hit = SALES_ORG[org];
  return hit ? { salesOrg: org, ...hit, usedFallback: !(salesOrg || "").trim() } : { salesOrg: "", country: "Unknown", region: "Unknown", usedFallback: false };
}

// 3. Size banding ------------------------------------------------------------
const BANDS = [
  [1, 10, "1-10"], [11, 50, "11-50"], [51, 200, "51-200"], [201, 500, "201-500"],
  [501, 1000, "501-1,000"], [1001, 5000, "1,001-5,000"], [5001, 10000, "5,001-10,000"],
];
function sizeBand(employees) {
  const n = Number(employees);
  if (!Number.isFinite(n) || n < 1) return ""; // blank beats a wrong band
  const hit = BANDS.find(([lo, hi]) => n >= lo && n <= hi);
  return hit ? hit[2] : "10,001+";
}

// 4. Contact selection: three-tier fallback ---------------------------------
function pickContact({ roleContact, primaryContact, firstContact }) {
  const clean = (v) => (v || "").trim();
  if (clean(roleContact)) return { id: clean(roleContact), source: "Deal contact role" };
  if (clean(primaryContact)) return { id: clean(primaryContact), source: "Account primary contact" };
  if (clean(firstContact)) return { id: clean(firstContact), source: "First account contact" };
  return { id: "", source: "No contact found" };
}

// Matching on a blank email can hit the wrong record, so refuse and flag it.
function canMatchByEmail(contact) {
  return !!(contact && (contact.email || "").trim());
}

// 5. Partner contact: secondary, then primary, then nothing ------------------
function partnerContact(secondary, primary) {
  const s = (secondary || "").trim();
  const p = (primary || "").trim();
  return s || p || null; // null is safe for a reference field; "" is not
}

// 6. Campaign checks and translation ---------------------------------------
function hasCampaign(id) {
  const v = (id || "").trim();
  return v !== "" && v.toUpperCase() !== "NO CAMPAIGN";
}

const CAMPAIGN_TYPES = {
  "Display Ads": "Banner Ads",
  "Email Batch": "Email Batch",
  "Internal Telemarketing": "Telemarketing",
  "External Telemarketing": "Telemarketing - External",
  "Search Engine Advertising": "Paid Search",
  "Tradeshow": "Tradeshow",
  "Webinar": "Webinar",
};
function translateCampaignType(sourceType) {
  return CAMPAIGN_TYPES[(sourceType || "").trim()] || ""; // blank, never a guess
}

// Some campaigns must always pass through, even when the lead source is a partner.
function isPartnerLed(leadSource, campaignId, alwaysPassCampaigns = []) {
  const PARTNER_SOURCES = ["Reseller Referral", "Partner Event", "Partner Mailing"];
  if (alwaysPassCampaigns.includes((campaignId || "").trim())) return false;
  return PARTNER_SOURCES.includes((leadSource || "").trim());
}

// 7. Deal type and owner -----------------------------------------------------
function dealType({ partnerAccount, existingNewBusinessDeals }) {
  if (partnerAccount) return "Partner Deal";
  return Number(existingNewBusinessDeals || 0) === 0 ? "New Business" : "Upsell";
}

function ownerFor(mappedOwnerId, defaultOwnerId) {
  const v = (mappedOwnerId || "").trim();
  return v || defaultOwnerId; // a missing owner should never block a sync
}

// Never send an empty string to a field that rejects it: send null.
function nullIfBlank(v) {
  const t = (v || "").trim();
  return t === "" ? null : t;
}

// 8. Duplicate guard ---------------------------------------------------------
function duplicateGuard(existingDeal, sourceDealId) {
  return existingDeal && existingDeal.sourceId === sourceDealId
    ? { action: "log-and-stop", reason: `Deal ${sourceDealId} is already synced` }
    : { action: "create" };
}

module.exports = {
  splitName, escapeQuery, regionFor, sizeBand, pickContact, canMatchByEmail,
  partnerContact, hasCampaign, translateCampaignType, isPartnerLed,
  dealType, ownerFor, nullIfBlank, duplicateGuard,
};
