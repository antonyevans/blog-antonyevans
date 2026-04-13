---
title: Shop CLI
description: A CLI that lets AI agents shop autonomously — search, compare, and purchase using a signed spending mandate without ever seeing payment credentials.
url: https://github.com/antonyevans/shop-cli
status: In progress
category: Developer tools
featured: false
order: 3
draft: false
# launchedDate: 2026-04-13
# image: /images/projects/shop-cli.jpg
# imageAlt: Shop CLI agent shopping tool
repoUrl: https://github.com/antonyevans/shop-cli
---

## What it is

`shop-cli` is a command-line tool designed for AI agents, not humans. It gives agents a structured, JSON-native interface for searching products, managing carts, and placing orders — without ever touching payment credentials directly.

## Why it exists

Agentic commerce is arriving, but the tooling assumes a human at the keyboard. Existing buy flows require browser automation or fragile screen-scraping. `shop-cli` treats the shopping interface as an API contract: every command returns JSON, every mutation is idempotent, and human approval is a first-class exit code rather than an error state.

## What it does

- `shop search`, `shop product`, `shop cart`, `shop order` — structured nouns with consistent verb APIs
- **Mandate system**: a signed, revocable spending delegation that encodes purchase policy. Agents reference a mandate ID; they never see card numbers or credentials
- `--yes` flag for fully non-interactive operation in agent loops
- Exit code `10` = escalated to human approval queue (not a failure — a designed handoff)
- Every command returns JSON; `--output json` is the default
- `--idempotency-key` on all mutations — safe to retry in agentic loops

## Status

In progress. Design complete. Integration testing underway against Shopify's Universal Commerce Protocol and Stripe Agent Toolkit. PyPI package name `shop-cli` is reserved.

## Links

- [Source on GitHub](https://github.com/antonyevans/shop-cli)
