"use client";

import { Btn, TextArea } from "@/components/Common";
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
