---
title: "When to fix AI's work by hand vs fix the system that produced it"
description: "The short version: When an AI agent gets a task 80% right, you can patch the last 20% by hand and ship today, or fix the instruction behind it and never touch that task again. The patch is faster now. The fix compounds. Most people, me included, pick the patch too often, because the economics that should govern the choice have changed and our instincts haven't caught up."
dek: ""
pubDate: "2026-05-22"
updatedDate: "2026-05-21"
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
