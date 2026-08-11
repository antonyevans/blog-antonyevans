---
title: "When to fix AI's work by hand vs fix the system that produced it"
description: "The short version: When an AI agent gets a task 80% right, you can patch the last 20% by hand and ship today, or fix the instruction behind it and never touch that task again. The patch is faster now. The fix compounds. Most people, me included, pick the patch too often, because the economics that should govern the choice have changed and our instincts haven't caught up."
dek: ""
pubDate: "2026-08-11"
updatedDate: "2026-05-22"
category: engineering
tags: ["engineering", "ai-tech"]
draft: false
---

# The 80% Problem: When to Fix AI's Work, and When to Fix AI

**The short version:** When an AI agent gets a task 80% right, you can patch the last 20% by hand and ship today, or fix the instruction behind it and never touch that task again. The patch is faster now. The fix compounds. Most people, me included, pick the patch too often, because the economics that should govern the choice have changed and our instincts haven't caught up.

It's a small moment, and it happens several times a day. I hand a task to an AI agent. It comes back 80% right. The structure is there, the bulk of the work is done, but something is off. A section in the wrong order. A format it ignored. A judgment call it got slightly wrong.

Now I have a choice, and I usually make it in about half a second without noticing it's a choice at all.

I can fix the output by hand. Five minutes, maybe less. The task is done, I move on, and the day keeps moving.

Or I can fix the thing that produced the output: the instruction, the prompt, the skill file. That takes longer, call it forty minutes, because I have to work out what was actually wrong and write it down clearly enough that it doesn't happen again. But if I do, that class of mistake is gone. Not reduced. Gone.

I pick the five-minute patch most of the time. I suspect you do too.

## This is an old tension wearing new clothes

None of this is new. Operations people have a name for it: firefighting versus prevention. You can spend your day putting out fires, or you can spend it on the slower work that means fewer fires start. Everyone agrees prevention is the smarter long-term bet. Almost nobody does enough of it.

The best explanation I've found for why comes from two MIT researchers, Nelson Repenning and John Sterman, who studied this in manufacturing organizations. They called it the capability trap. Their finding was that picking the fast path is not laziness or weak willpower. It is rational.

Here's the mechanism. Firefighting produces something visible today. You fixed the thing, you can see it fixed. Investing in capability, in better processes and better tooling, produces a return that is real but invisible and delayed. It shows up weeks later as fires that never started, which is to say it shows up as an absence you can't point to.

When you are under any pressure at all, the visible-today option wins. And because it wins, you have slightly less capability than you should, which means slightly more fires, which means slightly more pressure. The trap closes slowly, and it feels like normal life the whole way down.

Repenning and Sterman were writing about factories. The same loop now runs inside the way I work with AI. Every task I patch by hand instead of fixing at the source is a small firefighting decision. They accumulate.

## What actually changed

So if the tension is old, why write about it now? Because one variable in the equation has moved, and moved a lot.

The reason "build the system" always felt expensive is that, historically, it was. If you wanted a person to do a task reliably without your input, you trained them. Training is slow. It takes weeks of correction and feedback. And it does not copy. When you finish, you have exactly one person who can do the task. Want a second? Start again.

That cost is what our instincts are calibrated to. When some part of me says "just do it yourself, building the system isn't worth it," that part is running an estimate, and the estimate is based on the old price of building systems.

The old price no longer applies.

Writing a clear instruction for an AI, a prompt, a skill file, a documented process the agent reads, takes an afternoon. Sometimes an hour. And then it copies perfectly. The same skill file runs on every future task of that type, for as long as you use it, at no additional cost. It does not get tired, it does not forget, and you do not have to train a second copy.

Andrej Karpathy has been pushing the term "context engineering" over "prompt engineering" for roughly this reason. A prompt sounds like a one-off thing you type. Context engineering is the deliberate work of assembling a reusable system the model operates inside. The shift in language is a shift in what kind of object you think you're making. Not a throwaway message. An asset.

That's the part worth sitting with. The cost of the "fix the system" option dropped by something like an order of magnitude. The benefit didn't. Which means the correct answer to "is it worth building the system" flipped for a large number of tasks, and most of us never re-ran the calculation. We are still using the old price.

## The other direction is also a trap

Here's where I have to argue against myself, because the tidy version of this article would stop at "always build the system," and that version is wrong.

There is a failure mode on the other side, and it is seductive precisely because it feels like discipline. You can spend all morning improving a process and ship nothing. The tooling gets better. The actual work does not get done.

Programmers have a name for the worst version of this: yak shaving. You sit down to do one thing, which requires fixing a second thing, which requires configuring a third, and two hours later you are deep in some unrelated setup with nothing delivered. Every step felt necessary. The chain as a whole was a way of not doing the task.

Building systems can become exactly this. It is productive procrastination, and it is hard to catch because it produces artifacts. You have something to show. It just isn't the thing you were meant to produce.

So bashing through is sometimes simply correct. Three cases where I think it clearly wins:

When the task is a genuine one-off. If it will not recur, a reusable system for it has no one to be reused by. Just do it.

When the deadline is real and close. A worse process that ships beats a better process that misses. Patch it, ship, and fix the system afterward if it earns the time.

When the gap is capability, not instruction. Sometimes the AI gets it wrong because the model cannot do that task yet, not because your instructions were unclear. No amount of prompt writing fixes that. Recognize it and stop polishing.

## A rule that actually holds

Between "always patch" and "always systematize" there is a usable middle, and it comes down to four questions.

**Recurrence.** How often does this task come back? The old programming heuristic is the rule of three: the first time, just do it. The second time, notice. The third time, build the reusable version. Three occurrences is enough to know the pattern is real and not a fluke, and early enough that you haven't paid the patch cost too many times.

**Payoff.** How much does the fix save each time it runs? There is a well-known XKCD chart for this. If a task happens daily and you save five minutes, you can rationally spend up to a day building the fix. For anything that recurs, the break-even is usually closer than it feels.

**Horizon.** How long will you be doing this kind of work? The longer your runway with these tools, the more every system investment pays back. If you are going to be working with AI agents for years, and you are, the horizon is long enough to justify a lot.

**Constraint.** Is the instruction actually the bottleneck? This is the Goldratt question. If the real limit is model capability or messy input data, a better prompt fixes nothing. Improve the thing that is actually binding.

And one rough gauge for whether you have drifted too far toward firefighting. Google's site reliability teams cap "toil," repetitive manual work, at 50% of anyone's time. The same number works as a personal check. If more than half your time with AI is spent correcting, nudging, and re-explaining, you do not have a productivity problem. You are in the capability trap, and the answer is not to correct faster.

## The recalibration

I don't think the instinct to just do it yourself is wrong. It is an efficient instinct and it is right a lot of the time. The problem is narrower than that. The instinct is calibrated to a price that no longer exists.

Building the system used to be a serious investment. Now it is often an afternoon, and the result works for years. When the cost of something drops that far, you are supposed to do more of it. Most of us simply haven't moved the dial.

So I have been trying to. The third time I catch myself fixing the same thing by hand, I stop and fix the source instead. It is slower today. It is, I am fairly sure, the right trade.

What I am still working out is the line. How do you decide, in the moment, when to bash through and when to step back and build? What is your rule?
