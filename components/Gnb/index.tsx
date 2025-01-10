import { PAGES } from "@/constants/pages";
import Link from "next/link";

export default function Gnb() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="flex gap-6 justify-center py-5">
        {PAGES.map((page) => (
          <Link
            href={page.href}
            key={page.href}
            className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
          >
            {page.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
