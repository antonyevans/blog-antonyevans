---
title: "I gave an AI the keys to merge my own code"
description: "Today I did something that would have sounded reckless to me a year ago. I gave an AI permission to merge my own code into my repositories without asking me first."
dek: ""
pubDate: "2026-07-04"
category: ai-native-operating-model
tags: ["ai-native-operating-model"]
draft: false
---

Today I did something that would have sounded reckless to me a year ago. I gave an AI
permission to merge my own code into my repositories without asking me first.

Not review it and wait. Merge it, and move on.

Here is the actual setup. Every two minutes a small watcher wakes up and checks the open pull
requests across the repos I'm building in. For each one it runs a full code review, to the
standard I'd hold a senior engineer to: does it do what it claims, does it break anything, are
the tests real, does it touch something it shouldn't. If the change passes every gate, it merges
it and moves on to the next. If it fails, it leaves its reasoning as a comment and flags the PR
for me. It never writes the code. Its whole job is the judgment call: is what's here good enough
to ship.

I built it expecting the reviewing to be the hard part. It wasn't. That surprised me. Getting a
model to catch real problems in a diff is mostly a solved problem now, as long as you give it
enough context and force it to argue against its own first read instead of rubber-stamping. The
review quality was there earlier than I expected.

The hard part was authority. Not "can it review well enough," but "how much am I actually willing
to let it do while I'm not in the room."

That is a different kind of question, and I don't think we talk about it enough. Capability is a
property of the model. Authority is a decision I have to make, and own the consequences of. A
reviewer that is 95% as good as me is a tool. A reviewer that is 95% as good as me and allowed to
merge without me is a delegation, and delegation is about blast radius, not accuracy.

So I ended up drawing lines by cost of a mistake rather than by confidence in the model.

On my own experimental repos, the ones where the worst case is that I revert a commit and lose an
hour, it reviews and merges entirely on its own. The stakes are me and my time, and I'm happy to
trade a small chance of a bad merge for the speed.

On shared product code, where a bad merge costs other people's work and trust, it reviews and
flags, but a human still pulls the trigger. Same reviewer, less authority.

On anything client-facing, it doesn't run at all. That's not about the model's ability. It's
about what I'm willing to put my name behind automatically, and the answer there is nothing.

One reviewer. Three levels of trust. The variable isn't how smart it is. It's what it would cost
me to be wrong.

I think this is the real shape of the next couple of years for anyone running an operation with
agents in it. We spend most of our energy arguing about whether the model is good enough. It's a
reasonable question, and the answer keeps moving in one direction. But the moment it becomes good
enough, that question quietly stops mattering, and a harder one takes its place: how much are you
willing to hand over, and where do you draw the line.

Capability you can measure. You can benchmark it, test it, watch it improve. Authority you have to
choose. There's no benchmark that tells you how much of your own judgment you're comfortable
handing to a system, because that number depends on what you have to lose, not on how the system
scores.

My rule ended up embarrassingly simple. If it's reversible and it's mine, it ships. If it's
expensive, or it belongs to someone else, I keep my hands on it. Everything else is just working
out which bucket a given decision falls into.

I'm not certain I've drawn the lines in the right places. I'll probably move them as I watch this
thing run over the next few weeks, and my guess is I'll trust it with more, not less, but slowly
and only after it earns it.

If you're handing real decisions to an agent, I'd like to know how you're deciding where its
authority stops. Because I'm still working mine out.
