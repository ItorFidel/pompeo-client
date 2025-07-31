import { useErrorBoundary } from "react-error-boundary";
import ButtonLink from "../routes/global/Button";
import styles from "../styles/components/ErrorHandler.module.scss";
import Navbar from "../routes/global/Navbar";
import SubFooter from "./SubFooter";

interface Props {
  error: Error;
}

const ErrorHandler = ({ error }: Props) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <>
      <Navbar />
      <div className={styles.error}>
        <div className={styles.text}>
          <p className={styles.title}>An error occured:&nbsp;</p>
          <p className={styles.desc}>{error.message}</p>
        </div>
        <ButtonLink onClick={resetBoundary}>Try again</ButtonLink>
      </div>
      <SubFooter />
    </>
  );
};

export default ErrorHandler;
