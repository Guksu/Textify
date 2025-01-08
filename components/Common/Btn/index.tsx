interface Props {
  text: string;
  testId: string;
  onClick: () => void;
}

export default function Btn({ testId, text, onClick }: Props) {
  return (
    <button
      data-testid={testId}
      className="border border-gray-500 rounded-lg px-2 py-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
