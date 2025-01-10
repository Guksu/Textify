import React, { ChangeEvent } from "react";

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
        className="resize-none border border-gray-300 rounded-md outline-none w-56 h-56 p-4 shadow-sm focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
        placeholder={placehohlder}
      />
    );
  }

  if (type === "readOnly") {
    return (
      <div className="relative w-56 h-56">
        <textarea
          data-testid="readOnlyText"
          className="resize-none border border-gray-300 rounded-md outline-none w-full h-full p-4 bg-gray-100 shadow-sm"
          value={value}
          readOnly
          placeholder={placehohlder}
        />
        <button
          className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={onClipboardClick}
        >
          📋
        </button>
      </div>
    );
  }

  return null;
}
