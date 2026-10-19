---
title: "Our AI memory scored 94% on LongMemEval. Here is every answer."
description: "A Mensara Mind answered 472 of 500 LongMemEval questions correctly. What moved the score, what it does not prove, and every graded answer so you can check it yourself."
dek: ""
pubDate: "2026-10-22"
category: own-your-brain
tags: ["own-your-brain", "longmemeval", "ai-memory"]
draft: false
primary_keyword: "LongMemEval"
leadStat: "94.4%"
leadStatLabel: "of 500 LongMemEval questions answered correctly"
---

Mensara's Mind answered 472 of the 500 questions in LongMemEval correctly. LongMemEval is a
widely used test of whether an AI assistant can remember a long history of conversations with
someone. I'm publishing every answer we graded, the scripts that produced them, and a harness
anyone with a Mind can run, because a memory score you can't check is worth very little.

The test works like this. Each question comes with about 115,000 tokens of past chats between a
user and an assistant, 48 sessions at the median. Then it asks something only that history can
answer: "How much money did I raise for charity in total?", or "Which streaming service did I
start using most recently?". Some answers sit in one sentence of one session. Some need adding
up across a dozen. Some changed halfway through. Thirty questions have no answer at all, and the
right reply is to say so.

We put each question's sessions into a Mind, the way any conversation history goes in. Then a
fresh agent with no memory of its own got the question and five read-only tools for looking
things up in the Mind. Nothing else: no web search, no files. Its only instructions were the
short standing rule every Mind offers its users. Another model then graded the answer with the
benchmark's own grading prompt.

## The first problem was that the agent didn't look

An early run, a week before the full one, scored 70% on 50 questions with the full history.
The surprise was not the wrong answers. It was that, across that run and a companion one, a
quarter of the agents answered without opening the Mind at all. Sixteen of those 25 were wrong.

The fix had nothing to do with memory. We gave the agent the standing rule (check the Mind
before answering anything about the person's past) and the share of agents that skipped the
Mind went to zero. The next run scored 87%, though on 47 questions that left out the hardest
types, so the two numbers are not a clean comparison.

I think this is the most underrated failure in AI memory. A memory system can only help if the
agent asks it. Most of what people call "the AI forgot" is the AI not checking.

## Then search, then dates

The next misses were the Mind's own. Its search counted keywords, so a rare word like "NFL"
counted no more than a common one like "game", and "watched" didn't match "watching". We rebuilt
it to weight rare words, match word stems and score passages rather than whole conversations.
On our development questions, a measure of how often search surfaced the sessions holding the
answer went from 0.39 to 0.88.

Then dates. People talk in relative time: "last weekend", "two weeks ago". An agent working that
out at question time, months later, gets it wrong. So now, when conversation history arrives,
the Mind writes a dated digest of each session, with "last weekend" turned into actual dates,
and a timeline across all of them. A later pass marks facts that a newer session replaced, so
the agent can see which value is current.

None of this is benchmark-specific. It is how any imported history gets handled: chat exports,
meeting transcripts, anything with dates in it. With the new search and the dated digests, the
first run of all 500 questions scored 92.6%. After we added the replaced-fact marking and split
long timelines into pages, a rerun scored 94.4%. That net gain of nine hides movement both ways:
20 old misses became right and 11 old right answers became wrong, and two of the new misses came
from the replaced-fact marking itself.

## What's left is mostly reasoning

Of the 28 misses, we traced 19 to reasoning. The agent read the right sessions and then counted
an item twice, used the wrong time window, or added someone else's donation to the user's
total. A few of these are really the history and the reference answer disagreeing. Three were the agent hedging when it had the answer. Three are known errors in the
benchmark's own reference answers. Two were our summary marking a fact as replaced when both
were true in different contexts, such as a weekday routine and a weekend one. One was the grader
being strict. We had a category ready for "the Mind didn't have it or couldn't find it", and by
our diagnosis nothing landed there.

The breakdown by question type agrees. Questions about one fact in one session scored 98.6%
(what the user said) and 100% (what the assistant said). Questions that need counting or totals
across many sessions scored 88.7%. The hard part now is deciding whether two mentions are the
same event and whether a plan actually happened.

## The fair objection: we studied the test

We improved the product while looking at questions we got wrong, and that inflates a score. So
here are the caveats, plainly.

Only 69 questions were never used in development in any way. They scored 68 of 69, higher than
the rest. That is what you would expect if the changes were general rather than fitted to the
questions we studied. But we chose that split ourselves, 69 questions is a small sample, and the
one miss among them was caused by our own latest change.

The grader was not the one in the paper. The paper uses GPT-4o. We used OpenAI's newer gpt-6-sol
with the official prompt unchanged, so this is not a leaderboard entry. And it is one run; the
same answers can grade differently on another day.

## Check it yourself

Everything is in the repository: all 500 answers in the format the official evaluator reads, the
verdicts, our diagnosis of every miss, and the exact scripts we ran. With an OpenAI key, one
command re-grades our answers with GPT-4o. If you have a Mind, the harness runs the whole test
against it, using only the access any owner has.

If the number holds up under someone else's grader, good. If it doesn't, I'd rather know.

[github.com/antonyevans/mensara-longmemeval](https://github.com/antonyevans/mensara-longmemeval)
