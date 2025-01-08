import { toast } from "react-toastify";

export default function useClipboard() {
  const copyText = (input: string) => {
    navigator.clipboard.writeText(input);
    toast.success("변환결과가 복사되었습니다.");
  };

  return {
    copyText,
  };
}
