// Charm the Commuter: one charming one-line forecast for an imaginary city.
// The program writes exactly one line (140 chars max, no trailing newline)
// to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const FORECAST =
  "Good morning, Snoozleton: 9°, snow that melts into confetti by noon, and the 8:12 is warm, on time, and saving the window seat just for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORECAST, "utf8");
console.log(FORECAST);
