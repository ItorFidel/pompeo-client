import styles from "../styles/components/AppLoading.module.scss";
import { CircularProgress } from "@mui/material";

const AppLoading = () => {
  return (
    <div className={styles.appLoading}>
      <CircularProgress disableShrink />
    </div>
  );
};

export default AppLoading;
