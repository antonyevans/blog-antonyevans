---
title: "Git-owned knowledge base: markdown in git is not a hack"
description: "A git-owned knowledge base is markdown in a repo you control. A YC launch listed that as a hack. You want a record you can diff, refuse, and take with you."
dek: ""
pubDate: "2026-08-28"
category: system-lens
tags: ["system-lens", "git-owned-knowledge-base"]
draft: false
---

A git-owned knowledge base is markdown in a repo you control, read by humans and agents as the company record. A YC launch page listed that practice as an insane manual hack, and the category is selling a synthesized brain that is convenient and unverifiable. You want a record you can diff, refuse, and take with you.

*Last updated: 2026-08-28*

## What did a YC launch page call a hack?

I was on a YC launch page for a self-driving company brain when I found my operating model in the hack list. Third item. The third bullet under insane manual hacks was this: "You commit markdown files in your codebase so everyone's AI is on the same page."

That is the operating model. Humans and agents read the same markdown. The files live in git, so a change is a commit you can review, and a bad write is a commit you can reject.

I run one company this way, on markdown files in git.

The same layer sits under agentic commerce. An agent that buys, or an agent that writes, still needs something it can be checked against. A launch page can call the files a hack. They are still what I point at when the agent and I disagree.

## Why is a git-owned knowledge base the record, not a missing-brain workaround?

The files are the record of what the company has agreed, in language humans and agents both read. Git keeps the history, the review, and the right to reject a write. Customer-held keys and signed receipts are how you leave with that record and prove what was served.

A git-owned knowledge base is boring on purpose. You can clone it. You can branch it. You can see who changed a policy, and you can put that policy back.

RAG does a different job. It retrieves nearby text. That's useful when you want similar passages. It is a weak place to keep a rule, because a rule matters most when nothing in the prompt looks like it. I want the rule in a file with an owner, not in a ranked list of chunks.

This is also how you leave. If you hold the repo and the keys, you still have the company memory on the day the vendor is gone. Signed receipts help you prove what an agent was told. They do not replace the files.

## How does a self-driving company brain replace the record?

It reads the tools you already use, synthesizes a conflict-free picture, and injects that picture into the agents you already run. The pitch is that those agents just know. You do not get a commit to review when that picture updates.

The launch page I was reading described the work in those terms: ingest everything, keep it current and conflict-free, and feed it back so the next session starts with agents that just know. The promise is time: less pasting into a fresh chat, and less re-explaining the same constraint to a model that forgot it overnight.

I trust that as convenience. I don't trust it as a record. A synthesized picture can be clean and still be wrong, and when it's wrong I want a diff. A silent injection doesn't give me one.

Connectors can still be how the files stay less stale. Pulling from mail, chat, and tickets is useful. The line is who is allowed to write the canonical copy, and whether that write is reviewable.

## What do you give up when agents just know?

You give up a diff, a refusal, and a copy you can take with you. A silent injection does not show up in git history. The trade is real: from the launch-page side, the git record looks like extra work.

You also give up a simple audit story. If an agent acts on a fact, I want to open the file it used. A graph that reconciled sources overnight may have a better answer, or it may have blended a dead deal with a live one. I can't tell from the outside which of those happened.

I am still on a founding cohort, not a self-serve machine. That's the honest limit of the claim. I haven't shown that operators I have never met can live in this model without me in the loop. Convenience will win a lot of bake-offs for that reason.

## When does markdown in git fail as a company record?

Nobody reviewing the diffs is enough to break it, because stale files are still files. Files also fail when they stand in for live systems that have already moved. The same pattern shows up when you need self-serve scale and you are still onboarding people by hand.

I have watched files rot. A policy that was true last quarter is a trap now if no one accepted the pull request that would have updated it. Agents are obedient. They'll follow the stale version with a straight face.

Connectors do not disappear because you like git. Inventory, billing, and the CRM still move when nobody is editing markdown. The files have to point at those systems, or they become fan fiction about the company.

This also does not scale by wishing. A founding cohort can keep a repo honest. A company that wants every new hire's agents to just know by the end of week one will look at that repo and see a hack. They may be right about the staffing. Staffing pain still does not turn a graph into a record.

## Which questions should you ask before you outsource company memory?

Ask three things of any company brain you did not write yourself. Can you diff a change, and can you refuse a write before it lands in production? Can you take the record with you when that vendor is gone?

If those answers are no, you have a convenience layer. Treat it as a briefing aid. Do not let it be the last copy of what the company believes.

I commit the markdown. I review the diffs. How are you drawing that line when the launch pages call it a hack?

## FAQ

### What is a git-owned knowledge base?

A git-owned knowledge base is a set of markdown files in a repository you control. Humans and agents read those same files as the company record. Git is how you see history, review a change, reject a write, and keep a copy if you leave a vendor.

### Is committing markdown so agents share context a hack?

A YC launch page filed that practice under insane manual hacks. I treat the files as the record, because they are what I can point at when an agent and I disagree. The heading describes the labor of keeping the files current. The files are still the thing I can open in a review.

### What is the difference between a company brain and a wiki?

Category pages this year describe a company brain as a layer that stays current by ingesting tools and reconciling conflicts, then serving the result to people and agents. A wiki is what people wrote down. A git-owned knowledge base is closer to the wiki, with review, except agents read it too. The live question is who may change the canonical copy, and whether you can see that change.

### Why not put the company record in RAG?

RAG finds similar text. A record is a specific file you can open and reject. A constraint is often the sentence that does not resemble the task in front of the agent, which is a bad match for similarity search. Keep retrieval for search. Keep the rule in a file with an owner.

### Can you take a vendor company brain with you?

You can if you hold the files and the keys. A picture that lives behind someone else's API stays there when you leave. Signed receipts help you prove what was served to an agent. They don't, by themselves, hand you the graph.

### Does a git-owned knowledge base replace AGENTS.md?

No. AGENTS.md is one instruction file at the root of a repo, a useful pointer, not the whole record. Policies, decisions, and working notes still need owned files and review. The root file should send an agent to those files. It shouldn't become the company.
