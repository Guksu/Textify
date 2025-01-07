"use client";

import { ICONS } from "@/constants/icons";
import { convertLoowerCase, convertUpperCase } from "@/utils/ConvertCase";
import { ChangeEvent, useState } from "react";

export default function ConverCase() {
  const [inputText, setInputText] = useState<string>("");
  const [transformedText, setTransformedText] = useState<string>("");

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
    navigator.clipboard.writeText(transformedText);
  };

  return (
    <div>
      <div className="flex py-6 px-6 gap-5 justify-center">
        <button
          data-testid="convertUpperBtn"
          className="border border-gray-500 rounded-lg px-2 py-2"
          onClick={handleUppercase}
        >
          대문자로 변환
        </button>
        <button
          data-testid="convertLowerBtn"
          className="border border-gray-500 rounded-lg px-2 py-2"
          onClick={handleLowercase}
        >
          소문자로 변환
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <textarea
          data-testid="inputText"
          className="resize-none border border-gray-300 rounded-md outline-none w-56 h-56"
          value={inputText}
          onChange={handleTextChange}
          placeholder="텍스트를 입력하세요"
        />
        <div className="relative">
          <textarea
            data-testid="transformedText"
            className="resize-none border border-gray-300 rounded-md outline-none w-56 h-56"
            value={transformedText}
            readOnly
          />
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
