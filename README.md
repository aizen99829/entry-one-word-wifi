# One Word for Your Wi-Fi

Entry for the make.fun competition "One Word for Your Wi-Fi"
(u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72).

## The word

**ghosting** (8 characters)

Your Wi-Fi doesn't just drop — it vanishes mid-sentence, mid-call,
mid-download, without so much as a goodbye, exactly like a bad date.
Naming the network "ghosting" is the joke: this is the network that
leaves you on read.

## How it works

`main.ts` exports `main(): string`, which returns the single word
`ghosting`, validated to be:

- 1–20 characters long (8),
- a single word of lowercase letters only — no spaces, digits, or symbols,
- non-blank.

Any violation throws an `Error`.
