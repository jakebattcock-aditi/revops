# Loom Script: Deal Sync Demo (2.5 to 3 minutes)

Use this for the video on your portfolio item. Then reuse the same shape for job-specific applications: swap the first 20 seconds for their problem, keep the rest.

Record in one take. Don't re-record if you stumble. Talk like you're explaining it to a colleague.

## Before you hit record (open these tabs)

1. `architecture-diagram.png`
2. The n8n canvas with `n8n-deal-sync-demo.json` imported, zoomed to fit
3. `test-run-output.txt` (or a terminal showing `node run-demo.js`)
4. `failure-patterns-checklist.pdf`

## Script

**0:00 to 0:20. Who and why (diagram on screen)**
"Hey, I'm Jake. I run RevOps for a global software company, and a big part of that is keeping two CRMs in sync. This is a made-up version of that kind of build, so you can see how I think. Nothing on screen is real company data."

**0:20 to 1:10. The flow (stay on the diagram)**
"A new deal is created in the source CRM. First thing the sync does is wait five minutes, because the related records are still being saved. If it searches too early, it finds nothing and makes duplicates.

Then it works through six stages. Account: clean the name, work out the region, band the company size, find it in the target CRM, update or create. Contact: try the deal's contact role, then the account's primary, then the first contact on file. Then partner, campaign, and the deal itself.

At every stage the rule is the same: look first, then update or create. It never blindly copies."

**1:10 to 1:50. The guards (point at the red boxes)**
"These red boxes are what stop a sync from failing quietly. No email on a contact? It logs that and stops, because searching on a blank value can match the wrong person. Deal already synced? It logs it and stops, so you don't get a duplicate. Unknown campaign type? It stays blank. I'd rather have a blank than a wrong value."

**1:50 to 2:20. Proof it runs (switch to n8n canvas, then the test output)**
"Here's the same flow in n8n. [scroll the canvas left to right] And this is the logic run against four made-up records: a long name with an apostrophe, a repeat customer, a deal that's already synced, and a contact with no email. You can see each one take the right path."

**2:20 to 2:45. The giveaway (checklist PDF)**
"I also put together this one-pager, eight ways a CRM sync fails without telling you. It's free. It's what I check first on any integration."

**2:45 to 3:00. Close**
"If you've got a sync, or something you want connected, send me what's broken and what you've noticed. I'll tell you what I'd check first."

## Adapting it for a job application

- Replace the first 20 seconds: "Hey [name], I read your post about [their problem]. Here's how I'd approach it."
- Keep the diagram, but change the stage names to match their tools (for example, "Form submission", "Enrich", "Create in HubSpot").
- Keep the guards. They are the difference between you and everyone else.
- End with a question about their setup, not a pitch.
