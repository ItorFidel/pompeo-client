import React, { useState } from "react";
import styles from "../styles/routes/Login.module.scss";
import Input from "./global/Input";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import handleScrollToTop from "../helpers/scrollToTop";
import { useLoginMutation } from "../services/api";
import { useAppDispatch } from "../app/hooks";
import { loginUser } from "../features/userSlice";
import { LoginProps } from "../services/types";
import { networkError } from "../initialState";
import { triggerError, triggerErrorMessage } from "../helpers/errorTriggers";
import {
  handleEventBlurCapture,
  handleEventChange,
} from "../helpers/handleEvents";

const initialBody: LoginProps = {
  email: "",
  password: "",
  keepSignedIn: false,
};

const initialIsError = {
  email: false,
  password: false,
};

const clientErrorMessage = {
  email: "Email is required",
  password: "Password is required",
};

const initialServerErrorMsg = {
  email: "",
  password: "",
};

const Login = () => {
  const [body, setBody] = useState<LoginProps>(initialBody);
  const [login] = useLoginMutation({});
  const [isClientError, setIsClientError] = useState(initialIsError);
  const [isServerError, setIsServerError] = useState(initialIsError);
  const [serverErrorMsg, setServerErrorMsg] = useState(initialServerErrorMsg);
  const dispatch = useAppDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(body).some((value) => value === "")) {
      triggerError(isClientError, true, setIsClientError);
    } else {
      await login(body)
        .unwrap()
        .then((user) => {
          dispatch(loginUser(user));
          setBody(initialBody);
          handleScrollToTop();
        })
        .catch((error) => {
          const { data: errorData } = error;

          switch (errorData?.type) {
            case "emailError":
              triggerError(isServerError, false, setIsServerError, {
                email: true,
              });
              triggerErrorMessage(
                initialServerErrorMsg,
                "",
                setServerErrorMsg,
                { email: errorData.message }
              );
              break;
            case "passwordError":
              triggerError(isServerError, false, setIsServerError, {
                password: true,
              });
              triggerErrorMessage(
                initialServerErrorMsg,
                "",
                setServerErrorMsg,
                { password: errorData.message }
              );
              break;
            default:
              triggerError(isServerError, true, setIsServerError);
              triggerErrorMessage(
                initialServerErrorMsg,
                networkError.message,
                setServerErrorMsg
              );
              break;
          }
        });
    }
  };

  return (
    <main>
      <AuthForm
        title="Login"
        btnText="Login"
        className={styles.form}
        onSubmit={handleLogin}
      >
        <Input
          label="Email"
          type="text"
          placeholder="Type your email"
          id="email"
          svg={<EmailOutlined />}
          className={styles.loginInput}
          isClientError={isClientError.email}
          isServerError={isServerError.email}
          clientErrorMessage={clientErrorMessage.email}
          serverErrorMessage={serverErrorMsg.email}
          onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
          onChange={(e) => handleEventChange(e, setBody)}
        />
        <Input
          type="password"
          placeholder="Type your password"
          label="Password"
          id="password"
          svg={<LockOutlined />}
          className={styles.loginInput}
          isClientError={isClientError.password}
          isServerError={isServerError.password}
          clientErrorMessage={clientErrorMessage.password}
          serverErrorMessage={serverErrorMsg.password}
          onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
          onChange={(e) => handleEventChange(e, setBody)}
        />
        <div className={styles.signUpContainer}>
          <div className={styles.keepSignedIn}>
            <input
              type="checkbox"
              name="latestNews"
              id="latestNews"
              onChange={(e) =>
                setBody((state) => ({
                  ...state,
                  keepSignedIn: e.target.checked,
                }))
              }
            />
            <label htmlFor="latestNews">Keep me signed in</label>
          </div>
          <span>
            New user?{" "}
            <Link
              to="/sign-up"
              className={styles.signUp}
              onClick={handleScrollToTop}
            >
              Sign up here.
            </Link>{" "}
          </span>
        </div>
      </AuthForm>
    </main>
  );
};

export default Login;
