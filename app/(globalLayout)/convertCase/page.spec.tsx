import { render, screen, fireEvent } from "@testing-library/react";
import ConverCase from "./page";
import { describe, expect, vi, test } from "vitest";

Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

describe("ConverCase Component", () => {
  render(<ConverCase />);
  test("Render 테스트", () => {
    expect(screen.getByPlaceholderText("텍스트를 입력하세요")).toBeDefined();
    expect(screen.getByTestId("convertUpperBtn")).toBeDefined();
    expect(screen.getByTestId("convertLowerBtn")).toBeDefined();
  });

  test("대문자변환", () => {
    const inputTextarea = screen.getByTestId("inputText");
    const upperButton = screen.getByTestId("convertUpperBtn");
    const transformedTextarea = screen.getByTestId("transformedText");

    fireEvent.change(inputTextarea, { target: { value: "hello world" } });
    fireEvent.click(upperButton);
    expect(transformedTextarea.innerHTML).toBe("HELLO WORLD");
  });

  test("소문자변환", () => {
    const inputTextarea = screen.getByTestId("inputText");
    const lowerButton = screen.getByTestId("convertLowerBtn");
    const transformedTextarea = screen.getByTestId("transformedText");

    fireEvent.change(inputTextarea, { target: { value: "HELLO WORLD" } });
    fireEvent.click(lowerButton);

    expect(transformedTextarea.innerHTML).toBe("hello world");
  });

  test("클립보드 클릭", async () => {
    const inputTextarea = screen.getByTestId("inputText");
    const upperButton = screen.getByTestId("convertUpperBtn");
    const clipboardButton = screen.getByTestId("clipboard");

    fireEvent.change(inputTextarea, { target: { value: "hello world" } });
    fireEvent.click(upperButton);
    fireEvent.click(clipboardButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("HELLO WORLD");
  });
});
