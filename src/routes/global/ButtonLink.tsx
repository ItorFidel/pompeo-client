import { Link } from "react-router-dom";
import styles from "../../styles/routes/global/ButtonLink.module.scss";

interface ButtonLinkProps {
  className?: string;
  linkTo?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonLink = ({
  className,
  linkTo,
  children,
  onClick,
}: ButtonLinkProps) => {
  return (
    <Link
      to={linkTo || "#"}
      className={`${styles.buttonLink} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
