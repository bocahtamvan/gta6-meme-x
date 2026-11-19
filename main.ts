// gta6-meme-x-01 entry: the whole program copies POST.json to /output.
// The entry is the X post itself: a GTA 6 meme whose picture shows the
// make.fun ghost, posted from a public account with make.fun / @makefunai
// and the entrant's play code in its text. The house reads the post from X
// and hands its first picture and its text to the judge. This program only
// hands the post's address over, so the gate can read it.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

try {
  copyFileSync(source, target);
  console.log(`POST.json copied to ${target}`);
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
