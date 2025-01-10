import React from "react";
import TextArea from "../TextArea";

interface Props {
  handleClipboard: () => void;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputText: string;
  transformedText: string;
  placehohlder?: string;
}

export default function TextAreaBox({
  handleClipboard,
  handleTextChange,
  inputText,
  transformedText,
  placehohlder,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-4 bg-white shadow-md rounded-md">
      <TextArea
        type="input"
        value={inputText}
        onChange={handleTextChange}
        placehohlder={placehohlder}
      />

      <TextArea
        type="readOnly"
        value={transformedText}
        onClipboardClick={handleClipboard}
      />
    </div>
  );
}
