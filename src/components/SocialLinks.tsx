import styles from "../styles/components/SocialLinks.module.scss";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <ul className={styles.socialLinks}>
      <li className={`${styles.link} ${styles.orange}`}>
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Ffacebook.svg?alt=media&token=0298eae5-94ec-47e1-8d78-b6aec51db921"
            alt="facebook"
          />
        </Link>
      </li>
      <li className={`${styles.link} ${styles.red}`}>
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Ftwitter.svg?alt=media&token=71f19276-06be-4ad7-8af9-03499f492337"
            alt="twitter"
          />
        </Link>
      </li>
      <li className={`${styles.link} ${styles.maroon}`}>
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fgoogle-plus.svg?alt=media&token=b429d50e-e971-4715-a0de-f981712888d2"
            alt="googlePlus"
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
