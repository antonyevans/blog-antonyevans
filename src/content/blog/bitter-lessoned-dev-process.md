---
title: "I got bitter lessoned"
description: "Sol-6 and Opus 5.5 broke my dev process. I'm ripping out the heavy software factory I spent three months perfecting and going agile: continuous testing on staging, frontier models at higher reasoning, and no more independent judges."
dek: ""
pubDate: "2026-09-24"
category: ai-native-operating-model
tags: ["ai-native-operating-model"]
draft: false
---

I got bitter lessoned. Sol-6 and Opus 5.5 broke my dev process.

Since Fable launched I've been coding with a software factory it built for me, inspired by the Superpowers plugin. It's a very heavy process that matches what a medium-sized company's software release process would look like: plan tasks >> specs (independent judge) >> tests >> build >> review (independent judge) >> merge (and more independent review). Then an independent process before shipping a release checks everything again. It worked to give me high autonomy because even the best agents make mistakes, and I was happy with progress. I planned with the top models but did the coding in Sonnet and Terra to save tokens.

But the latest models get gummed up by the structure. They follow it too closely, slowing me down and increasing token usage.

So I'm ripping out the system I spent 3 months perfecting and starting from scratch. We are still going to plan tasks with clear acceptance goals, but the rest of the process is going agile. Still a worktree per task, but continuous testing and pushing to main and testing live on staging as we go, not at full task completion. No more independent-context judging of specs or progress (the highest-cost loops). No more backlogged PR review and mergeback to main, though still a staged process for testing before launching release candidates to production. More how a solo developer traditionally worked. Continuous live testing replacing process. Trusting frontier models at higher reasoning over structure about which models do what.

Wish me luck, I'll report back how it goes in a week.
