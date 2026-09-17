---
title: "Agents are making a second computer surprisingly useful"
description: "Why I use Linux machines alongside my main computer: overnight work, more memory, separate access and remote connections through Tailscale."
pubDate: 2026-09-17
category: "engineering"
tags: ["agents", "linux", "tailscale"]
draft: false
---

Agents are making a second computer surprisingly useful.

I run Linux on mine. You can rent a machine from a cloud provider or install Linux on an old computer you already own. I’m doing both.

Tailscale is the killer app that makes this work. It connects your devices over a private network, so an AI agent with the right access can connect from your main computer and work on another machine. You can check in from your phone, too.

Why bother with more than one computer?

- **Work can continue when you step away.** Leave the second machine powered on, with jobs set up to keep running after you disconnect, and it can work while you sleep. Check progress while travelling without carrying the machine doing the work.

- **Your main computer gets some breathing room.** Running CI, builds and tests fills up my memory. Moving those jobs to another machine leaves more capacity for whatever I’m doing in front of me.

- **You can separate access.** I might log into my bank on my main computer and be uncomfortable giving an agent control of that desktop. A separate machine, with separate credentials and carefully scoped network permissions, gives me somewhere to allow computer use.

- **Your workspace can stay put while you move around.** Connect from different devices and return to the same tools, files and running jobs.

- **You get a home for private tools.** Dashboards, development servers and demos can stay available to you or your team without being exposed to the public internet.

It doesn’t need to be fancy. An old laptop, a Mac mini or an equivalent small PC can handle plenty of useful work. Match the hardware to the workload and check compatibility if you’re installing Linux. You don’t need to run the LLM itself locally.

Having a computer that keeps working when I step away is becoming much more useful.
