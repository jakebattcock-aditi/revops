# Operations Strategist / Automation Engineer: ad account workflow

Job: https://www.upwork.com/jobs/~022118651228512427764
Posted: 2026-11-06 10:26 UTC. Connects: 26. Client: $167K spent, 4.91 rating. 98 proposals when scouted.

**Tier:** 3, RevOps Automation Build, starting with a paid discovery milestone.

**Suggested rate:** $60/hr, the top of their $16-60 range. Below my tier range ($95-150/hr). Alternative: offer the paid discovery milestone as a fixed $1,000 and quote the build after it.

## Proposal

Hi. You have ad account requests spread across a web app, Slack and chat, and nobody can see what's stuck. I'd start by flowcharting one request from "Requested" to "Given" and listing where it waits on someone.

I built a real-time Salesforce-to-Salesforce sync of about 136 steps in Zapier with JavaScript, for a global B2B software company. I also deployed an n8n and LLM agent for an applied-AI company that saves 15 hours a week. The production system and data are confidential, so I can walk through the design instead.

I'd build this on n8n. It handles API calls and webhooks to your web app and Slack, and it makes error handling visible so nothing fails silently.

I haven't built against the Meta Marketing API before, so I'd read-only test it in discovery. I'm new to Upwork. Happy to do the paid discovery milestone first.

## Screening answers

1. Process mapped and automated: the Salesforce sync above. Different data models in two systems, and I mapped every field before building. After the build, I audited it against live data and documented 13 defects.
2. Week one: interview the people who handle requests, flowchart every step, list what each account waits on and from whom, then send a process map and requirements doc.
3. API integration: the Salesforce sync (Zapier, JavaScript mapping) and an n8n workflow with an LLM that reviews RFP opportunities. I have not built against Meta or Slack APIs for a client.
4. Platform: n8n. Self-hostable, good for API calls and webhooks, and each step is visible.

## Giveaway (15 min)

Flowchart of their ad account flow with the stages they listed, drawn in Excalidraw. It doesn't need to run.
