// SPDX-License-Identifier: MIT
// The Funniest Out-of-Office — make.fun entry
// (u-kreutzx-the-funniest-out-of-office-054815cf)
// Writes a single-line out-of-office auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns on a surprise reversal: it is not the worker who is
// unreachable, it is the inbox that has had enough of the worker.
const ENTRY =
  "I'm out of office — my inbox finally filed a restraining order against me. Back when it drops the charges.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
