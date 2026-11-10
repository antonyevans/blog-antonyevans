---
title: "Progress runs at the speed of the test"
description: "A loop runs at the speed of its slowest step. AI has made design and build cheap, so the step that now sets the pace is the test."
pubDate: 2026-11-10
category: "operator-insights"
tags: ["ai", "lean", "startups"]
draft: false
---

Most of the progress I've seen from AI this year came out of the same loop: design something, build it, test it, go round again. A loop runs at the speed of its slowest step. AI has made design and build cheap, so the step that now sets the pace is the test. Where testing is automatic, AI moves fast. Where it isn't, the work is to make the test faster and to stop losing what each test tells you.

## Maths went first because its test is a program

On 8 October a DeepMind team published [a paper in Science](https://doi.org/10.1126/science.aej2213) describing an agent that resolved 9 of 353 open Erdős problems, at a cost of a few hundred dollars per problem. Two of them had been open for 56 years. The agent alternated between a language model proposing proofs and Lean, a proof assistant, checking them. The line that matters is in the paper: "A basic agent alternating LLM-based generation with Lean-based verification replicated the Erdős successes". The clever additions helped on cost. The loop did the work.

A month earlier, [Anthropic reported](https://www.anthropic.com/research/formalizing-fermats-last-theorem) that Claude had formalised Fermat's Last Theorem in Lean, working largely on its own for 11 days. Kevin Buzzard leads a five-year, £1 million project to do the same with people. He compiled the result himself and [wrote](https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/) that "it checks out". He was also clear that it told mathematicians nothing new, because the proof was already known. That is exactly the point here. What became cheap was the check.

A Lean check costs almost nothing and never gets tired, so a machine can make thousands of attempts and keep only the ones that pass. Mathlib, Lean's shared library, now holds roughly 300,000 checked theorems for those attempts to build on.

## A fast test has to test the right thing

The fair objection is that most of the headline maths results of the past year and a half weren't found this way. Google's IMO gold in 2025 worked entirely in plain language. OpenAI's ten results, announced in August, were argued informally first and formalised in Lean afterwards. The mathematician Daniel Litt [argues](https://www.daniellitt.com/blog/2026/2/20/mathematics-in-the-library-of-babel) that models are currently at their best in informal maths, where checking is still a matter of judgment.

The check also moved rather than disappeared. Lean proves the statement you give it. Whether that statement is the theorem you meant is a human question. Thomas Hales, [writing on Terence Tao's blog](https://terrytao.wordpress.com/2026/10/09/what-mathematicians-should-know-about-the-lean-theorem-proverquestions-of-reliability-and-ai/) in October, said a Lean proof "should not be accepted until a human audit is performed to ensure statement fidelity". He added that this audit is far easier than checking the proof. So the loop is fast because the hard check is automatic and the human check left over is small.

Science shows what happens when a fast test is wrong. In 2023 Berkeley's A-Lab, a robotic lab, reported making 41 of 58 target materials in 17 days. In January this year its authors [corrected the paper](https://doi.org/10.1038/s41586-025-09992-y): "new" had meant "new to the prediction platform, not necessarily new to science", and manual re-checking confirmed 36 of the 40 reported successes. The weak link was the automated step that read the X-ray patterns. A fast test that is wrong gets you to the wrong answer faster.

## The other sciences are waiting on their tests

In biology and materials, design now takes minutes. The test is still a physical experiment. A cloud lab that tests designed proteins advertises results in as little as three days, with standard runs taking about three weeks. Dario Amodei [wrote in 2024](https://darioamodei.com/essay/machines-of-loving-grace) that experiments on cells and animals "take a certain amount of time which may be irreducible".

Companies such as Periodic Labs are building automated labs on the bet that a fast, trustworthy physical test will do for these fields what Lean did for maths. I haven't seen published results from them that test it yet. My forecast is about the order of events: each field will speed up when its test does, whatever happens to the models.

## A business runs the same loop, and its test is a customer

Eric Ries called it build-measure-learn in The Lean Startup in 2011. In May this year [he said](https://www.startupsfortherestofus.com/episodes/episode-834-eric-ries-revisits-the-lean-startup-and-discusses-how-to-become-incorruptible) "the rate-limiting step, the fundamental constraint, is how fast can you learn". Steve Blank, [writing about his Stanford class](https://steveblank.com/2026/06/16/lean-launch-pad-2026-stanford-lessons-learned-presentations/) in June: "They pivoted late as they assumed that a polished product meant product/market fit". That is the business version of the Lean statement problem. The build passes every check you set it and still isn't what the customer meant.

You can't speed customers up the way you can speed up a proof checker. What you can shorten is everything around them: the time from a customer saying something to a change they can try, and the effort of remembering what the last test taught you.

Two loops from my last month show where the time goes now.

A client wanted to see their pipeline as a page, not as an answer in a chat. I wrote the plan on a Friday, and the pages feature was on their box the following Monday. The first real test was setting one up on their box for the person who would use it. It showed what the build had missed: the person building a page needs the right to add pages, and on their box nobody, not even the owner, could grant that through the normal member settings. I fixed it on their box that day and logged it as a gap in the product.

On Friday another customer told me their automations kept getting stuck without anyone noticing. The first answer was a prompt that builds a page showing each automation's status. That same day I asked whether a page could also restart a stuck automation, and before the day was out pages could carry Run buttons, each tied to a hook the owner approves. The buttons reached the customer's box two days later. We're setting up their page together on Wednesday, and that session is the real test. I don't know the result yet.

In both cases the build took a day or two. The slow part now is the customer test, and the costly mistake is losing what it told you: the customer's words, the decision you made because of them, and the gap the test exposed.

That is what I built Mensara for. Each customer has a record in my company's Mind of what they said and what is still open. Each decision is written down with its reasons. The agents that do the building read the same records, so each turn of the loop starts from what the last one learned. If you want to run your company that way, you can sign up at [mensara.ai](https://www.mensara.ai).
