"use client";

import { Btn, TextArea } from "@/components/Common";
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
