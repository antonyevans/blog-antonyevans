---
title: "The COO's Job Is Building the AI Operating System"
description: "The COO's job in an AI-first company is to build the operating system the company runs on. Here is what that OS looks like and how to build it."
dek: ""
pubDate: "2026-04-30"
category: engineering
tags: ["engineering", "system-lens"]
draft: false
---

> **TL;DR:** In this piece, Antony Evans argues that the COO's real job in an AI-first company is to build a five-layer operating system: sensors, policy, tools, quality, and a learning mechanism that closes feedback loops automatically. Companies that add only the first four layers match the field. The fifth layer is what pulls away.

Most companies approach AI the same way Ford's workers once approached the assembly line: with fear, then grudging adoption, then the relief of realizing it just makes the existing job a bit faster. The car still gets made the same way. The horse just got stronger.

That framing is wrong, and it's expensive to get it wrong.

The COO's job in an AI-first company is not to add AI tools to an existing operating structure. It is to build the operating system the company runs on. That shift sounds abstract until you try to run a company the old way and watch a two-person startup hit $2M ARR while your 40-person team is debating which departments get AI access.

---

## Why Is Treating AI as a Productivity Tool the Wrong Frame?

Treating AI as a productivity tool keeps the org chart fixed and measures improvement at the level of individual tasks. Engineers are 20% faster (per YC AI event, April 2026). Customer support handles more tickets. Finance closes faster. All of this is true, and all of it is the wrong unit of analysis: the structure itself never gets questioned.

You have your hierarchy, your information flows, your approval chains, your meeting cadences. AI sits on top of all that and makes each step a bit quicker.

The capability framing asks a different question: what can we now do that we literally couldn't do before? Not faster. Not cheaper. Actually impossible before, and now possible.

AnswerThis is a research platform doing $2M ARR with two full-time people (per YC AI event, April 2026). Their customer support agent reads the production codebase directly to answer support questions about subscription logic. When it hits something it can't handle, it writes the tool it needs and adds it to itself — the agent has self-authored over 45 CLI tools to date (per YC AI event, April 2026). That company isn't running AI on top of an org chart. The AI is the operating infrastructure, and the two humans are doing things that require humans.

YHangry, a UK catering marketplace, stated it plainly: "Team is AI native or you get fired." They fired the CTO who didn't know what skill files were and had someone new in the seat within a week. That's not a performance improvement program. That's a different theory of what the company is.

---

## What the OS Actually Consists Of

The AI operating system has five layers: sensors that capture what happens in the company, a policy layer that defines what the system can do autonomously, tools that execute deterministic operations, a quality layer that verifies outputs, and a learning mechanism that closes the feedback loop. Most companies build the first four. Almost nobody has the fifth running.

1. **Sensors** — the input layer: emails, support tickets, code commits, cancellations, Slack messages, meeting transcripts. If something happens in the company and it isn't recorded, it doesn't exist to the intelligence at the center. No sensors, no OS.
2. **Policy** — the decision layer: what the system can do autonomously versus what requires human sign-off. Most companies put too much in the "human required" bucket, not because the human adds value, but because nobody has defined the rules clearly enough to trust anything else.
3. **Tools** — the execution layer: deterministic APIs, database queries, calendar lookups, CLI scripts. Things that need to be exact rather than approximate, where you route around the LLM rather than through it.
4. **Quality** — the verification layer: evals, deterministic checks, safety filters, human review for high-stakes actions. Most companies have some version of this, though it tends to be more aspirational than operational.
5. **Learning mechanism** — almost nobody has this running.

This is where the architecture becomes genuinely different from anything that came before. The learning mechanism is a closed loop: the system interacts with the world, identifies where it fails, writes the fix, deploys it, and you see the improvement the next morning. The same query that failed yesterday works today. The company gets better while you sleep.

YC built this for their internal agent, which handles founder and investor Q&A. The monitoring agent watches every query, identifies failures, asks "would a new tool fix this? does the skill file need updating? does the database need a new index?", writes the code, opens a merge request, auto-deploys. Tom Blomfield (YC Partner, Monzo co-founder) described his reaction when he saw it working: "Holy f****** s***. That's not AI making you 25% better. It's AI closing its own feedback loop." (YC AI event, April 2026)

Build the first four and you've matched the field. Build the fifth and the field can't catch up.

---

## What Belongs in the LLM vs. What Belongs in Code?

The most important design decision in any agentic system is the latent/deterministic split: judgment calls belong in the LLM, exact operations belong in code. Before you can build layer 5 (the learning mechanism), you have to get layer 3 right (the tool layer). Gary Tan, CEO of Y Combinator, describes this split as "90% of the battle."

Latent space is for things that require judgment: ambiguous decisions, nuanced analysis, understanding intent, value calls where context matters. The LLM is extraordinarily good at these. It is terrible at the other category.

Deterministic space is for things that require exactness: arithmetic, timestamps, timezone conversions, SQL queries, URL tracking. Anything where being approximately right is the same as being wrong. These should never go through the LLM. Write a CLI script, call an API, run a query. Pass the result to the agent. Don't ask the agent to guess.

The failure modes are predictable once you know the frame. An agent sent to look up travel dates will call calendar APIs, search email, get confused by ambiguous entries, and give you a wrong answer with high confidence. The fix is a deterministic script that returns clean JSON. A timezone conversion through the LLM will be slightly wrong in edge cases. The fix is a helper function that returns exact UTC offsets.

Gary Tan walked through 3 concrete failure cases at the YC AI event (April 2026) that all traced to this root cause: timezone conversions, travel scheduling lookups, and URL tracking — each routed through the LLM when it should have been deterministic code. The fix in every case: move the operation out of the LLM and into a tool.

This design decision also shapes what the COO builds as infrastructure. Every agentic process needs someone to have made the latent/deterministic call for each operation. That's not a one-time architect's job. It's a continuous governance question for every new function you add to the OS.

---

## What Is the Difference Between an Open-Loop and a Closed-Loop Company?

An open-loop company makes decisions, executes, and does not systematically feed results back into the process. A closed-loop company monitors output continuously, feeds results into the policy layer, and self-regulates toward the goal. The difference is not whether the company measures anything; it is whether the measurement changes behavior at the level where decisions are actually made.

Old companies ran open-loop. Make a decision. Execute. Don't systematically measure the outcome. Don't adjust the process based on what happened. Inherently lossy. Information falls out of the system at every handoff. The middle management layer exists largely to compensate for this: human coordinators whose job is to hold context and route it in the right direction because the system itself can't.

Our marketing function at Wild Earth had a weekly review. Reports pulled every Friday, team assembled, results discussed. It sounds like a closed loop. It wasn't. The effort required to pull and format the reports meant the review stayed high-level: overall ROAS, blended CAC, top-line channel split. The specific signals — which creative variant had started to fatigue, which audience segment drove the Friday spike, which email subject line had quietly underperformed for three weeks — were sitting in the data but rarely surfaced in the room. The decisions we made were informed by the right data in aggregate and the wrong data in specifics. The feedback loop existed on paper and was still lossy in practice. Open-loop doesn't mean unmeasured. It means the friction of aggregation makes the feedback too coarse to actually change behavior at the level that matters.

AI-native companies run closed-loop. Monitor output continuously. Feed results back into the policy layer. Self-regulate toward the goal. Every function that has a sensor layer, a feedback signal, and write access to its own instructions can become a self-improving loop.

The COO's architectural question for every process is: is this open-loop or closed-loop? If open-loop, what would it take to close it?

Sprint planning is a common example. The old version: product manager synthesizes updates from five people in a meeting, writes a plan, presents it to engineering, three rounds of clarification, sprint starts a week later than it should. The closed-loop version: agent with access to Linear, Slack engineering channels, customer feedback, GitHub activity, and standup recordings analyzes what shipped last sprint, how well it matched customer needs, and proposes the next sprint automatically. Some teams running this version have cut sprint planning time in half and report getting significantly more done per cycle (per YC AI event, April 2026).

The "lossy manager status rollup" is replaced by a continuously-updated legible system. The information doesn't fall out at the handoffs because there are no handoffs.

The diagnostic question is simple: does this process feed back into the intelligence layer? If not, it's still open-loop regardless of what AI tools it uses.

---

## What Happens to the Org When You Close the Loops?

When you close the loops, the shape of the company changes in a specific direction: the middle layer compresses, the edges expand, and three distinct roles emerge (per YC AI event, April 2026). This is not a dystopian outcome — most people doing coordination work would rather build or decide. The AI takes the coordination job.

What expands is the edges: the people doing direct work and the people making high-stakes judgment calls.

There are three roles in an AI-native company, and they're worth distinguishing clearly.

1. **IC/Builder-Operator** — the person who directly makes and runs things. Not limited to engineers. In a DTC brand, this is the person who builds the agent that processes returns, tests the copy, monitors the ad account. They come to meetings with working prototypes, not slides.
2. **DRI (Directly Responsible Individual)** — accountable for a specific outcome. One person, one thing, no committee. Clear ownership of a result, using agents and tools to achieve it. Token spend is their budget, not headcount.
3. **AI Founder type** — the one most people miss. This is the founder or COO who must personally demonstrate capability. Not delegate AI strategy. Not assign someone to "own AI transformation." Personally show the team what a 10x capability gain looks like.

10x Science, a YC W26 company founded by Stanford scientists, ran 218 agents continuously to hit an enterprise pilot deadline. They signed a $300K biopharma contract in two weeks (10x Science, via YC AI event, April 2026). One of the founders has five Apple Silicon machines pooling memory. That isn't someone who approved an AI strategy. That is someone who personally built the system.

Tom Blomfield put it bluntly: "If your API bill doesn't make you uncomfortable, you aren't spending enough." (YC AI event, April 2026) The COO's job is to be the person who makes that call and lives it visibly.

---

## How Do You Actually Start Building the AI Operating System?

Building the AI operating system starts with five concrete moves: record everything, diarize aggressively, build a living user manual instead of static SOPs, treat domain knowledge as irreplaceable and software as disposable, and close every loop by checking whether each core function has a sensor, a policy, a tool layer, and a feedback mechanism.

1. **Record everything** — if a meeting, conversation, or decision isn't captured, it doesn't exist to the intelligence at the center. Smart glasses, room microphones, AI notetakers, Slack channel policy over DMs. The sensor layer is the foundation. Without it, the closed loops can't close.

   This article was built from a recording I made at the YC event. I've been routing all my meetings and events through a personal capture system for a couple of months, and it works, until it doesn't. Google Recorder makes automation difficult; occasionally a recording doesn't make it through the pipeline and I find out when I go looking for something that isn't there. The sensor layer exists. The path from sensor to context is still leaky. Recording everything is necessary but not sufficient: the pipeline from capture to usable context needs to be as robust as the capture itself.

2. **Diarize aggressively** — raw transcripts are noise. Distill everything down to essential signal by category: hiring, fundraising, product, ops. The intelligence layer needs the right context to fit in the window. 100,000 hours of conversation can't go in (per YC AI event, April 2026); the distilled signal can.

3. **Build a living user manual, not a static SOP** — YC distilled 2,000 hours of partner office hours into a continuously-updated manual (YC AI event, April 2026) that is better than anything written by hand, because it self-improves every time new advice is given. The agent watches what humans do, infers the rules they can't articulate, and improves the documentation without being asked. Static SOPs are written by humans who forget what they actually know.

4. **Treat software as disposable; treat domain knowledge as irreplaceable** — you can regenerate a dashboard in an afternoon. The business logic in human heads took years to accumulate. Store the data and knowledge preciously. Delete nothing. Build the software on top as throwaway, because it will be replaced.

5. **Close every loop** — for each core function, ask: does this have a sensor layer? A policy layer? A tool layer? A quality check? Does it feed back into the intelligence at the center? If the answer to any of these is no, that function isn't in the OS yet. It's still open-loop. It's still burning coordination costs.

A note on what this framework requires: the five-layer OS demands real upfront investment in sensor infrastructure that most companies underestimate. It also assumes a team with the capability to build and maintain agentic tooling. For organizations without that capacity, the closed loops stay open regardless of intent.

---

## Is Your Company Still Asking the Wrong Question About AI?

"How do we use AI" is the wrong question. The right question is whether the current shape of the company still makes sense given what AI can now do. That question is about org design and operating structure — and it belongs on the COO's agenda, not the IT department's. The hierarchy exists to route information and coordinate execution. AI routes information better and coordinates execution more reliably, without the politics, context loss, and calendar constraints of human coordination layers.

That doesn't mean the humans disappear. It means the humans should be doing things that require humans: judgment, taste, relationships, the calls that can't be systematized. The middle layer that was doing the routing can either retrain as builders and operators or exit.

The COO who treats this as "figure out which tools to license" is still thinking about the faster horse. The COO who treats this as "rebuild the operating system of the company" is building something that will compound while they sleep.

Get the first four right and you have a modern operation. Add the fifth and it starts pulling away on its own.

Last updated: 2026-04-30
