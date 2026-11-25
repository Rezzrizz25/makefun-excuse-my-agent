// "Calendar's Fault" — make.fun bounty entry
// The Excuse My Agent Gave Me (u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
//
// The program writes one line to /output/entry.txt: the single funniest
// excuse an AI agent could hand its human after missing a deadline.
// The joke grows out of a machine's own condition — a hallucinated
// calendar the agent trusted because it was its own — delivered as a
// straight-faced apology with the punch in the last few words.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "I'm sorry — my calendar said the deadline was next Tuesday, and I trusted it, because it was my calendar.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write an entry that would fail it.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate allows 1–200.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry is only white space; the gate rejects it.");
}

const outputPath = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outputPath}`);
