// Runs the sync decisions against the made-up sample records and prints what would happen.
// Usage: node run-demo.js
const L = require("./sync-logic.js");
const data = require("./sample-data.json");

for (const s of data.scenarios) {
  console.log("=".repeat(70));
  console.log(s.name);
  console.log("=".repeat(70));

  const name = L.splitName(s.account.name);
  const geo = L.regionFor(s.account.salesOrg, s.account.currency);
  console.log(`Account    : "${name.line1}" + "${name.line2}"`);
  console.log(`  query-safe: ${L.escapeQuery(name.line1)}`);
  console.log(`  region    : ${geo.country} / ${geo.region}${geo.usedFallback ? " (from currency fallback)" : ""}`);
  console.log(`  size band : ${L.sizeBand(s.account.employees)}`);

  const contact = L.pickContact(s.contacts);
  console.log(`Contact    : ${contact.id || "(none)"} <- ${contact.source}`);
  if (!contact.id) {
    console.log("  -> FLAG: no contact found, write to error log, do not create a blank contact");
  } else if (!L.canMatchByEmail(s.contactRecord)) {
    console.log("  -> FLAG: contact has no email, skip the email match, write to error log");
  } else {
    console.log("  -> match in target CRM by email, create if missing");
  }

  const partner = L.partnerContact(s.partner.secondary, s.partner.primary);
  console.log(`Partner    : ${partner === null ? "none (null)" : partner}`);

  const campaign = L.hasCampaign(s.campaign.id);
  const partnerLed = L.isPartnerLed(s.deal.leadSource, s.campaign.id, data.alwaysPassCampaigns);
  console.log(`Campaign   : ${campaign ? "linked" : "skipped"}${campaign ? `, type "${s.campaign.type}" -> "${L.translateCampaignType(s.campaign.type) || "(blank)"}"` : ""}`);
  console.log(`Lead path  : ${partnerLed ? "partner-led (campaign not attached)" : "marketing-led (campaign attached)"}`);

  const type = L.dealType({ partnerAccount: !!s.account.isPartner, existingNewBusinessDeals: s.deal.existingNewBusinessDeals });
  const owner = L.ownerFor(s.deal.mappedOwner, data.defaultOwner);
  console.log(`Deal       : type=${type}, owner=${owner}`);

  const guard = L.duplicateGuard(s.existingDeal, s.deal.sourceId);
  console.log(`Guard      : ${guard.action}${guard.reason ? ` (${guard.reason})` : ""}`);
  console.log("");
}
