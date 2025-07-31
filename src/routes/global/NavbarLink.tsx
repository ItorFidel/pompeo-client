import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/routes/global/NavbarLink.module.scss";
import handleScrollToTop from "../../helpers/scrollToTop";

interface Props {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavbarLink = ({ to, className, children, onClick }: Props) => {
  const path = useLocation().pathname;

  return (
    <li
      className={`${styles.navbarLink} ${className ? className : ""} ${
        path === to ? styles.active : ""
      }`}
      onClick={onClick}
    >
      <Link to={to} onClick={handleScrollToTop}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;
