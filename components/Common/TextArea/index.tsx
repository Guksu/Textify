import { ChangeEvent } from "react";

interface Props {
  type: "input" | "readOnly";
  value: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placehohlder?: string;
}

export default function TextArea({
  type,
  value,
  onChange,
  placehohlder,
}: Props) {
  if (type === "input") {
    return (
      <textarea
        data-testid="inputText"
        className="resize-none border border-gray-300 rounded-md outline-none w-56 h-56"
        value={value}
        onChange={onChange}
        placeholder={placehohlder}
      />
    );
  }

  if (type === "readOnly") {
    return (
      <textarea
        data-testid="transformedText"
        className="resize-none border border-gray-300 rounded-md outline-none w-56 h-56"
        value={value}
        readOnly
      />
    );
  }
}
