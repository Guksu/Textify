import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import Layout from "./layout";

describe("GNB가 화면에 렌더링된다.", () => {
  render(
    <Layout>
      <Page />
    </Layout>
  );

  test("대소문자 변환", () => {
    const link = screen.getByText("대소문자 변환");
    expect(link).toBeDefined();
  });

  test("공백제거", () => {
    const link = screen.getByText("공백 제거");
    expect(link).toBeDefined();
  });

  test("특수문자 제거", () => {
    const link = screen.getByText("특수문자 제거");
    expect(link).toBeDefined();
  });

  test("통화 변환", () => {
    const link = screen.getByText("통화 변환");
    expect(link).toBeDefined();
  });
});
