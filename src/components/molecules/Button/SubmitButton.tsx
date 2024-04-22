interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({ text, type }: ButtonProps) {
    return (
        <>
            <button type={type}>{text}</button>
        </>
    );
}