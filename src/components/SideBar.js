import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ userObj }) => {
  console.log(userObj);
  return (
    <div className="sideBar__container">
      <div className="sideBar__col">
        <div className="sideBar__icons">
          {" "}
          <Link to="/" className="sideBar__logo">
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
          </Link>
          <div className="sideBar__nav">
            <Link to="/" className="icon">
              <img
                src={process.env.PUBLIC_URL + "/assets/ic_home_activation.png"}
              />
              <h2>홈</h2>
            </Link>
            <div className="icon">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/ic_ exploration_deactivation.png"
                }
              />
              <h2>탐색하기</h2>
            </div>
            <div className="icon">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/ic_notice_deactivation.png"
                }
              />
              <h2>알림</h2>
            </div>
            <div className="icon">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/ic_message_deactivation.png"
                }
              />
              <h2>쪽지</h2>
            </div>
            <div className="icon">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/ic_bookmark_deactivation.png"
                }
              />
              <h2>북마크</h2>
            </div>
            <div className="icon">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/ic_list_deactivation.png"
                }
              />
              <h2>리스트</h2>
            </div>
            <Link to="/profile" className="icon">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/ic_profile_deactivation.png"
                }
              />
              <h2>프로필</h2>
            </Link>
          </div>
        </div>
        <div className="sideBar__profile">
          <Link
            to="/profile"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 12,
            }}
          >
            <div className="sideBar__user">
              {" "}
              <img
                src={process.env.PUBLIC_URL + "/assets/ic_userprofile.png"}
              />
              <div className="sideBar__userName">
                <span>
                  {userObj?.displayName?.length ? `${userObj.displayName}` : ""}
                </span>
                <span>{userObj?.email?.length ? `${userObj.email}` : ""}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <ul>
        <li>
          <Link to="/" style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            style={{
              marginLeft: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 12,
            }}
          >
            <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
            <span style={{ marginTop: 10 }}>
              {userObj?.displayName?.length
                ? `${userObj.displayName}'의 프로필`
                : "프로필"}
            </span>
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default SideBar;
