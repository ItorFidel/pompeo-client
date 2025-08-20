import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/routes/Profile.module.scss";
import { useUpdateUserMutation } from "../services/api";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectUser, loginUser } from "../features/userSlice";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
  Upload,
} from "@mui/icons-material";
import Input from "./global/Input";
import AuthForm from "../components/AuthForm";
import { upload } from "../firebase/firebaseController";
import firebaseConfig from "../firebase/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { Alert } from "@mui/material";
import { UserProps, ReisterErrorProps } from "../services/types";
import { triggerError } from "../helpers/errorTriggers";
import {
  handleEventBlurCapture,
  handleEventChange,
} from "../helpers/handleEvents";
import { userClientErrorMessage } from "../initialState";

const initialIsError: ReisterErrorProps = {
  fullName: false,
  email: false,
  username: false,
  password: false,
};

const Profile = () => {
  const user = useAppSelector(selectUser);
  const update = loginUser;
  const dispatch = useAppDispatch();
  const [body, setBody] = useState({ ...user, password: "" });
  const [imageFile, setImageFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  const [UploadProgress, setUploadProgress] = useState(0);
  const [isClientError, setIsClientError] = useState(initialIsError);
  const [updateUser, { isSuccess, isError }] = useUpdateUserMutation({});
  const profileImgRef = useRef<HTMLImageElement>(null);

  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const db = getFirestore(app);

  console.log(db);

  const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && profileImgRef.current) {
      const image = e.target.files[0];

      if (image) {
        profileImgRef.current.src = URL.createObjectURL(image);
        setImageFile(image);
      }
    }
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(body).some((value) => value === "") && !imageUrl) {
      triggerError(isClientError, true, setIsClientError);
    } else {
      const userUpdate: UserProps = {
        ...user,
        ...body,
        profileImg: imageUrl || user.profileImg,
      };

      updateUser(userUpdate)
        .unwrap()
        .then(() => dispatch(update(userUpdate)));
    }
  };

  useEffect(() => {
    if (imageFile) {
      upload(imageFile, setImageUrl, setUploadProgress);
    }
  }, [imageFile]);

  return (
    <main>
      <AuthForm
        title="Profile Edit"
        btnText="save changes"
        onSubmit={handleUpdate}
        className={styles.form}
      >
        <div className={styles.container}>
          <div className={styles.profileImg}>
            <div className={styles.imageContainer}>
              <img
                src={user.profileImg}
                alt="Profile Image"
                className={styles.image}
                ref={profileImgRef}
              />
              {!user.profileImg && <span>upload image</span>}
            </div>
            <div className={styles.labelConainer}>
              {UploadProgress && UploadProgress < 100 ? (
                <span className={styles.uploadProgress}>
                  <span
                    className={styles.inner}
                    style={{ width: `${UploadProgress}%` }}
                  ></span>
                </span>
              ) : UploadProgress && UploadProgress === 100 ? (
                <Alert
                  severity="success"
                  style={{ fontSize: "1.2rem", width: "100%" }}
                >
                  Success
                </Alert>
              ) : (
                ""
              )}
              <label htmlFor="profileImg" className={styles.uploadBtn}>
                <Upload />
              </label>
              <input
                type="file"
                id="profileImg"
                hidden
                onChange={handleInputFile}
              />
            </div>
          </div>
          <div className={styles.inputField}>
            {isSuccess ? (
              <Alert severity="success" style={{ fontSize: "1.3rem" }}>
                Success<strong>:</strong> Profile Updated Successfully!
              </Alert>
            ) : isError ? (
              <Alert severity="error" style={{ fontSize: "1.3rem" }}>
                Error<strong>:</strong> Profile not Updated!
              </Alert>
            ) : (
              ""
            )}

            <Input
              label="Full Name"
              type="text"
              placeholder="Type your Full Name"
              id="fullName"
              defaultValue={user.fullName}
              svg={<PersonOutline />}
              isClientError={isClientError.fullName}
              onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
              clientErrorMessage={userClientErrorMessage.fullName}
              onChange={(e) => handleEventChange(e, setBody)}
            />
            <Input
              label="Email"
              type="text"
              placeholder="Type your Email"
              id="email"
              defaultValue={user.email}
              svg={<EmailOutlined />}
              isClientError={isClientError.email}
              onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
              clientErrorMessage={userClientErrorMessage.email}
              onChange={(e) => handleEventChange(e, setBody)}
            />
            <Input
              label="Username"
              type="text"
              placeholder="Type your username"
              id="username"
              defaultValue={user.username}
              svg={<PersonOutline />}
              isClientError={isClientError.username}
              onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
              clientErrorMessage={userClientErrorMessage.username}
              onChange={(e) => handleEventChange(e, setBody)}
            />
            <Input
              label="New Password"
              type="password"
              placeholder="Type your password"
              id="password"
              svg={<LockOutlined />}
              isClientError={isClientError.password}
              clientErrorMessage={userClientErrorMessage.password}
              onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
              onChange={(e) => handleEventChange(e, setBody)}
            />
          </div>
        </div>
      </AuthForm>
    </main>
  );
};

export default Profile;
