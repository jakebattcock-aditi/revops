# CLAUDE.md

This repo is my RevOps freelance workspace. Source of truth for my experience: `knowledge-base/achievements.md` (summary) and `knowledge-base/quadient-raw.md` (full Quadient record), `knowledge-base/resume-raw.md` (full resume: AltaML, JBC Flow, sales and engineering roles). Service tiers and rates: `knowledge-base/services-menu.md`.

## Voice & tone

- Direct. No fluff, no filler, no "I hope this finds you well."
- Action-oriented: lead with what I'll do and the outcome, not my life story.
- Specific over generic — real numbers, real tools, real results.
- Confident and committed, not hedged. Short sentences.
- Never invent or inflate achievements. Only use what's in the knowledge base. Items marked *in progress* or *open* are not finished — don't claim them as done.

## Service tiers

1. **Fractional RevOps** — Part-time RevOps lead owning CRM, tool stack, and forecast. $3,500–$7,000/month (10–20 hrs/week) or $75–$110/hr.
2. **RevOps Consulting** — Fixed-scope audits, tool evaluations, data cleanup, decision support. $90–$140/hr or $1,500–$6,000 per engagement.
3. **RevOps Automation Build** — Integrations and automations (Zapier, Salesforce, code steps) without silent failures. $2,500–$15,000 per project or $95–$150/hr.

## Upwork proposals

When given an Upwork job post, output: (1) which tier fits, (2) a 100-150 word proposal in my voice using 1-2 relevant achievements, (3) a suggested rate.

- Pull achievements from `knowledge-base/achievements.md`; pick the 1-2 closest to the job's actual problem.
- Suggested rate should sit inside the tier's range; note the reasoning in one line.
- Save finished proposals to `proposals/` as `YYYY-MM-DD-short-job-name.md`.
- Use `knowledge-base/application-template.md` for structure: first line is about THEM and what I built for them, never "I'm an expert". Pick case studies from `knowledge-base/case-studies.md`.
- Confidentiality: never use Quadient's name with specifics, employee/HR data, vendor contract or DPIA details, partner-compensation logic, internal names or IDs. Say "a global B2B software company."

## Upwork job search (Upwork MCP)

When asked to find jobs, use the Upwork MCP tools (account org_uid comes from `list_accounts`). Read-only: never submit a proposal, spend Connects, send a message or accept anything without my explicit "yes, submit" for that specific job. I'm on a tight Connects budget, so favor quality over volume.

**Search** (several queries, dedupe, prefer `mode=most_recent` for speed): Salesforce admin/integration, HubSpot audit/automation, CRM audit/cleanup, Zapier, n8n, Make.com, RevOps, sales operations, Gong, Clari, sales forecasting, AI agent/workflow automation.

**Skip:** cold calling/appointment setting/list building, pure Apex/LWC dev, SEO/ads, Zoho/GoHighLevel-only, under $500 fixed or under $40/hr, payment unverified, 50+ proposals on a job older than a day.

**Score 1–5:** fit to my case studies, fit to a service tier, budget, client quality (verified payment, rating, hires, spend), competition (proposal count, age). Prefer jobs posted in the last few hours.

**Output:** table sorted by score (title, link, budget, client stats, proposals, tier, score, one-line why). For the top 2–3, draft the application per the template and save to `proposals/`.
