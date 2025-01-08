type PageHref = "convertCase" | "removeSpace" | "removeSpecial";

type Page = {
  href: PageHref;
  title: string;
};

export const PAGES: Page[] = [
  {
    href: "convertCase",
    title: "대소문자 변환",
  },
  {
    href: "removeSpace",
    title: "공백 제거",
  },
  {
    href: "removeSpecial",
    title: "특수문자 제거",
  },
];
