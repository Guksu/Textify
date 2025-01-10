interface Props {
  text: string;
  testId: string;
  onClick: () => void;
}

export default function Btn({ testId, text, onClick }: Props) {
  return (
    <button
      data-testid={testId}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
