import { ICONS } from "@/constants/icons";
import { ChangeEvent } from "react";

interface Props {
  type: "input" | "readOnly";
  value: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClipboardClick?: () => void;
  placehohlder?: string;
}

export default function TextArea({
  type,
  value,
  onChange,
  onClipboardClick,
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
      <div className="relative">
        <textarea
          data-testid="transformedText"
          className="resize-none border border-gray-300 rounded-md outline-none w-56 h-56"
          value={value}
          readOnly
        />
        {value && (
          <img
            data-testid="clipboard"
            className="absolute w-10 h-10 right-3 bottom-3 cursor-pointer"
            src={ICONS.clipboard}
            alt="clipboard"
            onClick={onClipboardClick}
          />
        )}
      </div>
    );
  }
}
