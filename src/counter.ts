
export function countSubstringsWithKDistinctChars(str: string, K: number): number {
  const substrings = new Set<string>();
  if (!str || !K || K > str.length || K <= 0) {
    return 0;
  }
  for (var i = 0; i <= str.length - K; i++) {
    let substring = str.substring(i, i + K);
    if (getDistinctCharacters(substring) == K) {
      substrings.add(substring);
    }
  }
  return substrings.size;
}

function getDistinctCharacters(s) {
  return new Set(s.split("")).size;
}
