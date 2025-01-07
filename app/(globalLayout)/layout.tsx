import Gnb from "@/components/Gnb";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Gnb />
      {children}
    </>
  );
}
