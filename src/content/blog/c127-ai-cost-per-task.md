---
title: "AI cost per task: why AI feels pricier as it gets cheaper"
description: "Frontier AI runs cost more every year, but at fixed quality AI cost per task is falling about 13x a year. Why both are true, and the rate I'd plan agents on."
dek: ""
pubDate: "2026-09-28"
category: system-lens
tags: ["system-lens", "ai-cost-per-task"]
draft: false
primary_keyword: "AI cost per task"
leadStat: "13×"
leadStatLabel: "cheaper per task, every year, at fixed quality"
---

AI is getting cheaper and more expensive at once. Epoch AI finds the cost of hitting a fixed benchmark score has fallen about 47% a quarter since 2023, roughly 13x a year. MIT FutureTech finds the cost of running the top frontier model rising 3-18x a year. For coding work, the drop is much slower.

It feels like AI is getting more expensive. The best models are bigger, they think for longer before they answer, and a task that used to be one call now burns through a pile of reasoning tokens. My own setup makes this worse on purpose. I have a fresh-context model judge output against a spec, which [uses a lot more tokens](https://antonyevans.com/blog/system-lens/c126-current-ai-stack/) than trusting the first answer.

That feeling comes from watching the frontier. Two recent papers measure what it costs to get an answer of fixed quality, and between them they also explain why it doesn't feel cheaper.

*Last updated: 2026-09-28*

## How fast is the cost of AI falling at fixed quality?

Epoch AI published [The plunging price of thought](https://epoch.ai/publications/the-plunging-price-of-thought) on 22 September, by Luke Emberson and David Roodman. Their headline is that since 2023, the cost of reaching a given level of benchmark performance has fallen about 47% per quarter. That compounds to about 13x per year.

The detail I care most about is what they measure. Most earlier work tracked price per token. Epoch measures what it costs to get the score, reasoning tokens included. A reasoning model can be cheap per token and still expensive per answer, and the answer is the thing you are paying for.

Their example is the one that stuck with me. In January 2025, OpenAI's o3 scored 75% on GPQA Diamond, a multiple-choice exam of PhD-level physics, chemistry and biology questions. Epoch estimates it cost about 30 cents per question. Just under 18 months later, GPT-5.6 Luna matched that score for $0.0004 per question, a 725x drop. Epoch compares it to the sticker price of a new car falling from $50,000 to $69.

## Is AI getting cheaper faster than other technologies?

On Epoch's numbers, yes. Measured in log terms, the price of a given level of AI performance has fallen four times faster than DNA sequencing and six times faster than compute. It has fallen 18 times faster than lithium batteries, and 54 times faster than electricity did in the century up to 1973.

I would hold that comparison a little loosely, and so does Epoch. A kilowatt-hour today is much the same product it was decades ago, while a unit of AI keeps changing shape. Even with that caveat, the gap is wide enough that I don't doubt the direction.

## So why do AI bills keep going up?

The thing most of us buy keeps moving. A group at MIT FutureTech (Hans Gundlach, Jayson Lynch, Matthias Mertens and Neil Thompson) published [The Price of Progress](https://arxiv.org/abs/2511.23455). It is built on price data from Artificial Analysis and benchmark data from Epoch. They also find the price of fixed performance falling fast, at around 5-10x per year. That is more conservative than Epoch's figure, but it points the same way.

The same paper has the number that explains the feeling. The cost of running the frontier models themselves, meaning whatever model holds the top score at the time, has been rising about 3-18x per year. Bigger models and heavier reasoning eat the per-token savings and then some. So the quality you bought last year gets much cheaper, while the best answer available this year costs more than the best one did a year ago.

If you always reach for the newest, most capable model and let it think as long as it likes, your bill goes up. If you ask what it costs today to do the job you were doing a year ago, at the same quality, the cost has fallen hard. I suspect most of the talk about AI getting expensive is measuring the first thing and assuming it describes the second.

The MIT group also tries to pull apart where the savings come from. Once they strip out hardware gains and the effect of competition, algorithmic efficiency on its own is worth about 3x per year. I find that the most reassuring number in either paper, because it doesn't depend on a price war continuing.

## Does every kind of task get cheaper at the same rate?

No. Epoch finds math problems getting cheaper at 16-19x per year and game-style puzzles at 7-10x. Coding is much slower. On SWE-bench Verified, a widely used coding benchmark, their model-free estimate is about 27.5% per quarter, which works out to roughly 3.6x per year.

I wouldn't treat that coding figure as precise. Epoch counts SWE-bench as a secondary benchmark. The MIT paper's point estimate for SWE-bench is close to its other benchmarks, but its data is thin enough that the confidence bands can't rule out no progress at all. It is still a long way below 13x, and it is the number closest to the work I do.

Epoch also finds that the newest capability gets cheaper fastest. On their numbers, a level of performance that has just become state of the art gets cheaper at about 75x per year, and two years later at about 4.7x per year. One explanation they offer is that whoever gets there first can charge a premium for a while, until competitors catch up. The MIT paper sees a related split by quality level: the highest-performing models are getting cheaper at almost 32x per year, the weakest at only about 1.7x.

## What are the caveats?

Epoch is upfront about them, and I think they are fair. Labs may be training for the benchmarks, so benchmark gains could run ahead of real improvement. A good benchmark score is also a long way from useful work in a business. And the headline figures assume a user who always switches to the cheapest model that can do the job, which almost nobody does, so real savings will lag the numbers.

That last one is the caveat I'd weight most. The savings exist, but you only collect them if you keep re-choosing the model for each task. Pick a model once and leave it there, and you capture much less of the drop.

## What does this mean if you're building on agents?

The rest of this is my opinion, and neither paper makes these claims. I think general reasoning at today's frontier level gets close to free over the next 18 to 24 months. The questions o3 answered for 30 cents in early 2025 already cost a fraction of a cent. I would expect today's frontier prices to follow a similar path.

Agentic and coding work is where I'm more cautious. Long agent runs look a lot more like SWE-bench than like a multiple-choice science exam, and that category is getting cheaper at something like 3-4x a year. That is fast by any normal standard, and a long way below the headline.

So if I'm planning costs for the agent systems I build, the slower rate is the one I'd plan on. The judge loops I run cost more tokens than a single pass, and I would rather assume those costs come down at the coding rate and be pleasantly surprised than build a plan that only works at 13x.

I also think a business running agents should stop treating model choice as a one-off decision. The savings in these papers assume someone keeps moving work to the cheapest model that can still do it. That means knowing which tasks need the frontier and which ones stopped needing it months ago.

## FAQ

### Is AI getting cheaper or more expensive?

Both, depending on what you measure. On Epoch AI's numbers, the cost of reaching a given benchmark score has fallen about 47% per quarter since 2023, about 13x a year. The MIT FutureTech paper finds that running the frontier models themselves has been getting about 3-18x more expensive per year, because the models are bigger and reason for longer.

### What is AI cost per task?

It is what it costs to get a given result, reasoning tokens included, rather than the price per token. Epoch uses this measure because a reasoning model can be cheap per token and still expensive per answer. The answer is the thing you pay for.

### Why does my AI bill keep going up?

Most likely because you are moving to the newest models and letting them reason for longer. The MIT FutureTech paper puts the rise in the cost of running frontier models at about 3-18x a year, driven by bigger models and heavier reasoning. The quality you were buying a year ago costs much less today.

### How fast is AI getting cheaper compared to other technologies?

Measured in log terms, Epoch finds the price of a given level of AI performance falling four times faster than DNA sequencing, six times faster than compute, 18 times faster than lithium batteries and 54 times faster than electricity. Epoch treats the comparison as rough, because a unit of AI keeps changing in a way a kilowatt-hour does not.

### Is AI coding getting cheaper as fast as other tasks?

No. Epoch's model-free estimate for SWE-bench Verified is about 27.5% per quarter, roughly 3.6x a year, against about 13x overall. The coding data is thin, so I treat that figure as rough, and it is the rate I'd plan agent work on.

### What are the limits of these AI price estimates?

Labs may train for the benchmarks, and a benchmark score is a long way from useful work in a business. The headline figures also assume you always switch to the cheapest model that can do the job. Almost nobody does that, so real savings lag the numbers.

### Will frontier-level AI reasoning become free?

That is my opinion, and neither paper claims it. I think general reasoning at today's frontier level gets close to free over the next 18 to 24 months. I expect agent and coding work to get cheaper more slowly, at something like 3-4x a year.
