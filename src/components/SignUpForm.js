import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authService } from "firebaseInstance";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      data = await signInWithEmailAndPassword(authService, email, password);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="login_page">
      <div className="login_div">
        <img
          src={process.env.PUBLIC_URL + "/assets/ic_logo.png"}
          className="login_ic_logo"
          alt=""
        />
        <span class="login_text">트위터 로그인</span>
        {error ? <span className="login_error_message">{error}</span> : ""}
        <div>
          <form className="login_form" onSubmit={onSubmit}>
            <TextField
              label="이메일"
              name="email"
              className="login_email_filed"
              variant="outlined"
              color="#4da0eb"
              value={email}
              onChange={onChange}
            ></TextField>
            <TextField
              label="비밀번호"
              name="password"
              className="login_password_filed"
              variant="outlined"
              color="#4da0eb"
              value={password}
              onChange={onChange}
              type="password"
            ></TextField>
            <button type="submit" className="login_LoginButton">
              <img
                src={process.env.PUBLIC_URL + "/assets/login_button.png"}
                alt=""
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
