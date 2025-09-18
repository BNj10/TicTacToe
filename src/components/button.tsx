type ButtonProps = {
    value: string;
    onClick: () => void;
}

export default function Button({value, onClick} : ButtonProps) {
    return (
        <button
        className="text-black-800 rounded-xl shadow-lg h-25 w-25 p-5"
        onClick={() => onClick()}
    >
        {value}
    </button>
    );
}