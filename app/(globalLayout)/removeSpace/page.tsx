"use client";

import { Btn, TextArea } from "@/components/Common";
import { ICONS } from "@/constants/icons";
import { removeAllSpace, removeChainSpace } from "@/utils/removeSpace";
import { ChangeEvent, useState } from "react";

export default function RemoveSapce() {
  const [inputText, setInputText] = useState<string>("");
  const [transformedText, setTransformedText] = useState<string>("");

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
    navigator.clipboard.writeText(transformedText);
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

        <div className="relative">
          <TextArea type="readOnly" value={transformedText} />
          {/* TODO : 클릭시 toast추가 */}
          {transformedText && (
            <img
              data-testid="clipboard"
              className="absolute w-10 h-10 right-3 bottom-3 cursor-pointer"
              src={ICONS.clipboard}
              alt="clipboard"
              onClick={handleClipboard}
            />
          )}
        </div>
      </div>
    </div>
  );
}
