import styles from "../../styles/routes/global/Logo.module.scss";
import { Link } from "react-router-dom";
import handleScrollToTop from "../../helpers/scrollToTop";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <h1
      className={`${styles.logo} ${className ? className : ""}`}
      onClick={handleScrollToTop}
    >
      <Link to="/">Pompeo</Link>
    </h1>
  );
};

export default Logo;
