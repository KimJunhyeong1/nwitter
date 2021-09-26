import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/home";
import Navigation from "./Navigation";
import Profile from "routes/Profile";
import SignUpForm from "./SignUpForm";
import SideBar from "./SideBar";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <div className="App">
      {" "}
      <Router>
        {isLoggedIn && (
          <header className="App__header">
            <SideBar userObj={userObj} />
          </header>
        )}

        <Switch>
          <main className="App__main">
            {isLoggedIn ? (
              <>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <Route exact path="/">
                    <Home userObj={userObj} />
                  </Route>
                  <Route exact path="/profile">
                    <Profile userObj={userObj} refreshUser={refreshUser} />
                  </Route>
                </div>
              </>
            ) : (
              <>
                <Route exact path="/">
                  <Auth refreshUser={refreshUser} />
                </Route>
                <Route exact path="/login">
                  <SignUpForm userObj={userObj} refreshUser={refreshUser} />
                </Route>
              </>
            )}
          </main>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
