export default function useClipboard() {
  const copyText = (input: string) => {
    navigator.clipboard.writeText(input);
  };

  return {
    copyText,
  };
}
