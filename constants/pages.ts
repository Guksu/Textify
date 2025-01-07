type PageHref =
  | "convertcase"
  | "removeSpace"
  | "removeSpecial"
  | "convertCurrency";

type Page = {
  href: PageHref;
  title: string;
};

export const PAGES: Page[] = [
  {
    href: "convertcase",
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
  {
    href: "convertCurrency",
    title: "통화 변환",
  },
];
