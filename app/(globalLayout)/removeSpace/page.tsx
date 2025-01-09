"use client";

import { Btn } from "@/components/Common";
import TextAreaBox from "@/components/Common/TextAreaBox";
import useClipboard from "@/hooks/common/useClipboard";
import { removeAllSpace, removeChainSpace } from "@/utils/removeSpace";
import { ChangeEvent, useState } from "react";

export default function RemoveSapce() {
  const [inputText, setInputText] = useState<string>("");
  const [transformedText, setTransformedText] = useState<string>("");
  const { copyText } = useClipboard();

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleRemoveChainSapce = () => {
    setTransformedText(removeChainSpace(inputText));
  };

  const handleRemoveAllSapce = () => {
    setTransformedText(removeAllSpace(inputText));
  };

  const handleClipboard = () => {
    copyText(transformedText);
  };

  return (
    <div>
      <div className="flex py-6 px-6 gap-5 justify-center">
        <Btn
          testId="removeChainSpaceBtn"
          onClick={handleRemoveChainSapce}
          text="연속 공백제거"
        />
        <Btn
          testId="removeAllSpaceBtn"
          onClick={handleRemoveAllSapce}
          text="모든 공백제거"
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
