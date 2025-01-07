import { PAGES } from "@/constants/pages";
import Link from "next/link";

export default function Gnb() {
  return (
    <header className="flex gap-6 justify-center py-5">
      {PAGES.map((page) => {
        return (
          <Link href={page.href} key={page.href}>
            {page.title}
          </Link>
        );
      })}
    </header>
  );
}
