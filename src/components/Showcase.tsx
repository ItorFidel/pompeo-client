import styles from "../styles/components/Showcase.module.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import handleScrollToTop from "../helpers/scrollToTop";

interface Props {
  image: string;
  title: string | React.ReactElement;
  to: string;
  linkText: string;
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Showcase = ({
  image,
  title,
  to,
  linkText,
  reverse,
  className,
  children,
}: Props) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      className={`${styles.showcase} ${className ? className : ""} ${
        reverse ? styles.reverse : ""
      }`}
      ref={ref}
    >
      <div
        className={`${styles.image} ${inView ? styles.inView : ""}`}
        ref={ref}
      >
        <img src={image} alt="" />
        <div className={styles.imageSlab}></div>
      </div>
      <div className={`${styles.info} ${inView ? styles.inView : ""}`}>
        <h1>{title}</h1>
        <p>{children}</p>
        <Link to={to} onClick={handleScrollToTop}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
