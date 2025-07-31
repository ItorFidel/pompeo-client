import { Link } from "react-router-dom";
import styles from "../styles/components/SubFooter.module.scss";

const SubFooter = () => {
  return (
    <div className={styles.subFooter}>
      This website is developed by <Link to="/"> Itor Fidelis</Link>. For source
      code, please head over to my
      <Link to="https://github.com/ItorFidel?tab=repositories" target="_blank">
        {" "}
        github repository.
      </Link>
    </div>
  );
};

export default SubFooter;
