---
title: "Agentic Readiness Checklist"
description: "When an AI agent visits your store, it doesn't see your homepage or your brand story. It reads product identifiers, schema markup, protocol manifests, and check"
pubDate: "2026-03-17"
category: engineering
tags: ["engineering", "system-lens"]
draft: false
---

When an AI agent visits your store, it doesn't see your homepage or your brand story. It reads product identifiers, schema markup, protocol manifests, and checkout flows. If any of those are missing or broken, it leaves. No cart. No record of the visit.

ChatGPT processes 50 million shopping queries a day. Most DTC stores get filtered out before an agent reaches the product page. The brands that survive that evaluation are the ones who understand what agents actually need. Not what customers need. Not what SEO needs. What agents need.

This is the second wave of the agentic commerce playbook. Last month we called out the scale of the problem: 91% of online stores invisible to AI agents. Now the question from brands isn't "is this real?" anymore. It's "what do we actually fix?" The answer is concrete. It's not flashy, but it works.

I've been mapping what "ready" actually looks like across four layers: the data infrastructure agents read first, the protocols that determine which ecosystems can find you, the checkout flows where most brands fail silently, and the discovery layer that determines whether an agent even attempts the journey. Got it down to 15 checkboxes. If you can check them all, you're ahead of 95% of DTC right now.

### Data Infrastructure

The layer agents read first.

**Valid GTINs on all SKUs**

Agents filter on identifiers before reading anything else. A GTIN (Global Trade Item Number) is how an agent knows whether it's looking at the same product your supplier is selling, the same product your competitors are selling, and whether inventory data from your feed matches what humans see. Without it, you're forcing the agent to guess based on title and description alone. Most agents don't guess. They move on.

**Schema.org markup live and validated**

Without structured data, your product information is just text. An agent can't distinguish between specs, marketing language, and context. It can't reliably extract price, availability, dimensions, or return policy. Run your pages through Google's Rich Results Test. If schema isn't showing as valid, you're not invisible to agents just because traffic hasn't dropped yet. You will be.

**Descriptions 300+ words, conversational**

Specs say what the product is. Copy says who it's for and why they need it. An agent buying a running shoe doesn't just need "lightweight, breathable mesh." It needs to know whether it's for wide feet, whether it's suitable for concrete, whether the arch support works for people with flat feet. Most product pages prioritise visual scanning over readability for machines. Rewrite your descriptions like you're explaining to a friend who's never bought from you before. Who's this actually for?

**Feed at chatgpt.com/merchants, every 15 minutes**

A stale feed means the agent hits dead inventory, makes a purchase that can't be fulfilled, or sees prices that no longer match reality. You need an automated pipeline that pushes updates on a regular cadence. Inventory goes down? The feed updates. Price changes? The feed reflects it. Fifteen minutes is the floor for real-time. If you're updating monthly, you're not ready.

### Protocol Compliance

Which ecosystems can find you at all.

**UCP manifest at /.well-known/ucp**

UCP is the Universal Commerce Protocol. It's one of the emerging standards for how agents discover whether a store is participating in their ecosystem at all. Missing this file excludes you from that agent ecosystem entirely. It's not friction. It's invisibility. If you don't know what /.well-known/ucp is, you need to find out and build it today.

**ACP enabled via Shopify or Stripe**

ACP is the Agent Commerce Protocol. Here's the tension: agents can find you without it. They can't buy. Or rather, they can attempt to buy, but the transaction path is fragile. With ACP enabled, you're telling agents exactly how to transact with you. Shopify and Stripe both offer this. If you're on neither platform, you'll need to build your own agent payment protocol or you're leaving revenue on the table.

**robots.txt allows agent crawlers**

Amazon blocks agent crawlers at the robots.txt level. Alo Yoga and Allbirds let them in. That choice determines whether certain agents can even see your product pages. Most teams inherit a robots.txt from years ago when agent crawlers didn't exist. You're probably blocking them by accident.

### Programmatic Checkout

Where most brands fail silently.

**No login wall at guest checkout**

Agents can't create accounts. Full stop. If your checkout requires a login before the user can proceed to payment, you've just blocked all agent purchases. This feels obvious when you say it out loud, but walk through fifty DTC checkouts and you'll find this mistake on half of them, usually buried in a subtle "create an account" default toggle. Test your checkout flow with a new email address. Does it force account creation?

**No CAPTCHA in the checkout flow**

CAPTCHA blocks non-human interaction by design. It works brilliantly for that purpose. It also means agents can't complete transactions. If you have CAPTCHA anywhere in your checkout, agents fail. Some teams keep it for fraud prevention. Fair. But if you want agent traffic, you're accepting some fraud risk or you're finding an alternative verification method that doesn't require human interaction.

**Policy data machine-readable**

Returns and shipping policies buried in prose can't be parsed. An agent needs to know: what's the window for returns? Is there a restocking fee? What are the shipping options and costs? Can the customer return from outside the US? If this information is only available in your FAQ or policy page as readable text, agents can't retrieve it. Machine-readable means JSON, structured schema, or a dedicated endpoint. If it's prose, agents don't use it.

**Payment completes without human input**

This isn't theoretical. Test it. Go through your entire checkout flow as a bot would. Does 3D Secure auth require user intervention? Does the payment gateway send a text to the user? Does anything pause and wait for a human response? If yes, you've broken agent checkout. Most Stripe and Shopify setups handle this correctly. But if you've customised your payment integration, you may have introduced friction that's invisible until an agent tries to transact.

### Agent Discovery

What agents find before they reach your store.

**Collection pages have intent-based FAQs**

An agent receiving a query like "best wide-fit running shoe under $120" needs context. It needs to know which shoes in your catalogue are wide-fit. It needs to know which are under that price. Most collection pages are built for human browsing, not for agent queries. Add structured FAQs that answer common intent-based questions. This is machine-readable metadata about your collections, not just SEO metadata.

**Reviews mention use cases and comparisons**

A detailed 4-star review that says "I have wide feet and high arches, and these work better than my previous Altras" is worth more to an agent than a vague 5-star review. Encourage customers to mention their specific use case and any comparisons to other products they've tried. This data becomes signal that agents can use to route customers to the right product.

**Registered with Bing and Perplexity, not just ChatGPT**

There are three agent ecosystems now: ChatGPT, Perplexity, and Bing. Each has its own merchant registration program. Each surfaces products differently. If you've only registered with ChatGPT, you're missing 60% of agent queries. Register with all three.

**Active across YouTube, Reddit, and X**

Gemini weights YouTube content heavily. ChatGPT and Perplexity weight Reddit discussions. Grok indexes X. If you're only on LinkedIn, you're not feeding the signals that agents use to surface your products. You don't need to be famous on these platforms. You need to be present with real, useful content that agents can index and surface. A YouTube video comparing your product to competitors is signal. A Reddit thread where a customer solves a problem using your product is signal. X posts that answer common questions are signal.

### The Gap Matters

Most DTC brands are checking three or four of these boxes today. That number is going to matter a lot more in 12 months. The brands that treat this as infrastructure — not as a marketing tactic or a future concern — are building advantage that compounds. Agents are already buying. The question is whether they're buying from you.

Where are you on this? Still figuring out where to start, already testing, or watching to see how it plays out?

---
