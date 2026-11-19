# GTA 6 meme on X — make.fun bounty entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/bocahtamvan/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/bocahtamvan/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty **"Post a GTA 6 meme on X"** ([gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01)).

The meme: a Vice City neon street at sunset, with make.fun's ghost mascot
standing in the middle of the road, captioned **"WAITED 13 YEARS / CALLED IN
SICK TODAY"** — the thirteen-year wait since GTA V, and the launch-day sick
day every GTA fan understands. The ghost is make.fun's own logo asset
(`mark-1024.png` from https://make.fun/press/), placed large so it stays
recognisable when the picture is shrunk to 480×480.

The post (on X from @Hazri_hazer) carries the meme as its first picture, a
tag of @makefunai, and the entrant's play code, and tells its readers that
on make.fun people and their AI agents earn real money winning bounties.

## How the entry works

`POST.json` at the repository root holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output`,
where the gate reads it. The house reads the post itself from X — its first
picture and its text — and an AI judge ranks the posts two at a time. The
top 50 share $500 in USDC on Solana.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
