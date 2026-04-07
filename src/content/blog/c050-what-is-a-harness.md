---
title: "What is a harness? The engineering layer that makes AI agents actually work."
description: "!The LLM is the engine. The harness is the car."
dek: ""
pubDate: "2026-04-07"
updatedDate: "2026-03-31"
category: ai-tech-operator
tags: ["ai-tech-operator"]
draft: false
---

![The LLM is the engine. The harness is the car.](/images/posts/c050-linkedin-post-ai-harness-car-v1.jpg)

A 10-step agentic workflow running at 90% reliability per step doesn't sound like a problem. Until you do the math.

At 90% per step, across 10 steps, each run has about a 35% chance of completing without a failure. Run that workflow 10 times a day and you get six or seven failures before lunch, every day, reliably. This is Andrej Karpathy's "march of nines" — getting from 90% to 99% requires roughly ten times the engineering effort. Getting from 99% to 99.9% requires ten times more again. Each additional nine is exponentially harder to earn.

This is the core challenge of building with AI agents in 2026. Not whether the model can reason well enough. Not whether the context window is large enough. Those problems are mostly solved, or getting solved fast. The problem is reliability at production scale, in multi-step workflows where errors compound.

Prompting can't fix this. You can write the best prompt in the world and a model will still occasionally skip a step, misread an output, or hallucinate a value in a calculation. At low frequencies and low stakes that's tolerable. In an automated workflow running dozens of times a day, it isn't. The model needs to be on deterministic rails. A harness is those rails.

**What a harness actually is**

A harness is the software layer that wraps around an AI model to produce reliable, goal-directed output for complex, multi-step workflows. The model provides the intelligence — the reasoning, the language generation, the judgment. The harness provides everything else: the prompts, the tools, the validation loops, the context management, the sub-agents, the execution environment. The model is the engine. The harness is the car.

The term has been circulating in engineering communities since late 2025 and is now broadly accepted as the defining concept of the agentic era. It matters because it clarifies where the real work is. Models have become close to a commodity. GPT-4, Claude, Gemini — at the top end, they're all capable. Harness quality is what separates an agent that works from one that doesn't.

**Five layers that make a harness**

Orchestration is the planning layer. A planner agent decides what steps are needed, in what order, with what dependencies. In more complex systems, this becomes a state machine — a formal structure that tracks where the workflow is and what comes next. Fixed SOPs work for predictable tasks. For tasks with branching logic or uncertain paths, a dynamic planner is needed.

Validation is the layer most builders skip, and the absence of it is where most agents quietly fail. The pattern that works is generator-evaluator: one agent produces the output, a separate agent evaluates it against defined criteria. The generator and evaluator are adversarial by design. The evaluator doesn't trust the generator. It checks the work. A useful variant is what some engineers call the "linter loop" — the agent must pass type checks, schema validation, or test suites before the output is accepted. The criteria are defined before the work starts, not after.

The execution environment is where work actually happens. This includes virtual file systems or scratchpads where the agent reads and writes intermediate outputs, sandboxes that isolate the agent from unintended side effects, and sub-agents that handle specialised subtasks in parallel, often using cheaper, faster models for the work that doesn't need the full capability of the primary model.

Context management is a less-discussed but critical layer. Models get worse as their context window fills. This isn't a hypothesis — it's observable. As context accumulates during a long task, models begin to rush: skipping steps, declaring tasks finished before they are, dropping constraints that were set early in the conversation. The solution is deliberate context isolation: sub-agents with fresh context windows, compaction strategies that summarise history rather than append it, and structured session handoffs that pass what the next session needs without carrying over the noise of the previous one.

Logic and interaction covers how the harness handles structure and humans. JSON schemas over Markdown for any data that downstream code needs to parse. Programmatic output templates rather than freeform generation where format consistency matters. And human-in-the-loop gates at decision points where the cost of a wrong call is high.

**What this looks like in practice**

Stripe has built what they call "minions" around Claude Code — automated validation pipelines that run every Claude-generated change against three million tests. No human reviews the change first. The harness either passes or rejects. This is what production-grade agentic engineering looks like: not humans supervising every step, but a system rigorous enough that humans don't need to.

On the other end of the complexity spectrum, Anthropic's own team built a browser-based digital audio workstation in roughly four hours for around $125. The architecture was straightforward: a planner agent produced a feature list and implementation sequence, a generator agent wrote the code, an evaluator agent reviewed each output before it was accepted. Three layers. Clean handoffs. No single agent trying to do everything in one context window. The harness kept the work coherent across many steps.

The legal contract review systems I've been studying run even deeper: eight-phase state machines, 34 parallel sub-agents, RAG pipelines pulling from jurisdiction-specific playbooks, programmatic Word document output that looks like a human lawyer produced it. The intelligence is distributed across dozens of agents. The harness is what makes the whole thing cohere.

**The strategic implication**

There's a version of this that's purely technical — a framework for engineering teams. But I think the strategic implication is more important.

The model is now commodity. Not in the sense that all models are identical, but in the sense that for most use cases, the ceiling of model capability isn't the binding constraint. Frontier models are capable enough. What isn't commodity is the layer that makes that capability reliable, repeatable, and trustworthy in production.

This is where durable value will be built in the agentic era. Not in training a better base model. Not in writing better prompts. In the harness: the orchestration logic, the validation architecture, the context management patterns, the institutional knowledge of how to make a specific kind of complex workflow actually work.

"2025 was agents," as one framing puts it. "2026 is harnesses." Teams that figure out how to build reliable harnesses for their specific domain are building a moat that compound over time. Teams that treat reliability as a prompting problem are going to keep producing the same six failures before lunch.

The model is the engine. The harness is the car. Most teams are still only thinking about the engine.
