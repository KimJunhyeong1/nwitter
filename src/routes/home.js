import React, { useState, useEffect, useRef } from "react";
import { dbService, storageService } from "firebaseInstance";
import { orderBy, collection, onSnapshot, query } from "firebase/firestore";
import Nweet from "./Nweet";
import NweetFactory from "components/NweetFactory";
import Navigation from "components/Navigation";
import { useHistory } from "react-router-dom";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    const nweetsQuery = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc")
    );

    onSnapshot(nweetsQuery, (querySnapshot) => {
      const nweetArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div className="container">
      <div className="container__bar">
        <h2>홈</h2>
      </div>
      <NweetFactory userObj={userObj} />
      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
