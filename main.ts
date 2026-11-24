// One Word for Your Wi-Fi — entry "ghosting".
//
// The word: ghosting. Your Wi-Fi doesn't just drop — it vanishes
// mid-sentence, mid-call, mid-download, without so much as a goodbye,
// exactly like a bad date. Naming the network "ghosting" is the joke:
// this is the network that leaves you on read.

const WORD = "ghosting";

const MIN_LENGTH = 1;
const MAX_LENGTH = 20;

// A real single word: lowercase letters only — no whitespace, digits,
// punctuation, or capitals.
const SINGLE_WORD_PATTERN = /^[a-z]+$/;

function validateWord(word: string): string {
  if (word.length < MIN_LENGTH || word.length > MAX_LENGTH) {
    throw new Error(
      `word must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${word.length}`,
    );
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be blank");
  }
  if (word !== word.toLowerCase()) {
    throw new Error("word must be lowercase");
  }
  if (!SINGLE_WORD_PATTERN.test(word)) {
    throw new Error(
      "word must be a single word of letters only, with no spaces or symbols",
    );
  }
  return word;
}

export function main(): string {
  return validateWord(WORD);
}
