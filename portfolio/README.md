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

## Upwork portfolio item (one combined project)

One project, not three: the demo and checklist come from the same build, so they sit inside it. Add a different project (for example the Talent Studios work) as the second item once it's ready. Upwork doesn't allow web addresses in text, so none are included.

- **Title (65 chars):** `Salesforce-to-Salesforce sync: case study, demo and audit checklist`
- **Role:** `Integration builder and auditor`
- **Skills:** Salesforce, Zapier, API Integration, JavaScript, n8n (add CRM Automation, Data Migration if there's room)
- **Content, in order:**
  1. `architecture-diagram.png` (cover image)
  2. `case-study.pdf`
  3. your n8n screenshot
  4. `failure-patterns-checklist.pdf`
  5. your Loom, as a link, once recorded
- **Description** (cut the last sentence if it is over the limit):
```
Goal: copy every new deal, with its account, contacts, partners and campaign, from one Salesforce org to another, despite different data models and picklists. Solution: a 7-stage, 136-step pipeline in Zapier and JavaScript. Each stage looks a record up first, then updates or creates it, and problems go to an error log. Impact: records arrive automatically and de-duplicated, and a follow-up audit found and documented 13 defects. Inside: the case study, an architecture diagram, an n8n rebuild of the same pattern, and a checklist of 8 ways a sync fails silently.
```

## The workflow is already built in n8n

A copy of the demo workflow ("Deal Sync Demo (Source CRM to Target CRM)", 31 nodes, six grouped stages) was created directly in the n8n cloud account through the connector and left as an unpublished draft. It was test-run with pinned data for the HTTP steps and the logic nodes ran correctly on the long-name, currency-fallback, no-campaign scenario. Open it from the n8n workflow list, press fit view, and screenshot. The JSON file below remains as a backup you can import.

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
