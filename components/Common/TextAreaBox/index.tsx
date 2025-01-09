import { ChangeEvent } from "react";
import TextArea from "../TextArea";

interface Props {
  inputText: string;
  transformedText: string;
  handleTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleClipboard: () => void;
  placehohlder?: string;
}

export default function TextAreaBox({
  handleClipboard,
  handleTextChange,
  inputText,
  transformedText,
  placehohlder,
}: Props) {
  {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
}
