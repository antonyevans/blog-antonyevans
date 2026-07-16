---
title: "Someone else graded the code my AI wrote"
description: "I had someone from outside look at code my AI wrote this week. Not the output, the actual work. Every file, every test, every corner where a tired human would have cut one."
dek: ""
pubDate: "2026-07-16"
category: ai-native-operating-model
tags: ["ai-native-operating-model"]
draft: false
---

I had someone from outside look at code my AI wrote this week. Not the output, the actual
work. Every file, every test, every corner where a tired human would have cut one.

The verdict was better than I expected. The discipline held. No file over the length limit,
a header on every one so an agent knows where it sits, not a single "fix this later" note
left rotting in the tree, and more test code than feature code. Hundreds of tests, all green.
The machine wrote it and kept its own house clean.

Then came the part I keep turning over.

The same review found six holes. A feature had shipped while the document meant to approve it
sat in a folder nobody had committed. The map that tells every future agent how the system is
laid out had drifted a full generation out of date within a day of a big merge, still pointing
at files that no longer existed.

Every one of those six holes came from the same place. The rule was a sentence. "Keep the map
current." "Don't ship without the approval." Written down, in a file, in plain English. And a
written rule is a suggestion the moment someone is moving fast.

The code discipline held because a machine checked it. The process discipline slipped because
good intentions checked it.

So I didn't fix the six holes. Patching them would have lasted until the next busy afternoon.
I spent the day turning each rule into a gate. Instead of "please keep the map current," the
build now fails when the map disagrees with the code. Instead of "remember to commit the
approval," you cannot merge without it. Then I pushed those gates down into the shared kit, so
every repo I build from here inherits them instead of learning the same lesson twice.

What I've landed on is almost embarrassingly simple. If a rule matters, it can't live in prose.
A rule you have to remember is a rule you will eventually skip, and the day you skip it is
always the day it mattered. The only rules that survive a real deadline are the ones a machine
enforces whether you like it or not.

I trust the parts of my system that can't be talked out of doing their job. Everything else is
just a note to myself.

What's one rule in how you work that only holds because everyone's being careful, and would
break the first busy week if nothing was checking?
