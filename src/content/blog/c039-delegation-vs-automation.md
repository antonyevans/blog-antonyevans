---
title: "Delegation vs Automation"
description: "Unpopular opinion: building AI workflows that stop for human confirmation isn't careful design. It might just be discomfort dressed up as caution."
dek: ""
pubDate: "2026-04-06"
category: engineering
tags: ["engineering", "system-lens"]
draft: false
---

Unpopular opinion: building AI workflows that stop for human confirmation isn't careful design. It might just be discomfort dressed up as caution.

A few weeks ago I built a grocery skill that replaces HelloFresh. It generates recipes, builds my Wegmans cart, then stops. I review it and hit checkout myself.

Felt responsible. Stripe and Google are now building the same pattern into their agentic commerce protocols, with mandatory human gates at payment. The received wisdom is clear: keep humans in the loop for financial decisions.

But I've been sitting with a different question.

Who does that confirmation step actually serve? The buyer who has delegated their shopping to an AI assistant didn't ask for a checkpoint. They delegated because they wanted the decision handled. The friction of reviewing a cart and approving a purchase is exactly what they were trying to remove. The confirmation step might be less about good design and more about the builder's comfort with what they've built.

I'm testing the other direction with shop-cli, a tool that lets an agent complete the full purchase loop, decision included. It's probably wrong in more cases than it's right. But the question is worth taking seriously: at what point does keeping humans in the loop become the last place we haven't accepted that the buyer already handed this off?

I built the confirmation step in. I'm not sure I'd make the same call again.

How much risk are you willing to put in the agent's hands?
