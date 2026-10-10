# Portfolio

Everything here uses made-up data or generic descriptions. No Quadient names, IDs, field names or logic.

## Files in `crm-sync-demo/`

| File | What it is | Use it for |
|---|---|---|
| `architecture-diagram.png` | One-page diagram of the Deal Sync demo (3600 x 1520, image) | Upwork portfolio image, application attachment |
| `n8n-deal-sync-demo.json` | Importable n8n workflow, 29 nodes, generic nodes only | Screenshot for the portfolio, show in a Loom |
| `failure-patterns-checklist.pdf` | "8 ways a CRM sync fails without telling you" (2 pages) | Giveaway for audit and integration jobs |
| `case-study.pdf` | Anonymised case study of the two-org sync (2 pages) | Portfolio attachment, link in applications |
| `loom-script.md` | 3-minute walkthrough script | Record the portfolio video |
| `sync-logic.js`, `sample-data.json`, `run-demo.js`, `test-run-output.txt` | The decision logic, four made-up scenarios and a run of them | Proof it behaves; show the output in the Loom |
| `architecture-diagram.html`, `*.html` | Sources for the image and PDFs | Edit text, then re-render |

## Upwork portfolio items to create

Add these three under Profile, then Portfolio, then Add project. Upwork doesn't allow web addresses in text, so none are included.

### 1. Real-time sync between two Salesforce orgs
- **Attach:** `case-study.pdf`, `architecture-diagram.png`
- **Description:**
```
A chained, event-driven sync that copies every new deal and its related records between two Salesforce orgs with different data models. Seven stages, 136 steps. Each stage looks a record up first, then updates or creates it, so nothing is blindly copied. A follow-up audit of the live pipeline found and documented 13 defects. Built with Zapier and JavaScript. Details are generalised.
```
- **Skills to tag:** Salesforce, Zapier, API Integration, JavaScript, Data Migration

### 2. Deal Sync demo: a CRM-to-CRM workflow
- **Attach:** `architecture-diagram.png` and your n8n canvas screenshot
- **Description:**
```
A working demo of the pattern behind a reliable CRM sync, built on made-up data. Waits for related records to save, cleans and maps account data, picks the best contact through a three-step fallback, translates campaign types, guards against duplicate deals and logs every skipped record. The same logic runs in n8n, Zapier, Make or plain code.
```
- **Skills to tag:** n8n, Automation, CRM Automation, API Integration, JavaScript

### 3. 8 ways a CRM sync fails without telling you
- **Attach:** `failure-patterns-checklist.pdf`
- **Description:**
```
A one-page checklist of the problems I look for first when auditing a CRM integration, with a quick test for each. Placeholders left in live fields, hardcoded test IDs, keys saved only on create, searches on blank values and more. Free to use. If you want it run on your sync, message me.
```
- **Skills to tag:** CRM Automation, Salesforce, Data Migration, Automation

## Getting the n8n screenshot (no app logos)

1. In n8n, open a new workflow, then the menu, then Import from file, and choose `n8n-deal-sync-demo.json`.
2. Press the "fit view" button (or the shortcut `1`) so the whole flow is visible.
3. Take a screenshot. The nodes are all generic types (Webhook, Wait, Code, IF, HTTP Request), so no brand logos appear.
4. You don't need to connect or run anything. The HTTP steps point to placeholder addresses.

I built and checked this file for valid JSON, correct connections, reachable nodes and working Code-node logic against the sample data. I could not import it into a live n8n from here. If n8n shows an error on import, copy the message and I'll fix the file.

## Before you publish anything

- Re-read each item. If a line makes you think "that's how my company does it", change it.
- Don't add the real stage names, field names, partner names, region codes or IDs.
- Don't present the demo as a client project. It's labelled as a made-up demo on purpose.

## Re-rendering after an edit

```
node crm-sync-demo/run-demo.js        # re-run the logic on the sample data
```
The PNG and PDFs are rendered from the HTML files with headless Chromium. Edit the HTML, then re-render.
