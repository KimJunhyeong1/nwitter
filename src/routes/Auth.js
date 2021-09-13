import React, { useState } from "react";
import { authService } from "firebaseInstance";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthForm from "components/AuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import SignInForm from "components/SignInForm";
import SignUpForm from "components/SignUpForm";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

const Auth = ({ refreshUser }) => {
  const [popup, setPopup] = useState(false);
  const [login, setLogin] = useState(false);

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    }

    const data = await signInWithPopup(authService, provider);
  };

  const onSignInClick = () => {
    if (popup === true) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };

  const test = () => {};
  return (
    <div className="Starting-Page">
      <div className="SrartTwitter">
        <img
          className="img_StartTwitter"
          src={process.env.PUBLIC_URL + "/assets/img_StartTwitter.png"}
          alt="start-img"
        ></img>
      </div>
      <div className="StartText">
        <img
          src={process.env.PUBLIC_URL + "/assets/ic_logo.png"}
          className="ic_logo"
          alt=""
        />
        <span className="aaa">지금 일어나고 있는 일</span>
        <span className="sss">오늘 트위터에 가입하세요.</span>
        <img
          src={process.env.PUBLIC_URL + "/assets/btn-blue.png"}
          className="signInImg"
          onClick={onSignInClick}
          alt=""
        />
        <Link to="/login">
          <img
            src={process.env.PUBLIC_URL + "/assets/btn-white.png"}
            className="signUpImg"
            alt=""
          />
        </Link>
        <img
          src={process.env.PUBLIC_URL + "/assets/google_login_button.png"}
          className="googleLogin"
          name="google"
          onClick={onSocialClick}
          alt=""
        />
      </div>
      {setPopup ? (
        <SignInForm
          popup={popup}
          onSignInClick={onSignInClick}
          refreshUser={refreshUser}
        />
      ) : (
        ""
      )}
    </div>

    // <div className="authContainer">
    //   <FontAwesomeIcon
    //     icon={faTwitter}
    //     color={"#04AAFF"}
    //     size="3x"
    //     style={{ marginBottom: 30 }}
    //   />
    //   <AuthForm />
    //   <div className="authBtns">
    //     <button onClick={onSocialClick} name="google" className="authBtn">
    //       Google로 시작하기 <FontAwesomeIcon icon={faGoogle} />
    //     </button>
    //   </div>
    // </div>
  );
};
export default Auth;
