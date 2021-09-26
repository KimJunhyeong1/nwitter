import React, { useState, useRef } from "react";
import { dbService, storageService } from "firebaseInstance";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const fileInput = useRef();

  const onSubmit = async (event) => {
    if (nweet === "") {
      return;
    }

    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);

      const response = await uploadString(fileRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref);
    }

    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        attachmentUrl,
        displayName: userObj.displayName,
      });
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.log(error);
    }

    setNweet("");
    onClearAttachment();
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setNweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;

    const file = files[0];

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;

      setAttachment(result);
    };

    reader.readAsDataURL(file);
  };

  const onClearAttachment = () => {
    setAttachment("");
    fileInput.current.value = "";
  };

  return (
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <div className="factoryInput__row1">
          <img
            className="factoryInput__userprofile"
            src={process.env.PUBLIC_URL + "/assets/ic_userprofile.png"}
          />
          <div className="factoryInput__inputDiv">
            <input
              className="factoryInput__input"
              value={nweet}
              onChange={onChange}
              type="text"
              placeholder="무슨 일이 일어나고 있나요?"
              maxLength={120}
            />
            {attachment && (
              <div className="factoryInput__image">
                <img src={attachment} alt="attachment_image"></img>
                <div className="factoryForm__clear" onClick={onClearAttachment}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="factoryInput__nweetButton">
          <div className="factoryInput__icons">
            {" "}
            <label htmlFor="attach-file" className="factoryInput__label">
              <img src={process.env.PUBLIC_URL + "/assets/ic_image.png"} />
            </label>
            <label htmlFor="attach-file" className="factoryInput__label">
              <img src={process.env.PUBLIC_URL + "/assets/ic_gif.png"} />
            </label>
            <img src={process.env.PUBLIC_URL + "/assets/ic_gragh.png"} />
            <img src={process.env.PUBLIC_URL + "/assets/ic_smile.png"} />
            <img src={process.env.PUBLIC_URL + "/assets/ic_schedule.png"} />
            <input
              id="attach-file"
              type="file"
              accept="image/*"
              onChange={onFileChange}
              style={{
                opacity: 0,
                display: "none",
              }}
              ref={fileInput}
            />
            {}
          </div>
          {nweet || attachment ? (
            <button className="factoryInput__fillButton">트윗하기</button>
          ) : (
            <button className="factoryInput__button">트윗하기</button>
          )}
        </div>
      </div>
    </form>
  );
};

export default NweetFactory;
