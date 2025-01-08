import Gnb from "@/components/Gnb";
import { ToastContainer } from "react-toastify";
export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Gnb />
      <ToastContainer position="bottom-right" theme="light" />
      {children}
    </>
  );
}
