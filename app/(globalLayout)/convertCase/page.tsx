"use client";

import { Btn, TextArea } from "@/components/Common";
import useClipboard from "@/hooks/common/useClipboard";
import { convertLoowerCase, convertUpperCase } from "@/utils/convertCase";
import { ChangeEvent, useState } from "react";

export default function ConverCase() {
  const [inputText, setInputText] = useState<string>("");
  const [transformedText, setTransformedText] = useState<string>("");
  const { copyText } = useClipboard();

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleUppercase = () => {
    setTransformedText(convertUpperCase(inputText));
  };

  const handleLowercase = () => {
    setTransformedText(convertLoowerCase(inputText));
  };

  const handleClipboard = () => {
    copyText(transformedText);
  };

  return (
    <div>
      <div className="flex py-6 px-6 gap-5 justify-center">
        <Btn
          testId="convertUpperBtn"
          onClick={handleUppercase}
          text="대문자로 변환"
        />
        <Btn
          testId="convertLowerBtn"
          onClick={handleLowercase}
          text="소문자로 변환"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <TextArea
          type="input"
          value={inputText}
          onChange={handleTextChange}
          placehohlder="텍스트를 입력하세요"
        />

        <TextArea
          type="readOnly"
          value={transformedText}
          onClipboardClick={handleClipboard}
        />
      </div>
    </div>
  );
}
