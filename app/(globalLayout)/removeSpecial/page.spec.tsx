import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, vi, test } from "vitest";
import RemoveSpecial from "./page";

Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

describe("RemoveSpecial Component", () => {
  render(<RemoveSpecial />);
  test("Render 테스트", () => {
    expect(screen.getByPlaceholderText("텍스트를 입력하세요")).toBeDefined();
    expect(screen.getByTestId("removeSpecialBtn")).toBeDefined();
    expect(screen.getByTestId("removeEmojiBtn")).toBeDefined();
  });

  test("특수문자 제거", () => {
    const inputTextarea = screen.getByTestId("inputText");
    const removeButton = screen.getByTestId("removeSpecialBtn");
    const transformedTextarea = screen.getByTestId("transformedText");

    fireEvent.change(inputTextarea, {
      target: { value: "!@#$%^&*()_+" },
    });
    fireEvent.click(removeButton);
    expect(transformedTextarea.innerHTML).toBe("");
  });

  test("모든 이모지 제거", () => {
    const inputTextarea = screen.getByTestId("inputText");
    const removeButton = screen.getByTestId("removeEmojiBtn");
    const transformedTextarea = screen.getByTestId("transformedText");

    fireEvent.change(inputTextarea, {
      target: { value: "😊😂😎🔥💬" },
    });
    fireEvent.click(removeButton);

    expect(transformedTextarea.innerHTML).toBe("");
  });
});
