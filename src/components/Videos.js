import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
query,
orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, timestamp } from "../firebase/config";
import { Link } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";
import { useAuth } from "../firebase/config";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Videos() {
  const URLCollectionRef = collection(db, "AllVideoURLs");
  const [videoData, setVideoData] = useState([]);
  const currentUser = useAuth();
  var [loading,setLoading] =useState(true)

  useEffect(() => {
    const q = query(URLCollectionRef,orderBy("createdAt","desc"))
    const getURLs = async () => {
      const data = await getDocs(q);
      setVideoData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false)
    };
    getURLs();
  }, []);

  const handleDeleteVideo = async (id) => {
    const videoRef = doc(db, "AllVideoURLs", id);
    await deleteDoc(videoRef)
   

    toast.error("Your Video is deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.location.reload(false);
 
  };

  return (<>
  {currentUser &&  <div style = {{padding:"20px"}}>
    <Link to= "/update-gallery">
       <button className = "yellow-btn" ><i class="fas fa-arrow-left"></i> Update Videos </button>
    </Link>
    </div> }

    {loading?(<div className="spinner-location"> <Loader  type="TailSpin" color="#00Bfff" height={50} width={50} /> </div> ):
    <div className="videos-div">
      {videoData.map((videoDoc) => {
        return (
          <div className="video-grid" key={videoDoc.id}>

            <YoutubeEmbed embedId={videoDoc.url} />

            <h4> {videoDoc.videoName}</h4>;

            {currentUser && (
              <button className="logout-btn"
                onClick={() => {
                  handleDeleteVideo(videoDoc.id);
                }}
              >
                <i class="fas fa-trash"></i>  Delete this Video 
              </button>
            )}
          </div>
        );
      })}
    </div>}
    <ToastContainer />
 </> );
}
