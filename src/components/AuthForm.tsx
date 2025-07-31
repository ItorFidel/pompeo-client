import React from "react";
import styles from "../styles/components/AuthForm.module.scss";
import Button from "../routes/global/Button";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
  btnText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ children, className, title, btnText, onSubmit }: Props) => {
  return (
    <div className={styles.formContainer}>
      <form
        className={`${styles.form} ${className ? className : ""}`}
        onSubmit={onSubmit}
      >
        <h1>{title}</h1>
        {children}
        <Button type="submit" className={styles.submitBtn}>
          {btnText}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
