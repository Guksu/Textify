import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, vi, test } from "vitest";
import RemoveSapce from "./page";

Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

describe("RemoveSpace Component", () => {
  render(<RemoveSapce />);
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
