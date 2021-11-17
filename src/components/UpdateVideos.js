import React, { useState, useEffect } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { db } from "../firebase/config";
import ytCodeParser from "@joachimdalen/youtube-url-to-code";
import { timestamp } from "../firebase/config";
import getYoutubeTitle from "get-youtube-title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function UpdateVideos() {
  const [inputVideoUrl, setInputVideoUrl] = useState("");
  const [videoID, setvideoID] = useState("");

  const URLCollection = collection(db, "AllVideoURLs");
  const [videoTitle, setVideoTitle] = useState("");

  const addVideoLink = async () => {
    if (
      (videoID || videoID !== "") &&
      (inputVideoUrl || inputVideoUrl !== "") &&
      (videoTitle || videoTitle !== "")
    ) {
      setInputVideoUrl("");
      const addedDoc = await addDoc(URLCollection, {
        url: videoID,
        fullVideoUrl: inputVideoUrl,
        // ID: uuid(),
        CreatedAt: timestamp,
        videoName: videoTitle,
      });
    }
  };

  useEffect(() => {
    addVideoLink();
  }, [videoID, videoTitle]);

  function handleSubmit(e) {
    console.log(e, "event");
    e.preventDefault();
    getVideoIDs();
  }

  const getVideoIDs = () => {
    var temp = ytCodeParser(inputVideoUrl);
    setvideoID(temp);
    getYoutubeTitle(temp, function (err, title) {
      setVideoTitle(title);
      console.log(title);
    });
    toast.success("Your Video Link is being Updated!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // const refreshPage = setTimeout(() => {
    //   window.location.reload(false);
    //     console.log('This will run after 5 second!')
    //   }, 3000);
    //   return () => clearTimeout(refreshPage);
  };

  const handleChange = (e) => {
    setInputVideoUrl(e.target.value);
  };

  return (
    <div>
      <div className="title ">
        <h2>Update your videos here...</h2>
      </div>

      <div className="update-Video">
        <div className="fields">
          <input
            placeholder="Paste Video Link here"
            className="inputField"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div className="fields">
          <button className="btn" type="submit" onClick={handleSubmit}>
            Update Link Here{" "}
          </button>
        </div>
      </div>
      <ToastContainer />
      <div className = "fields" style = {{ position:"relative", float:"right",padding:"20px", marginLeft: "auto" , marginRight: 0}}>
        <Link to="/videos">
          <button className="logout-btn"> <i class="far fa-eye"></i>  View Videos </button>
        </Link>
      </div>
    </div>
  );
}
