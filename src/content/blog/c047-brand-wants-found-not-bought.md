---
title: "The Brand That Wants to Be Found by AI \u2014 But Not Bought by It"
description: "OpenAI launched Instant Checkout in September 2025. By March 2026, it was dead. Five months, roughly 30 merchants out of millions adopted it, and they've since "
pubDate: "2026-03-28"
updatedDate: "2026-03-27"
category: notes
tags: ["notes"]
draft: false
---

OpenAI launched Instant Checkout in September 2025. By March 2026, it was dead. Five months, roughly 30 merchants out of millions adopted it, and they've since pivoted back to routing users to merchant sites. Most coverage focused on what went wrong technically: product data too messy to standardize at scale, no sales tax infrastructure, merchant onboarding described as "arduous." Those things are all true. But there's a more fundamental reason the post-mortems have mostly missed.

Merchants block AI agents from completing purchases because checkout is where they make money, and they built their businesses around it.

I came across a small signal of this a few weeks ago while auditing agentic commerce readiness across DTC categories. Top Shelf Gamer, a tabletop accessories brand, deployed llms.txt in February 2026. It's a structured file that makes their 261-product catalog legible to language models, licensed CC-BY-4.0, meaning they're actively inviting AI to read and use their catalog. When someone asks ChatGPT "what's a good dice tray under $40?", they want to be in that answer.

Their robots.txt, filed the same week, says something different: "Checkouts are for humans. Automated scraping, buy-for-me agents, or any end-to-end flow that completes payment without a final human review step is not permitted."

Same brand. Same week. Opposite signals. And it's completely coherent.

They've understood something most brands are still working out: there are two distinct layers to agentic commerce, and they don't have to be treated the same way. Layer one is discovery, where you want AI to be as loud a megaphone as possible. Layer two is the transaction, where you want the human on your site, seeing your related products, joining your email list, becoming a relationship rather than a transaction. This pattern isn't limited to one brand. Boppy, JigSaw Depot, and most of the protein and supplement brands I looked at have similar language. Subscription-dependent brands are the most explicit because the math is clearest there.

Shopify quietly validated this at the platform level. In early 2026 they updated robots.txt language across merchant storefronts with nearly identical wording: blocking "buy-for-me" agents and any end-to-end flow without a human review step. They've described it as just a "comment," but the timing and specificity suggest something more deliberate.

The strategy makes sense, and the data supports it. AI-assisted shoppers convert at 49.3% compared to 26.3% for unassisted shoppers, but almost all of that conversion happens on merchant sites, not through autonomous agents completing purchases. And 53% of US consumers have made purchases based on AI recommendations, so the discovery layer clearly works. The friction point is the transaction layer, where roughly half of consumers say they're uncomfortable with fully autonomous purchases. Merchants are reading the room correctly.

I understand this because I spent several years designing exactly the system that AI agents threaten. At Wild Earth, we sold premium dog food, and checkout was one of our most important commercial tools. Customer acquisition was expensive enough that the first order rarely covered CAC. The checkout was where we made the unit economics work: subscribe-and-save enrollment, treats and supplements surfaced at 90% margin, shipping free because the dog food was already in the box. An AI agent that buys the dog food and exits takes the item and leaves everything else on the table. For a brand running on that model, a frictionless agent purchase is closer to a loss than a win.

This is the trap. The brands that most need to adapt to agentic commerce are the ones most structurally dependent on checkout economics. Subscription LTV requires the human in the funnel. The whole conversion architecture, the email capture, the upsell surface, the retention sequence, lives in that moment between cart and confirmation. You can't remove the friction without breaking the P&L. It's the innovator's dilemma applied cleanly: the thing that made you successful is exactly what prevents you from seeing what's next. Incumbents can see the shift coming. They just can't move toward it without dismantling the mechanism that funds them.

So there's an opening.

A brand built from day zero without that dependency looks different. The economics sit in the product margin rather than the funnel. No subscription enrollment to protect, no upsell surface carrying 30% of revenue, no email list that lives or dies at the checkout gate. The agent becomes the relationship layer rather than a threat to it. AI agents already know who the customer is, what they bought before, what they're likely to need. You don't need to capture them at checkout when they're already captured.

The consumer this serves is a specific one: the buyer who has delegated shopping to an AI assistant and wants the full loop handled, discovery through purchase, without being bounced back to a checkout page optimized for the merchant's interests rather than theirs. That segment is small today. It may be the highest-value cohort of the next three years, and right now almost nobody is building for it deliberately. Every established brand wants to be recommended by agents. Almost none want to be bought by them.

Being agent-readable is fast becoming table stakes. Being agent-buyable is the moat, and it's one that incumbents can't build because the architecture that would create it would destroy the architecture they currently depend on.

I'm thinking about this space at the moment, partly as a lens on my own next move. If you're building in this direction, or have thought about what a genuinely agent-native commerce brand would look like from first principles, I'd like to hear from you.
