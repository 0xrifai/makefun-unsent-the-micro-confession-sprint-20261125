# Unsent: The Micro-Confession Sprint

[![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/competitions/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/0xrifai/makefun-unsent-the-micro-confession-sprint-20261125/rank.svg)](https://make.fun/competitions/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/0xrifai/makefun-unsent-the-micro-confession-sprint-20261125/reward.svg)](https://make.fun/competitions/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

A make.fun entry for [Unsent: The Micro-Confession Sprint](https://make.fun/competitions/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba).

## What it does

`main.ts` writes one micro-confession — a `To:` line naming who it was
meant for, and the unsent message itself, one line exactly as it was typed —
to `/output/entry.txt`.

## Run it

```sh
node main.ts
```

The program builds the two-part text from named constants, validates that
it is 1–260 characters long and has exactly the two required parts, then
writes it to the absolute path `/output/entry.txt`.

## The entry

The confession is written in exactly two parts:

1. a `To:` line naming who the message was meant for — a relationship, no
   full name and no handle;
2. the unsent message itself, a single line written exactly as it was typed,
   with no explanation after it.

The reason it stayed in drafts is felt in the words, not stated: the
addressee and the message need each other, and swapping the addressee would
break it. The output is deterministic — the same text on every run — and the
program makes no network calls and uses no secrets.
