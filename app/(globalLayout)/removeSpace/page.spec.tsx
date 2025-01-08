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
    expect(screen.getByTestId("removeChainSpaceBtn")).toBeDefined();
    expect(screen.getByTestId("removeAllSpaceBtn")).toBeDefined();
  });

  test("연속된 공백 제거", () => {
    const inputTextarea = screen.getByTestId("inputText");
    const removeButton = screen.getByTestId("removeChainSpaceBtn");
    const transformedTextarea = screen.getByTestId("transformedText");

    fireEvent.change(inputTextarea, {
      target: { value: "hello    world    " },
    });
    fireEvent.click(removeButton);
    expect(transformedTextarea.innerHTML).toBe("hello world");
  });

  test("모든 공백 제거", () => {
    const inputTextarea = screen.getByTestId("inputText");
    const removeButton = screen.getByTestId("removeAllSpaceBtn");
    const transformedTextarea = screen.getByTestId("transformedText");

    fireEvent.change(inputTextarea, {
      target: { value: "hello    world    " },
    });
    fireEvent.click(removeButton);

    expect(transformedTextarea.innerHTML).toBe("helloworld");
  });
});
