"use client";

import { Btn } from "@/components/Common";
import TextAreaBox from "@/components/Common/TextAreaBox";
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
      <TextAreaBox
        handleClipboard={handleClipboard}
        handleTextChange={handleTextChange}
        inputText={inputText}
        transformedText={transformedText}
        placehohlder="텍스트를 입력하세요"
      />
    </div>
  );
}
