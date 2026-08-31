---
title: "Here's my current AI stack"
description: "Here's my current AI stack: open source, a dedicated memory system, multi-agent access, spec judges, evals, and as much of the process in code as possible."
dek: ""
pubDate: "2026-08-31"
category: system-lens
tags: ["system-lens", "ai-stack"]
draft: false
---

Here's my current AI stack:

*Last updated: 2026-08-31*

0. Use open-source tools/libraries for as much as possible. LLMs are great at managing code, so they need the source code to give you maximum control.

1. Give them a dedicated memory system. I've rolled my own, but there are many good options out there now you can use.

2. Multi-agent system: the memory can be reached by Grok/Claude/Codex or any other agent or harness or system. That gives you maximum flexibility on capability, token management and interface.

3. Create specs for any output you want to control the quality of, then have a fresh-context LLM judge output against the spec and provide feedback. This uses a lot more tokens but the loops give you way higher control over quality.

4. Use external evals and benchmarks to measure your system's output. This is how you catch bugs or areas it's underperforming. Of course building your own evals is even better, but a lot of core tasks have public benchmarks.

5. Use code to make as much of the process deterministic as possible. Write tests and scripts in code instead of skills where you don't need an LLM to make a judgement call.

6. The core system runs in code, with apps/agents/routines etc running on top. This lets you control what they can and can't do, and reduces the complexity of building individual services/workflows.
