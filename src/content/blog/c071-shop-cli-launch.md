---
title: "Launching Shop CLI"
description: "Shop CLI: A Tool Built for AI Agents, Not Humans"
dek: ""
pubDate: "2026-08-11"
updatedDate: "2026-05-15"
category: engineering
tags: ["engineering", "system-lens"]
draft: false
---

Shop CLI: A Tool Built for AI Agents, Not Humans

**TL;DR:** Shop CLI is a command-line tool that lets AI agents search, compare, and place orders within spending limits you configure. You set the mandate once. The agent operates within it. Your card credentials never touch the agent — Stripe and Shopify hold them. Install: `pip install shop-cli`.

---

I've been building at the edge of agentic commerce for three months. The infrastructure question I kept hitting: can an agent actually complete a purchase, end-to-end, without a human in the loop?

Most "AI shopping" I've seen is an agent generating recommendations while a human clicks buy. That's not agentic commerce. That's research with extra steps. The agent isn't completing anything. You are.

## What is Shop CLI?

Shop CLI is a command-line tool designed with the agent as the primary user. You configure it once. The agent uses it to shop.

Every command returns JSON. No interactive prompts, no HTML, no browser flows. Agents don't have browsers.

```bash
shop search products \
  --query "travel toys for toddlers" \
  --max-price 50 \
  --min-rating 4.2 \
  --in-stock-only \
  --output json
```

The command structure is noun-verb: `shop <noun> <verb> [flags]`. Nouns are `search`, `product`, `cart`, `order`, `mandate`, `approval`. An agent can discover available commands via `shop schema list` without documentation.

## How does the mandate system work?

The mandate is the core of Shop CLI. It's a signed policy file that encodes what the agent is allowed to do: spending ceiling, approved categories, per-order limits, the threshold above which it must ask you first.

```yaml
mandate:
  id: mnd_household_weekly
  ceiling: 150.00
  categories: [household, grocery, cleaning]
  per_order_max: 40.00
  approval_required_above: 30.00
```

When the agent runs a command, it references a mandate ID. It never sees your card credentials. Those stay in Stripe or Shopify. The agent works with authorisation tokens. No card risk.

If it hits something outside the mandate, it doesn't error. It writes to an approval queue and stops. Exit code 10 means "escalated to human." You review via `shop approval list`, then approve or reject. Nothing happens until you do.

## Why does autonomous agent purchasing matter?

The agentic commerce stack needs callable primitives: tools agents can discover, invoke, and chain without human intervention. Most commerce infrastructure today assumes a human is present. Someone reading the error message. Someone clicking confirm. Someone entering the card number.

Shop CLI assumes nobody is home.

That's not a limitation. That's the design. The human configured the policy before walking away. The agent executes within it.

## What don't I know yet?

The tool works. I'm confident about that. What I'm less certain about:

- Whether the mandate mental model makes sense to non-technical operators
- Whether the approval queue actually reduces anxiety about agent spending, or just delays it
- Whether people will use this at all

That third one is the honest question. I built something I believe fills a real infrastructure gap. Whether operators are ready to delegate spending to their agents is a different question. That's the hypothesis Shop CLI is testing.

## How to get started

```bash
pip install shop-cli
shop mandate create --name "household" --ceiling 150 --categories household,grocery
shop search products --query "paper towels" --output json
```

Full command reference and mandate documentation are in the GitHub repo.

## Frequently asked questions

**Is my payment information at risk?**
No. Card credentials stay with Stripe or Shopify. Shop CLI works with authorisation tokens, not card numbers. The agent can spend within your mandate but cannot access payment details.

**What happens if the agent tries to buy something outside my limits?**
It escalates rather than fails. Exit code 10 means the order was handed to your approval queue. Approve or reject with `shop approval approve [id]`. Nothing ships until you confirm.

**Does this work with any AI agent framework?**
It's designed to. Every command returns JSON with standard exit codes, so any agent that can run shell commands can use Shop CLI. I've tested primarily with Claude Code agents.

**What if the agent makes a mistake?**
All write operations take an idempotency key, so retries are safe. Orders can be cancelled via `shop order cancel [id]` before fulfilment. Set a low `approval_required_above` threshold to add a human checkpoint above any amount you're not comfortable with.

**Who is this for right now?**
People already building with agent frameworks who want to test autonomous purchasing. If you're not thinking in agent-first workflows yet, the mandate system will feel like overhead. Come back in six months.

---

*Last updated: 2026-05-14*
