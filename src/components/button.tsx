type ButtonProps = {
    value: string;
    onClick: () => void;
}

export default function Button({value, onClick} : ButtonProps) {
    return (
        <button
        className="text-black-800 rounded-xl shadow-lg p-5 flex items-center justify-center text-4xl font-bold text-gray-700 border w-25 h-25 border-gray-300"
        onClick={() => onClick()}
    >
        {value}
    </button>
    );
}