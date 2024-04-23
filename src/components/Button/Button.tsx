interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function ButtonProps({ text, type, onClick }: ButtonProps) {
  return <button type={type} onClick={onClick}>{text}</button>;
}
