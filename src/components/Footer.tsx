import styles from "../styles/components/Footer.module.scss";
import Logo from "../routes/global/Logo";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo />
        <p className={styles.text}>
          I have always striven to fix beauty in wood, stone, glass or pottery,
          that has been my creed.
        </p>
        <div
          className={`${styles.contactContainer} ${
            inView ? styles.inView : ""
          }`}
          ref={ref}
        >
          <div className={styles.contact}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Femail.png?alt=media&token=44bd1836-3d1c-4335-b30a-20081fef6f60"
              alt=""
            />
            <h3>EMAIL</h3>
            <p>pompeopotery@gmail.com</p>
          </div>
          <div className={styles.contact}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Flocation.png?alt=media&token=b0648b69-6847-4162-8c4d-edc0364d8dde"
              alt=""
            />
            <h3>FIND</h3>
            <p>Central Park, Manhattan New York, 1101</p>
          </div>
          <div className={styles.contact}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fphone.png?alt=media&token=c0f4d8b8-17dd-4226-95ba-e31c12af65c1"
              alt=""
            />
            <h3>CALL</h3>
            <p>+1 292 345 678</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
