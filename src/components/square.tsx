type SquareProps = {
    value: string | null;
    onSquareClick: () => void; 
};

export default function Square({ value, onSquareClick } : SquareProps) {
  return (
    <button 
      className="flex items-center justify-center text-4xl font-bold text-gray-700 border w-25 h-25 border-gray-300" 
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}