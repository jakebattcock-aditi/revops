# Achievements

Extracted from `quadient-raw.md` and `resume-raw.md`. Format: **metric → what I built → tools used**.
Items marked *(in progress)* or *(open)* were not confirmed complete as of the source material (Sep 8, 2026). Don't claim them as finished in proposals.

## Salesforce integration & automation

- **7 stages, 136 steps (verified against the live exports: 8+13+14+25+19+20+37), every new Opportunity synced in real time** → Project Gemini: one-way, event-driven AP → Digital Salesforce sync (Opportunity, Account, Contact, VAR contacts, Campaign) using scripted find-or-create across two different data models → Zapier (chained sub-zaps), JavaScript code steps, Salesforce (2 orgs), SOQL
- **~15KB JS step mapping 4 AP record types** → Stage 5 Opportunity logic: Record Type / Solution / Logo Type / Distribution Channel mapping, New Business vs. Upsell decisioning, 4 create paths each with duplicate guard + error log → Zapier, JavaScript, Salesforce, Excel/OneDrive
- **100% of Zapier-created campaigns had blank Campaign Type → fixed** → Campaign Type translation step against an AP→Digital lookup table → Zapier, Salesforce
- **2 referral campaigns overridden + one-time backfill** → AP Referral campaign override and Primary Campaign Source backfill via two-query reconciliation → Zapier, SOQL, Excel (XLOOKUP)
- **Every 18-char Record Type ID, auth ID and custom field re-verified** *(in progress)* → Full pipeline migration to a new cloud Zapier workspace, plus knowledge-transfer doc and bottom-up test sequence → Zapier, Salesforce, OneDrive
- **~10 incorrect mapping rows corrected, 4 missing fields + 1 undocumented object added, 13 defects catalogued** → Field mapping audit V1.0 → V2.0, reconciled against all 7 live pipeline exports (found billing address data wasn't reaching Digital at all) → Zapier exports, Salesforce
- **17-field reverse sync feeding partner compensation** → Digital → AP backfeed zap on StageName change, with 2 fields transformed in JS, plus documentation of live vs. create-time PartnerStack fields → Zapier, JavaScript, Salesforce, PartnerStack

## Gong

- **30 trackers → 7; 12 keyword trackers → 1 covering 21 competitors** → Tracker consolidation with context-gated matching to cut false positives → Gong Smart Topics/Trackers
- **Win/loss capture redesigned to fit a hard 7-slot cap (loss side → 5 fields)** → AI Data Extractor field set designed around the platform overwriting Salesforce values → Gong AI Data Extractor, Salesforce
- **4 team groupings forecasting (UKI AP/AR, NORAM AP/AR)** → Gong Forecast setup with monthly/quarterly quota rows and manager dual-row pattern → Gong Forecast
- **1,013-row HR export → 438 Professional / 149 Forecast seats** → Bottom-up license count with ordered first-match-wins categorization, variance explained vs. 415/110 top-down estimate; stakeholder adopted the bottom-up method → Excel, Python (openpyxl)
- **4 silent data bugs fixed, incl. 33 staff invisible to filters and an 8-seat undercount** → Data-integrity fixes: COUNTIFS → SUMPRODUCT, direct XML repair of corrupted file, AutoFilter/pivot collision, HR typo detection → Excel, openpyxl, XML
- **24-page, 36-month vendor proposal modeled → revised quote required** → Commercial review showing delivered count exceeded vendor's larger option on both product lines → Excel, Gong licensing model
- **~60% of DPIA form completed across 6 regions** *(remaining ~40% assigned, not complete)* → Gong DPIA: Sections 1–3, EU AI Act risk classification, admin-console security audit (found 730-day public link sharing, consent gaps for Germany), vendor question list, handover doc → OneTrust, Gong admin console, GDPR, EU AI Act

## Clari

- **5 regions provisioned (NORAM, UKI, CE/DACH, France, APAC)** → Global Clari rollout: IC vs. Manager provisioning via cross-reference formula, scoped forecast permissions, corrected a mis-provisioned run → Clari Studio, Excel
- **8 MEDDPICC Smart CRM Fields** *(open — 3 improvement gaps identified)* → MEDDPICC qualification fields authored as AI prompts, audited against Clari's Smart Fields Guide → Clari RevAI, Salesforce
- **5-region quota upload in local currencies, 3 period formats** → Quota formula logic (rep vs. manager), nested IFS for monthly/quarterly/annual, fixed a type-coercion bug breaking period matching → Excel (IFS), Clari
- **6–7 logouts/day bug escalated** → Copilot end-to-end test, contract-terms extractor prompt scoped, IT/SSO integration review → Clari Copilot, Gong, Salesforce
- **Company-wide rollout comms + timezone-split training plan** → Clari launch announcement and phased training → Clari
- **3/3 blocking DPIA questions closed** → Clari Copilot DPIA: confirmed no cross-customer model training, ISO 27001/27701, and flagged a real redaction gap to the DPO → GDPR, vendor security review
- **Consent scope expanded from NORAM-only to every Gong + Clari user** *(in progress)* → Company-wide written-consent onboarding, sequenced NORAM → UK → France/Germany → GDPR, works council process

## Salesforce reporting & org structure

- **Dashboard errors fixed with 1 Setup change (broken since Nov 2023)** → Beanpay Admin Dashboard migration: root-caused missing Implementation object, fixed report type stuck "In Development" → Salesforce reports/dashboards, custom report types
- **Recurring "conflict quotes" issue root-caused** → NCV provider-key resolution workflow + rep training, edge cases routed to a ticket → Salesforce, SAP data
- **~13 role changes validated (2 COO, 1 VP, 3 renames, 2 re-parents, 2 Serensia, 1 APAC VP, 2 NORAM QAR)** *(4 users still unprovisioned)* → EMEA/NORAM role hierarchy restructure driving Clari quota rollups, with structural-change and per-user update sheets → Salesforce, SOQL, Salesforce Inspector

## AltaML — RevOps Analyst, Workflow Automation (05/2025 – 10/2025)

Source: `resume-raw.md`.

- **>$550K qualified top-of-funnel pipeline** → AI-powered lead generation system using predictive models and market segmentation → n8n, APIs, Python, LLMs
- **Forecast accuracy +20%, manual calculations eliminated** → Automated forecasting tool and dashboard processing HubSpot data via API → HubSpot, API integrations, Python, dashboards
- **15 hrs/week saved, 100% opportunity capture rate** → AI agent for RFP opportunity analysis → n8n, LLMs, JSON
- **Hyper-personalized nurture across market verticals** → Automated nurture campaigns using AI search agents with real-time industry content → HubSpot workflows, AI agents

## JBC Flow — Director, own agency (09/2024 – current)

- **>$281K USD pipeline** → AI-driven outbound system for an ecommerce service agency → AI agents, outbound tooling (Apollo, Instantly, Sales Navigator, Apify per resume tool list)
- **First 3 enterprise users** → Outbound for a US pre-seed medical technology startup → AI-driven outbound
- **Opportunity sourcing + qualification automated** → AI-agent sales automation for a luxury retailer → AI agents
- **Full consultative sales cycle** → Discovery, tailored proposals, negotiation, close for SME clients

## Sales roles

- **>40 hrs/week of sales admin saved** → CRM AI automations (Showpass, Sales Executive, 09/2023 – 04/2024) → Salesforce
- **>$110M USD in qualified opportunities** → Multi-channel ICP outbound (Showpass) → Salesforce
- **>$20M USD in qualified opportunities** → Outbound for a UBM SaaS (Panevo, Sales Executive, 12/2022 – 06/2023)

## Engineering background (context only — not RevOps)

- B.Eng. Mechanical, Memorial University (2021); APEGA Member-in-Training
- $14M+ pipeline infrastructure project delivered on time and on budget (Aker Solutions); >$1M in project-control discrepancies prevented via integrity audits (Surerus Murphy); ~$100K consulting costs saved by fixing data errors (Aalto University)

## Tools & systems (full list)

- **CRM:** Salesforce (multi-org: AP/Beanworks + Digital/CXM), HubSpot, SOQL, Salesforce Inspector, Record Types, role hierarchy, custom report types, dashboards
- **Automation:** Zapier (multi-stage sub-zap chains, code steps, workspace migration), n8n, Make.com, JavaScript, Python, JSON, API integrations
- **AI:** LLM integrations and AI agents (ChatGPT, Claude, Perplexity), Clari RevAI prompting, Gong AI Data Extractor
- **Outbound:** Apollo, Instantly, Sales Navigator, Apify, Calendly
- **BI:** Power BI
- **Revenue intelligence:** Gong (Trackers, AI Data Extractor, Forecast, admin/security config), Clari (Studio, RevAI Smart CRM Fields, Copilot, quota/forecast)
- **Partner:** PartnerStack
- **Data:** Excel (SUMPRODUCT, IFS, XLOOKUP, COUNTIFS, pivots, weighted scoring models), Python openpyxl, direct XML file repair, OneDrive
- **Compliance:** OneTrust DPIA, GDPR, EU AI Act risk classification, vendor security review (ISO 27001/27701, SOC 2, DPA)
- **Frameworks:** MEDDPICC, 9-category weighted vendor evaluation scorecard
