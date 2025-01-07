import { describe, expect, test } from "vitest";
import { convertLoowerCase, convertUpperCase } from ".";

describe("입력된 모든 텍스트를 대문자로 변경한다", () => {
  const TEST_CASE = [
    {
      input: "hello world",
      expected_output: "HELLO WORLD",
    },
    {
      input: "HELLO WORLD",
      expected_output: "HELLO WORLD",
    },
    {
      input: "HeLLo WoRLd",
      expected_output: "HELLO WORLD",
    },
    {
      input: "    ",
      expected_output: "    ",
    },
    {
      input: "hello! how's it going?",
      expected_output: "HELLO! HOW'S IT GOING?",
    },
    {
      input: "abc123XYZ",
      expected_output: "ABC123XYZ",
    },
    {
      input: "",
      expected_output: "",
    },
    {
      input: "a",
      expected_output: "A",
    },
    {
      input: "hello\nworld",
      expected_output: "HELLO\nWORLD",
    },
    {
      input: "hello @world!",
      expected_output: "HELLO @WORLD!",
    },
  ];

  TEST_CASE.forEach((testCase) => {
    const { input, expected_output } = testCase;
    test(`${input}`, () => {
      expect(convertUpperCase(input)).toBe(expected_output);
    });
  });
});

describe("입력된 모든 텍스트를 소문자로 변경한다", () => {
  const TEST_CASE = [
    {
      input: "HELLO WORLD",
      expected_output: "hello world",
    },
    {
      input: "hello world",
      expected_output: "hello world",
    },
    {
      input: "HeLLo WoRLd",
      expected_output: "hello world",
    },
    {
      input: "    ",
      expected_output: "    ",
    },
    {
      input: "HELLO! HOW'S IT GOING?",
      expected_output: "hello! how's it going?",
    },
    {
      input: "ABC123xyz",
      expected_output: "abc123xyz",
    },
    {
      input: "",
      expected_output: "",
    },
    {
      input: "A",
      expected_output: "a",
    },
    {
      input: "HELLO\nWORLD",
      expected_output: "hello\nworld",
    },
    {
      input: "HELLO @WORLD!",
      expected_output: "hello @world!",
    },
  ];

  TEST_CASE.forEach((testCase) => {
    const { input, expected_output } = testCase;
    test(`${input}`, () => {
      expect(convertLoowerCase(input)).toBe(expected_output);
    });
  });
});
