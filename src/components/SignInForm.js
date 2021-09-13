import React, { useState } from "react";
import { authService } from "firebaseInstance";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { updatePrefix } from "../../node_modules/typescript/lib/typescript";

const SignInForm = ({ popup, onSignInClick, refreshUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const [ProfileName, setProfileName] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setProfileName(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
        await updateProfile(authService.currentUser, {
          displayName: ProfileName,
        });

        refreshUser();
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <Dialog open={popup}>
        <img
          src={process.env.PUBLIC_URL + "/assets/ic_logo.png"}
          className="popup_logo"
        />
        <span class="PopupText">계정을 생성하세요</span>
        <form className="PopUp" onSubmit={onSubmit}>
          <TextField
            label="이름"
            variant="outlined"
            name="name"
            value={ProfileName}
            onChange={onChange}
            onSignInClick
            required
            className="NameField"
          />
          <TextField
            name="email"
            label="이메일"
            variant="outlined"
            type="email"
            required
            className="emailField"
            value={email}
            onChange={onChange}
          />
          <TextField
            name="password"
            label="패스워드"
            variant="outlined"
            type="password"
            required
            className="passwordFiled"
            value={password}
            onChange={onChange}
          />
          <div className="popup_buttons">
            <Button
              variant="contained"
              onClick={onSignInClick}
              className="popup_cannel_button"
            >
              취소
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="popup_submit_button"
            >
              확인
            </Button>
          </div>
          {error && <span className="authError">{error}</span>}
        </form>
      </Dialog>
    </>
  );
};

export default SignInForm;
