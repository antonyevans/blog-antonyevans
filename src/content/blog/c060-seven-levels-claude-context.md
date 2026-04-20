---
title: "The Problem Wasn't the Model"
description: "I spent the first three months treating AI like a calculator. Type a question, get an answer. Occasionally useful, mostly generic."
dek: "Seven levels of context infrastructure \u2014 and why most people are stuck at Level 1"
pubDate: "2026-04-20"
category: engineering
tags: ["engineering", "system-lens"]
draft: false
---

I spent the first three months treating AI like a calculator. Type a question, get an answer. Occasionally useful, mostly generic.

The outputs were flat because I was giving it nothing to work with. No context about who I am, what I'm building, who it's for, what good looks like. Technically correct answers that were wrong for my situation.

That wasn't a model problem. The model just didn't know anything about my business. That was my fault.

Once I understood that, context stopped being a nice-to-have and became the only variable worth investing in. Not the model. The context around it.

This is what I've built through, level by level, over the past year.

---

### Level 1: Copy, paste, repeat

Everyone starts here. Open a chat, paste a background paragraph, ask the question. Same paragraph every time. Who I am, what I'm building, who it's for.

The output quality was directly tied to how well I remembered to paste it. On good days, decent. On days I skipped it, useless.

The real problem at Level 1 isn't laziness. It's that nothing accumulates. Each chat starts from zero. There's no compound effect.

### Level 2: Once, not every time

Claude Projects let you set context once and reuse it across sessions. A document describing who you are, a few reference files, a system prompt. Load it once; it's there for every chat in that project.

This felt like a genuine step up. I wasn't starting from zero.

But the ceiling shows up fast. Projects are scoped by task, not by area of your business. Sales, operations, brand — different projects. Context doesn't travel. If you update your ICP document, you update it in every project separately. And Claude can't write anything back. Every edit is manual.

Useful for repetitive, isolated tasks. Not useful for running a business.

### Level 3: SOPs with context attached

This is where the framing shifts.

A skill is a reusable prompt plus a context folder. The prompt is the operating procedure. The references folder holds everything Claude needs to execute it well. Build it once, run it indefinitely. Skills are schedulable, shareable, and testable.

What changed at Level 3 wasn't the output quality — it was how I thought about work. I stopped thinking in one-off chats and started asking: is this task repeatable? Should there be a skill for it? That reframe matters more than the tooling.

### Level 4: It starts writing back

This is the transition I'd tell someone to pay attention to.

I gave Claude access to a folder. Not a skill, not a project — a folder of files about me, my businesses, my goals. Claude read the folder at the start of every session, pulled from it during the work, and started writing outputs back into it.

Meeting summaries saved. Research stored. Decisions documented. The folder got smarter every session, without me managing it.

Context compounds. After six weeks of accumulated context, the quality of every session improved in ways I couldn't have designed deliberately. Claude knew things I hadn't told it that session — because I'd told it in a previous one and it was saved.

That shift from "Claude responds to what I give it" to "Claude maintains a record that improves over time" is the most important transition in the whole stack.

### Level 5: One project per workstream

The difference between Level 4 and Level 5 is scope.

Level 4: a folder for each task. Level 5: a folder for each area of your business. DTC store. Personal brand. Operations. Each with its own context, its own skills, its own scheduled tasks.

When I open a chat about the store, store context loads. Working on content, brand context is there. The project handles the routing. I don't switch manually.

This is what it means to organize by workstream rather than by task. The architecture has to match how you actually think about your work, not how the tool organizes tabs.

### Level 6: One vault. Everything connected.

This is where I am now.

One master folder. One CLAUDE.md file that acts as a routing layer — it tells Claude where to find context and where to put updates. Six workstreams, all pulling from the same source.

The routing layer is the part most people skip. Without it, a large context folder becomes noise. Claude doesn't know where to look. The CLAUDE.md solves this: it's not documentation, it's a navigation map. Brand context is here. Store state is here. If you're making recommendations, read anti-goals first.

I watched a video recently where a practitioner I hadn't encountered before walked through a near-identical architecture. Same folder structure, same routing pattern, same frontend. They arrived at it independently. That kind of convergence usually means the architecture is right.

Two things I learned the hard way at this level:

Skills should reference canonical files in the vault, not carry context copies inside themselves. When my ICP document changes, one update should reflect across every skill. If skills carry copies, you're maintaining the same information in fifteen places.

Weekly maintenance is mandatory. The system improves through use, but only if someone checks for duplicates, resolves conflicts, and keeps the routing layer accurate. This is not a set-and-forget setup. It's an operational responsibility, the same as any other part of the business.

### Level 7: The team OS

This is what I'd build next. I don't have a team to build it for yet, but the architecture is clear.

Sync the vault to a team. Everyone working from the same context base. One person owns the routing layer. Core strategy documents are read-only for most team members. Task outputs and research are writable with appropriate access.

The gap at the tool level is permissions. Granular read/write control per folder per person isn't natively solved in the current tooling. The best available option is a community sync plugin with a custom permission layer built on top. Functional but fragile. This is a gap someone will close in 2026.

Before any of the sync infrastructure, though: hire for context. One person whose role is maintaining the vault as a living document. Someone who understands that the quality of AI output is directly tied to the quality of what it's reading, and takes that seriously as a function.

---

### Why starting now matters more than starting right

The compounding argument is real, but the lag is longer than people expect.

A context infrastructure built today doesn't pay off today. It pays off in six months, when Claude knows your hiring philosophy without you explaining it, knows what you tried last quarter and why you stopped, knows the three things you've explicitly decided not to build.

The earlier you start, the longer the compounding window. Most people wait until the system is good enough to be worth investing in. That's backwards. The system gets good by being invested in.

Most people I talk to are stuck between Level 1 and 2. Not because the model isn't capable. Because the model doesn't know anything about them.

---

Where are you in this? And what's the specific thing that would push you to the next level?
