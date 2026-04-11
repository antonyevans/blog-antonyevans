---
title: "33 workflows, five layers \u2014 what a real harness looks like from the inside"
description: "The piece I wrote on harnesses described five component layers that every production agentic system needs: orchestration and planning, an execution environment, validation and quality control, context and memory management, and logic and interaction."
dek: ""
pubDate: "2026-04-11"
updatedDate: "2026-04-09"
category: engineering
tags: ["engineering", "system-lens"]
draft: false
---

The piece I wrote on harnesses described five component layers that every production agentic system needs: orchestration and planning, an execution environment, validation and quality control, context and memory management, and logic and interaction.

I've been building one for three months. Not for a software product. For running my working life.

Four parallel workstreams, managed through 33 named skills and commands running on a persistent codebase. No custom model. No proprietary inference stack. A structured set of workflows, each with a defined context load and execution sequence, running on top of Claude Code. Here's how the five layers actually look when you implement them in something real.

---

### Layer 1: Orchestration and planning

The orchestration layer is the review rituals.

`/daily` is the morning session: intention-setting, today's priorities pulled from the task board, open decisions surfaced from `04-decisions/pending/`. `/weekly` is the cross-workstream review, pulling pipeline state across all four workstreams, metrics, decisions needing resolution. `/status` loads the live state files from each workstream on demand and produces a current picture without requiring a full review.

These skills don't execute work. They decompose the system into what's active, what's blocked, what needs attention next. The task board at `tasks/` is the state machine that makes this possible: a unified task index with prefix conventions across all projects (`ea-`, `store-`, `aem-`, `shop-`), with explicit status and environment tagging. When `/weekly` runs, it reads the task board and the workstream summary files, not the full raw project state.

The orchestration layer isn't an orchestrator agent making decisions. It's a structured read of current state that produces a prioritized decision surface. The model outputs the planning summary. The skill specifies what gets read first.

---

### Layer 2: Execution environment

Skills are the execution environment.

Each of the 18 skills in `.claude/skills/` defines a bounded execution context: which files to load before starting, what steps execute in what order, what the output format must be. A skill is not an agent. It's a workflow with a guaranteed context load.

`/content` is the clearest example. Before writing a single word, the skill reads the voice reference for the channel, the format reference, two humanizer references covering specificity techniques and the AI tell-word taxonomy, brand guidelines, the personal brand summary, and the posts pipeline index. Eight context loads before generation starts. The actual drafting is roughly 20% of what the skill does. The other 80% is ensuring the model has the right context to produce something that doesn't need to be thrown out.

Skills can be configured to run on different models — a cheaper, faster one for bounded validation tasks, a more capable one where output quality is the constraint. Right now I'm using the same model across all 33. What changes between skills is what the model knows when it starts. `/humanizer` produces different output than `/content` not because a different model runs it but because a different set of constraints and references was loaded first.

The 33 skills and commands in this system are 33 different execution contexts. Some are short: `/capture` is a structured write to the inbox. Some are multi-phase: `/build-brand` runs ten steps across multiple tool calls, with human gates between phases. But each defines its own context perimeter — what's loaded, what's in scope, what the model is permitted to do before it starts.

---

### Layer 3: Validation and quality control

Three validation mechanisms, operating at different levels.

At the skill level: `/content` has a self-critique checklist built into step 5, run before the draft is presented. It checks for AI tells, voice match, platform-appropriate length, structural coherence. `/humanizer` is a separate pass, intentionally late in the pipeline. The constraint is that it should be light. If it requires heavy restructuring, the draft failed the specificity constraints that should have been active during generation. Late validation catching deep problems is a signal that upstream generation failed, not a reason to do more cleanup downstream.

At the output level: the `critic` agent is the independent evaluator. It reads everything but can write only verdict files. It has no web access, can run no scripts, cannot modify what it evaluates. An evaluator that could rewrite what it's assessing isn't an evaluator. The structural constraint is what makes the verdict mean something.

At the system level: `12-operations/harness/verification/harness-tests.py` tests the harness itself — destructive tools requiring approval, graceful stop behavior under token pressure. The harness can be tested the same way code can be tested. Changing it without running the verification suite is the same mistake as deploying without CI.

Across all three levels, the design rule is the same: generation and evaluation are always separate. The agent that produced the work does not assess it.

---

### Layer 4: Context and memory management

This is the load-bearing layer, and the gap between the theory and the practice is widest here.

In the research literature, context and memory management is one of five roughly equal components. After three months of building and running this system, it accounts for the most engineering effort and explains most of the output quality variation. The model is nearly a constant. Context is the variable.

The context management stack has four components.

**CLAUDE.md** is the persistent instruction set loaded on every session. It defines how the system works, where live state is, what agents exist and what they can do, what to read before making strategic recommendations, the environment detection protocol for WSL versus Windows. It's not a reference document. It's the invariant context that every session inherits, regardless of what was discussed in the last one.

**State files** are the mutable current state. `15-store-context/_store-state.md` holds the DTC store's live status — category, brand phase, infrastructure. `11-personal-brand/_summary.md` holds the brand thesis, pillars, pipeline counts. `08-knowledge/world-model/_state.md` holds the current state of external domains the system reasons about. Every skill that needs current state reads these files rather than reconstructing it from scattered directories. The state files are the compacted, authoritative current picture. Maintaining them is housekeeping. Not having them is why sessions lose coherence.

**The memory system** at `14-memory/` runs three tiers. Core memory loads at session start: agent persona files, the user profile, project state. Recall memory is per-agent conversation logs, queryable by agent or topic with Glob and Grep. Archival memory is durable knowledge — market insights, learned patterns, research findings — written when something surfaces that's worth keeping across sessions. No database, no vector store, no embedding pipeline. Flat markdown, queried with standard search tools. The design principle: zero infrastructure overhead. It delivers that.

**Skills carry context load sequences.** This is the part that doesn't appear in most harness architecture writing, because most harness architecture writing describes the structure, not the content of what gets loaded. Each skill defines not just what it does but what it reads before doing it. `/competitor-digest` fetches RSS and web content, but before that it reads the competitor roster file. `/source-products` reads the category state and compliance reports before generating anything. The skill is the unit that packages "what the model needs to know" alongside "what the model needs to do." Separate them and the skill degrades.

Building this has made one thing clear: almost all meaningful output improvements in this system came from getting context right, not from adjusting the generation step. Which files to maintain, what the skill context loads actually cover, how the memory system surfaces the right knowledge at the right time. Get that right and the generation step is almost easy. Get it wrong and no amount of prompt iteration recovers it.

---

### Layer 5: Logic and interaction

Two mechanisms: human gates and workflow state.

The human gate structure follows three tiers. File reads, searches, and writes within a skill's own domain require no gate. External integrations, web access, and shared state edits are logged and type-gated. Publishing to LinkedIn or X, executing purchases, sending supplier communications, modifying agent definitions: always human confirmation, no exceptions.

The third tier is what matters architecturally. Not because the other actions are low-stakes, but because Tier 3 defines where the system boundary is. Everything inside that boundary is automated. Everything across it requires a human decision. Making the boundary explicit and enforced, rather than assumed, is the difference between a system you trust and one you supervise.

Workflow state lives at `tasks/` across all four workstreams, supplemented by `12-operations/harness/workflow-state/active/` for multi-phase tasks spanning sessions. The task board is not a to-do list. It's the state machine for the system: what's in-flight, what's blocked, what environment a task requires, which agent is responsible. When a session starts, the state machine tells it where work actually is, not where the last conversation left off.

Conflating conversation state with workflow state is one of the more expensive mistakes in production agentic systems. The conversation transcript records what was said. It doesn't record whether the supplier message was sent before the crash or after, whether the Shopify draft was created or only planned, whether resuming from the apparent stopping point will duplicate an action. The task board and workflow state files are what make a session crash a recoverable event rather than a lost-work event.

---

### What implementing this reveals

The five layers are real and all of them do work, but they are not equally weighted.

Context and memory management is where most of the engineering time went, and it's where output quality is most sensitive to change. The causal path from "skill triggered" to "useful output" is longest in the context leg: what the skill loaded, what state files it read, what prior memory was available. Get that right and generation is almost automatic. Get it wrong and the session is usually a redo.

The research framing, "model is commodity, harness is the moat," is correct but understates which part of the harness does the compounding. It's not the orchestration logic or the permission tiers. Those are structural and can be replicated. It's the accumulated precision of the context layer: state files calibrated to how the system actually works, skill context loads tuned to what each workflow actually needs, a memory system shaped by months of real sessions rather than anticipated ones.

You can copy the agent structure. You can replicate the permission tiers. The state files, the skill context sequences, the accumulated memory are built up through real use, calibrated to a specific domain, and they get more precise over time.

That's what compounds. The context the agents work with, not the agents themselves.
