import styles from "../../styles/routes/global/Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type, className, children, onClick }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`${styles.button} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
