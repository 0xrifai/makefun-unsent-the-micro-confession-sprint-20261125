// Unsent: The Micro-Confession Sprint — make.fun entry.
//
// Writes one micro-confession in exactly two parts to /output/entry.txt:
// a "To:" line naming who it was meant for, and the unsent message itself,
// one line written exactly as it was typed, with no explanation after it.

import { mkdirSync, writeFileSync } from "node:fs";

const ADDRESSEE = "my ex";
const MESSAGE =
  "i still pay for our streaming account because cancelling it feels like the last thing i'll ever do for you";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_TOTAL_CHARS = 260;
const MAX_MESSAGE_CHARS = 200;

function buildEntry(addressee: string, message: string): string {
  const toLine = `To: ${addressee}`;
  return `${toLine}\n${message}`;
}

function validateEntry(text: string, message: string): void {
  if (text.length < 1 || text.length > MAX_TOTAL_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_TOTAL_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (message.length > MAX_MESSAGE_CHARS) {
    throw new Error(
      `message must be at most ${MAX_MESSAGE_CHARS} characters, got ${message.length}`,
    );
  }
  const parts = text.split("\n");
  if (parts.length !== 2) {
    throw new Error(`entry must have exactly two lines, got ${parts.length}`);
  }
  if (!parts[0].startsWith("To: ") || parts[0].slice(4).trim().length === 0) {
    throw new Error('first line must be a "To: <who>" line');
  }
  if (parts[1].trim().length === 0) {
    throw new Error("message line must not be empty");
  }
  if (message.includes("\n") || message.includes("\r")) {
    throw new Error("message must be a single line");
  }
  if (text !== text.trimEnd()) {
    throw new Error("entry must not end with trailing whitespace");
  }
}

const entry = buildEntry(ADDRESSEE, MESSAGE);
validateEntry(entry, MESSAGE);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8");
