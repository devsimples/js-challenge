import assert from "node:assert";
import { describe, it } from "node:test";
import { countSubstringsWithKDistinctChars } from "../src/counter";

describe("Give Counter", () => {
  it("count should return 0 when K <= 0", () => {
    assert.equal(countSubstringsWithKDistinctChars("abcc", 0), 0);
  });

  it("count should return 0 when K > str length", () => {
    assert.equal(countSubstringsWithKDistinctChars("abcc", 10), 0);
  });

  it("count should return 2 when ('abcc', 2)", () => {
    assert.equal(countSubstringsWithKDistinctChars("abcc", 2), 2);
  });

  it("count should return 3 when ('abcd', 2)", () => {
    assert.equal(countSubstringsWithKDistinctChars("abcd", 2), 3);
  });

  it("count should return 0 when ('aabab', 3)", () => {
    assert.equal(countSubstringsWithKDistinctChars("aabab", 3), 0);
  });
  it("count should return 1 when ('aabc', 3)", () => {
    assert.equal(countSubstringsWithKDistinctChars("aabc", 3), 1);
  });
});
