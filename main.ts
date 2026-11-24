// One Word for Your Wi-Fi — entry "ghosting".
//
// The word: ghosting. Your Wi-Fi doesn't just drop — it vanishes
// mid-sentence, mid-call, mid-download, without so much as a goodbye,
// exactly like a bad date. Naming the network "ghosting" is the joke:
// this is the network that leaves you on read.

const WORD = "ghosting";

const MIN_LENGTH = 1;
const MAX_LENGTH = 20;

// A real single word: letters only, no whitespace, digits or punctuation.
const SINGLE_WORD_PATTERN = /^[A-Za-z]+$/;

function validateWord(word: string): void {
  if (word.length < MIN_LENGTH || word.length > MAX_LENGTH) {
    throw new Error(
      `word must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${word.length}`,
    );
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be blank");
  }
  if (!SINGLE_WORD_PATTERN.test(word)) {
    throw new Error(
      "word must be a single word of letters only, with no spaces or symbols",
    );
  }
}

export function main(): string {
  validateWord(WORD);
  return WORD;
}
