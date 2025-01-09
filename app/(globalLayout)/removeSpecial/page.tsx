"use client";

import { Btn } from "@/components/Common";
import TextAreaBox from "@/components/Common/TextAreaBox";
import useClipboard from "@/hooks/common/useClipboard";
import { removeEmoji, removeSpecial } from "@/utils/removeSpecial";
import { ChangeEvent, useState } from "react";

export default function RemoveSpecial() {
  const [inputText, setInputText] = useState<string>("");
  const [transformedText, setTransformedText] = useState<string>("");
  const { copyText } = useClipboard();

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleRemoveSpecial = () => {
    setTransformedText(removeSpecial(inputText));
  };

  const handleRemoveEmoji = () => {
    setTransformedText(removeEmoji(inputText));
  };

  const handleClipboard = () => {
    copyText(transformedText);
  };

  return (
    <div>
      <div className="flex py-6 px-6 gap-5 justify-center">
        <Btn
          testId="removeSpecialBtn"
          onClick={handleRemoveSpecial}
          text="특수문자 제거"
        />
        <Btn
          testId="removeEmojiBtn"
          onClick={handleRemoveEmoji}
          text="이모지 제거"
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
