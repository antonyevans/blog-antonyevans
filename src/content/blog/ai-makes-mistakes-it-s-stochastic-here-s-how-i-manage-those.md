---
title: "AI makes mistakes, it's stochastic, here's how I manage those"
description: "AI is fundamentally probabilistic and will make mistakes. Seven ways I manage that, from human review to fresh-context judges to shrinking the blast radius of any single error."
pubDate: 2026-09-09
category: "engineering"
tags: ["ai", "reliability", "agents"]
draft: false
---

AI is fundamentally probabilistic. Even the best models are going to make mistakes (looking at you Astra). Here's how I handle that:

1. **Check the output myself.** Obviously the gold standard, but that makes me the bottleneck and prevents scaling.
2. **Agent loops:** a fresh-context LLM judges the work. Simplifying the maths a bit, this squares the error rates (so 90% correct goes to (1-90%)*(1-90%) = 99% accurate).
3. **Tests and deterministic code:** use the LLM to write deterministic code that you check against tests. Loop it until all the tests pass, and you know your confidence interval. Sadly only works for things you can define tests and specs for.
4. **Acceptance:** human systems make mistakes as well. Ultimately what matters is the cost of any errors vs the cost of fixing them, in terms of tokens or human labor. We don't need perfect systems to create value for a use case.
5. **LLM council:** ask multiple LLMs, and even have them debate.
6. **Structured output:** force it to write XML or JSON in a defined framework so it stays on task.
7. **Shrink blast radius:** e.g. staging environments and integration tests, or decompose the work into smaller bite-sized pieces that are easier to check.

None of these are mutually exclusive. In practice they stack: deterministic tests where you can define them, a fresh-context judge where you can't, spot-checks from a human where the stakes are highest, and an honest cost model tying it all together. The goal isn't a flawless model: it's a system that's net-positive even though every component in it, human included, is fallible. That's just like managing any system or organization beyond a couple of people.
