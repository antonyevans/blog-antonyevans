---
title: "The org chart was always a harness. Dorsey just built a better one."
description: "Nobody designed the org chart as a management philosophy. It was infrastructure."
dek: ""
pubDate: "2026-04-09"
category: ai-tech-operator
tags: ["ai-tech-operator"]
draft: false
---

---

Nobody designed the org chart as a management philosophy. It was infrastructure.

The Romans invented nested hierarchy to solve a specific engineering problem: how do you coordinate 5,000 soldiers across a battlefield when the only way to route information is through humans? Their answer, 8 soldiers to a squad leader, squads to centuries, centuries to cohorts, was a system for getting reliable output from fallible components without any of the communication technology we take for granted.

It worked. The model spread. We inherited it almost unchanged and built 170 years of management theory on top of it, as if the pyramid was the point rather than the workaround.

Jack Dorsey published an essay this week arguing that AI makes the whole structure obsolete. He's right, but not quite for the reasons the headlines suggest. The org chart isn't being replaced because managers are unnecessary or because AI is smarter than people. It's being replaced because AI engineering has produced a better answer to the same infrastructure problem hierarchy was built to solve.

That answer is called a harness.

---

### Part 1: What a harness is, and why it exists

When you interact with a language model directly, you're using something impressive but unreliable. It gets things roughly right most of the time. For creative tasks or exploration, that's fine. For anything that needs to run repeatedly, at scale, with consequences, it isn't.

The argument for why comes from Andrej Karpathy's reliability math. Reaching 90% success on a single step with an AI model is relatively easy. But compound that across a multi-step workflow and the numbers get ugly fast.

![Karpathy's reliability compounding](/images/posts/c051-karpathy-reliability.png)

A 10-step process where each step succeeds 90% of the time produces a 35% end-to-end success rate. Run that process 10 times a day and you get more than six failures. Every day. You cannot prompt your way past this. The model isn't going to get more reliable because you asked it to try harder.

A harness is the engineering response to this problem. It's the software layer that wraps around the model to produce reliable, goal-directed output for complex workflows. Not by making the model smarter. By building deterministic structure around it.

A harness has five components:

![Harness architecture — five layers](/images/posts/c051-harness-architecture.png)

**Orchestration and planning**: a planner agent takes a high-level goal and decomposes it into phases. A state machine tracks where the workflow currently is. The harness knows what has been done and what comes next.

**Execution environment**: sub-agents handle narrow tasks in isolation, with fresh context windows, running in parallel where possible. Each phase writes its output to a scratchpad. If anything fails, the harness restarts from the last good checkpoint rather than starting over.

**Validation and quality control**: this is the part that makes harnesses different from just calling an API. A separate evaluator agent reviews the output of every generation step. The generator and evaluator work in tension: generate, critique, improve, iterate until the output meets defined criteria. The evaluator is never the same agent that produced the work. Self-evaluation is one of the most reliable ways to get confidently wrong output.

**Context and memory management**: as a model's context window fills during a long task, it starts to rush. It declares things done prematurely. It loses coherence. The harness manages this: sub-agents keep their context isolated, a persistent memory file (typically a CHANGELOG) carries state across sessions, and when context pressure gets too high, the harness resets to a fresh session with a structured handoff rather than letting the model degrade.

**Logic and interaction**: defined pause points where a human must approve before the system proceeds (deleting data, making payments, sending emails). Structured output schemas that force the model's response into a format the harness can parse reliably. Programmatic templates for final deliverables rather than letting the model freestyle the formatting.

Stop thinking of it as a conversation with an AI. Think of it as a factory. The model is one station on the production line. The harness is the line.

---

### Part 2: What Dorsey is actually building

Block cut nearly half its workforce in February 2026, around 4,000 people, from 10,000+ down to under 6,000. The stated reason wasn't cost pressure. Block posted $10.36 billion in gross profit in 2025, up 17% year-on-year, and raised guidance for 2026. Dorsey's explanation was architectural: a smaller team using intelligence tools can do more than a larger team without them. He called the destination "an intelligence-native company."

The essay he published with Sequoia's Roelof Botha explains what that means structurally. When Taylor formalized Scientific Management and McCallum drew the first corporate org chart for the New York and Erie Railroad in the 1850s, they were adapting the Roman routing solution to a new context. The model worked well enough for 170 years, not because it was the best way to coordinate intelligent people, but because there was no better answer to the routing problem.

Block's replacement has four layers:

![Block's four-layer architecture](/images/posts/c051-block-four-layers.png)

**Capabilities** are atomic financial primitives: payments, lending, card issuance, banking, BNPL, payroll. They have no UI of their own. They're not products. They're reliable, composable building blocks, things the system can call when it needs them.

**World Models** are where the company's understanding lives. Block has two: a model of how the company itself operates, and a per-customer model built from both sides of millions of real financial transactions. Dorsey: "Money is the most honest signal in the world." The world model isn't static documentation. It learns from every transaction that flows through Block's ecosystem.

**The Intelligence Layer** composes capabilities proactively based on what the world models know. The essay gives a specific example: a restaurant's cash flow is tightening ahead of a seasonal dip the model has seen before. The intelligence layer identifies this pattern, composes a short-term loan from the lending capability, adjusts the repayment schedule to the restaurant's revenue cycle, and surfaces the offer to the merchant before they even look for one. No manager reviewed this. No approval chain was consulted. The system composed the right action from the signals it had.

**Interfaces** are everything customers see, Square, Cash App, Afterpay. Dorsey is explicit about where the value lives: "The value is in the model and the intelligence, not the interfaces themselves." The interface is the thin output layer.

Three roles replace the management layers that hierarchy required:

![Three roles vs traditional hierarchy](/images/posts/c051-three-roles-vs-hierarchy.png)

**ICs** build and operate the four layers. The key change: the world model gives them the context that managers used to provide. In a traditional org, an IC needs to escalate to understand whether a decision fits broader company strategy, whether a pattern they're seeing is known elsewhere, whether their work conflicts with another team's. In Block's model, the world model holds that context. ICs can make independent decisions without seeking upward permission.

**DRIs** (Directly Responsible Individuals, borrowed from Apple and significantly extended) own specific cross-cutting outcomes for a defined period. A DRI might own "merchant churn in the restaurant segment" for 90 days, with full authority over resources across teams. When the problem is solved or the period ends, the DRI assignment dissolves. This isn't a job title. It's a temporary, scoped grant of authority over one outcome.

**Player-Coaches** do two things: they build (writing code, developing models, shipping) and they develop people. They replace managers whose primary job was information routing. A Player-Coach isn't a manager who sometimes gets their hands dirty. They're a builder who also takes responsibility for the people around them.

---

### Part 3: The same problem, solved twice

Put the two frameworks next to each other.

![The same problem, solved twice](/images/posts/c051-mapping-harness-block.png)

The reasoning behind each element is the same in both frameworks.

Sub-agents in a harness are narrow and isolated because composable reliability requires each component to be independently reliable. Block's capabilities work the same way: atomic, no UI, no state, composable without their internals interfering with each other.

The memory layer in a harness is where the system's accumulated knowledge lives: the RAG playbook, the CHANGELOG, the precedents that let the agent make good decisions without starting from scratch. Block built the same layer from the most honest signal available. Real financial transactions from both sides of the market.

Block's intelligence layer composes capabilities based on what the world models know, proactively surfacing actions the merchant hasn't thought to ask for yet. The harness orchestrator does the same thing from the software side: composes sub-agents based on memory signals, with an adversarial evaluator checking every step.

Both architectures have a deliberately thin output layer. In a harness, programmatic templates handle final deliverables because the value lives in the reasoning that produced the output, not the formatting. Block's interfaces, Square, Cash App, Afterpay, are the same: surfaces on top of models that do the real work. Both also have defined points where human judgment is required before anything consequential proceeds. DRIs in the org. Human-in-the-loop gates in the harness. Named people with scoped authority, rather than diffuse approval chains where accountability gets lost.

Harness engineers are emerging as a distinct discipline: people who understand software engineering, AI-specific context management, adversarial evaluation design, and orchestration patterns. Player-Coaches are Dorsey's version. They build the system and calibrate it. They don't route information through it.

The phrase from the Dorsey essay that lands differently once you see the mapping: "The intelligence lives in the system. The people are on the edge. The edge is where the action is."

That's not a philosophy statement. It's an architecture decision. In a well-designed harness, the model and its supporting structure handle the work that can be systematised. The humans are at the boundary, doing the things the system genuinely can't: sensing novel context, making ethical judgments, building trust with other humans. Noticing what the world model doesn't yet know. You don't put humans in the middle to route information. You put them at the edge where their judgment is irreplaceable.

---

### Part 4: Where both frameworks converge — the moat

In harness architecture, the competitive advantage isn't the model. Models are becoming commodity. The performance gap between frontier systems has narrowed to the point where model choice rarely determines outcomes. What determines whether a harness succeeds is the quality of the memory and validation layers, not which model it calls. That's the moat: what the system knows and can reliably act on. Not the intelligence it rents from an API.

Dorsey makes the same argument about organisations. The essay's central question: "What does your company understand that is genuinely hard to understand, and is that understanding getting deeper every day?"

Block's answer is the economic graph, both sides of millions of merchant and consumer transactions in real-time. That understanding can't be purchased or quickly replicated. It deepens every day as more transactions flow through the system. It's the reason the intelligence layer can surface a loan offer at the right moment rather than just offering loans generically.

His framing of what happens without it: "AI doesn't augment your company. It reveals what your company actually is." If you don't have proprietary understanding that deepens continuously, AI makes you leaner. It doesn't make you stronger. You get the cost optimization without the compounding advantage.

![Where both frameworks converge](/images/posts/c051-moat-comparison.png)

The question for any company thinking about AI adoption isn't which tools to use or which workflows to automate. It's what your company understands that nobody else can easily learn. If you have a clear answer, AI amplifies it. If you don't, that's probably the more urgent problem to solve.

---

### Why this matters

Traditional hierarchy was an engineering solution to a coordination problem. The best available answer for 170 years. It isn't being replaced because it was bad management. It's being replaced because a better engineering solution now exists for the same routing problem it was built to solve.

That changes what you look at when evaluating whether something is working. You don't ask "are our managers managing well?" You ask "where is the information getting stuck, and what's the correct structural fix?" You don't ask "should we cut headcount?" You ask "which layer of this system is introducing failure?"

The harness and the intelligence-native org are both trying to build reliable systems from fallible components. One operates in software. The other operates across humans and software together. The design principles are the same because the problem is the same.

Dorsey rebuilt the org chart. He didn't reinvent it. He just finally got to use better materials.

---
