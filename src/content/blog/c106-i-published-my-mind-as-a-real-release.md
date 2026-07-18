---
title: "I published the first customer-facing release of my company mind, and the hard part was making sovereignty boring and true"
description: "This week I gave my company mind away as something anyone can actually install, and the hardest part was making it boring."
dek: ""
pubDate: "2026-07-18"
updatedDate: "2026-07-16"
category: own-your-brain
tags: ["own-your-brain"]
draft: false
---

This week I gave my company mind away as something anyone can actually install, and the hardest part was making it boring.

For months the mind lived where only I could see it. Today it became a real release with a version number, a one-line install, and instructions to plug in your own AI subscription instead of mine. You run it on your box. Your knowledge stays on your side. I never hold the keys.

That last part is the whole point, and it's why the release took a full day instead of an hour. Owning your own mind only means something if I'm not standing in the middle of it. So the product had to stand itself up on a machine I don't own, from nothing, and answer a real question before I'd call it shipped.

The gate nearly stopped me. My release check came back 57 green out of 58. One red row. I could have shrugged at a single failure and shipped anyway. Instead I spent an hour proving what the red actually was, and it turned out to be a bug in my test, not the product. The check was a JSON grep looking for a token with a space in it. The product writes that token without the space. The test was wrong. The product was right. I fixed the test and let the gate pass honestly.

Then, across the whole run, I stood up fresh cloud boxes one at a time, building each from nothing and tearing it down before the next one existed. Never two alive together. None left running. None left holding anything.

I'll be honest about one thing I didn't finish. I proved a clean install works, not yet a clean upgrade from the last version. So I shipped the install and held the upgrade proof for its own gate rather than claim both.

Sovereignty is a hundred boring decisions about who holds what: whose subscription pays for the tokens, whose disk holds the data, who could see any of it if I disappeared. It only counts when the architecture makes those true, even when that costs me a day I didn't plan for.

What's the one system you rely on where, if you're honest, someone else still holds the keys?
