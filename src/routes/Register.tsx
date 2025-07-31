import React, { useState } from "react";
import styles from "../styles/routes/Register.module.scss";
import Input from "./global/Input";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import handleScrollToTop from "../helpers/scrollToTop";
import { useRegisterMutation } from "../services/api";
import {
  userClientErrorMessage,
  initialUser,
  networkError,
} from "../initialState";
import { ReisterErrorProps } from "../services/types";
import { triggerError, triggerErrorMessage } from "../helpers/errorTriggers";
import {
  handleEventBlurCapture,
  handleEventChange,
} from "../helpers/handleEvents";

const initialIsError: ReisterErrorProps = {
  fullName: false,
  email: false,
  username: false,
  password: false,
};

const initialBody = {
  fullName: "",
  email: "",
  username: "",
  password: "",
};

const initialServerErrorMsg = {
  ...initialBody,
};

const Register = () => {
  const [body, setBody] = useState(initialBody);
  const [register] = useRegisterMutation({});
  const navigate = useNavigate();
  const [isClientError, setIsClientError] = useState(initialIsError);
  const [isServerError, setIsServerError] = useState(initialIsError);
  const [serverErrorMsg, setServerErrorMsg] = useState(initialServerErrorMsg);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(body).some((value) => value === "")) {
      triggerError(isClientError, true, setIsClientError);
    } else {
      const newUser = { ...initialUser, ...body };

      await register(newUser)
        .unwrap()
        .then((res) => {
          if (res) {
            setBody({ ...initialUser, password: "" });
            handleScrollToTop();
            navigate("/login", { replace: true });
          }
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
            case "usernameError":
              triggerError(isServerError, false, setIsServerError, {
                username: true,
              });
              triggerErrorMessage(
                initialServerErrorMsg,
                "",
                setServerErrorMsg,
                { username: errorData.message }
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
        title="Register"
        btnText="Register"
        className={styles.form}
        onSubmit={handleRegister}
      >
        <div className={styles.inputContainer}>
          <Input
            label="Full Name"
            type="text"
            placeholder="Type your Full Name"
            id="fullName"
            svg={<PersonOutline />}
            isClientError={isClientError.fullName}
            isServerError={isServerError.fullName}
            clientErrorMessage={userClientErrorMessage.fullName}
            serverErrorMessage={serverErrorMsg.fullName}
            onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
            onChange={(e) => handleEventChange(e, setBody)}
          />
          <Input
            label="Email"
            type="text"
            placeholder="Type your Email"
            id="email"
            svg={<EmailOutlined />}
            isClientError={isClientError.email}
            isServerError={isServerError.email}
            clientErrorMessage={userClientErrorMessage.email}
            serverErrorMessage={serverErrorMsg.email}
            onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
            onChange={(e) => handleEventChange(e, setBody)}
          />
          <Input
            label="Username"
            type="text"
            placeholder="Type your username"
            id="username"
            svg={<PersonOutline />}
            isClientError={isClientError.username}
            isServerError={isServerError.username}
            clientErrorMessage={userClientErrorMessage.username}
            serverErrorMessage={serverErrorMsg.username}
            onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
            onChange={(e) => handleEventChange(e, setBody)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Type your password"
            id="password"
            svg={<LockOutlined />}
            isClientError={isClientError.password}
            isServerError={isServerError.password}
            clientErrorMessage={userClientErrorMessage.password}
            serverErrorMessage={serverErrorMsg.password}
            onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
            onChange={(e) => handleEventChange(e, setBody)}
          />
        </div>
        <div className={styles.login}>
          Already have an account?{" "}
          <Link to="/login" onClick={handleScrollToTop}>
            Login here
          </Link>
        </div>
      </AuthForm>
    </main>
  );
};

export default Register;
