import React, { useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { dbService, storageService } from "firebaseInstance";
import { deleteObject, ref } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNweNweet] = useState(nweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("정말 트윗을 삭제하시겠습니까?");

    if (ok) {
      await deleteDoc(doc(dbService, `nweets/${nweetObj.id}`));

      if (nweetObj.attachmentUrl !== "") {
        await deleteObject(ref(storageService, nweetObj.attachmentUrl));
      }
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();

    await updateDoc(doc(dbService, `nweets/${nweetObj.id}`), {
      text: newNweet,
    });

    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweNweet(value);
  };
  return (
    <div className="nweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
              autoFocus
              onChange={onChange}
              className="formInput"
            />
            <input type="submit" value="Update Nweet" className="formBtn" />
          </form>
          <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
        </>
      ) : (
        <>
          <div className="nweet__column">
            <div>
              <img
                className="factoryInput__userprofile"
                src={process.env.PUBLIC_URL + "/assets/ic_userprofile.png"}
              />
            </div>
            <div>
              {" "}
              <h2>{nweetObj.displayName}</h2>
              <h4>{nweetObj.text}</h4>
              {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
            </div>
          </div>
          <div></div>
          {/* {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )} */}
        </>
      )}
    </div>
  );
};

export default Nweet;
