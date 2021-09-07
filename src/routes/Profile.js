import React, { useEffect, useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { authService, dbService } from "firebaseInstance";
import {
  collection,
  query,
  where,
  orderBy,
  QuerySnapshot,
  getDocs,
} from "firebase/firestore";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    signOut(authService);
    history.push("/");
  };

  const getMyNweets = async () => {
    const nweetsRef = await collection(dbService, "nweets");

    const nweetsQuery = await query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid),
      orderBy("createdAt")
    );

    const querySnapshot = await getDocs(nweetsQuery);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, {
        displayName: newDisplayName,
      });
      refreshUser();
      setNewDisplayName("");
    }
  };

  useEffect(() => {
    //getMyNweets();
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="이름"
          value={newDisplayName}
        />
        <input type="submit" value="프로필 업데이트" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
