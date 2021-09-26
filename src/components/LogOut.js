import React, { useState } from "react";
import { authService } from "firebaseInstance";
import { signOut, updateProfile } from "firebase/auth";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const LogOut = ({ popup, setPopup }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    signOut(authService);
    history.push("/");
  };

  const onCancelClick = () => {
    setPopup(false);
  };
  return (
    <>
      <Dialog open={popup}>
        <div className="logOut__container">
          <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="3x" />
          <span className="logOut__message1">트위터에서 로그아웃할까요?</span>
          <span className="logOut__message2">
            언제든지 다시 로그인할 수 있습니다. 계정을 전환하려는 경우 이미
            존재하는 계정을 추가하면 전환할 수 있습니다.{" "}
          </span>
          <div className="logOut__buttons">
            <button className="logout_cannel_button" onClick={onCancelClick}>
              취소
            </button>
            <button className="logOut__button" onClick={onLogOutClick}>
              로그아웃
            </button>
            {/* <Button variant="contained" onClick={onCancelClick}>
              취소
            </Button>
            <Button variant="contained" color="primary" onClick={onLogOutClick}>
              로그아웃
            </Button> */}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default LogOut;
