import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Storage, db, timestamp } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Title from "./Title";
import { Link } from "react-router-dom";

const UploadImage = () => {
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [info, setinfo] = useState(null);
  var isProgressCompleted = false;

  const types = ["image/png", "image/jpeg"];

  const storageRef = ref(Storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  const handleUpload = async () => {
    // setLoading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (error) => console.log(error),

      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(db, "pics"), {
            name: file.name,
            URL: downloadURL,
            createdAt: timestamp,
          });
          console.log(progress);
          // addDocWithID()
        });
      },
      setLoading(false)
    );

    toast.success("Your Image is being Uploaded!", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setLoading(!loading);
    // const refreshPage = setTimeout(() => {
    //   window.location.reload(false);
    //   console.log("This will run after 5 second!");
    // }, 7000);
    // return () => clearTimeout(refreshPage);
  };

  function refreshPage() {
    window.location.reload(true);
  }

  const handleChange = async (e) => {
    let selected = e.target.files[0];
    setFile(e.target.files[0]);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setinfo("");
    } else {
      setFile(null);
      setinfo("Please select an image file (png or jpg)");
    }
  };

  return (
    <>
      <Title />
      <div>
        <label>
          <input type="file" onChange={handleChange} accept="image/*" />
          <span>  + </span>
        </label>


        <div className = "upload-image-div" style={{ display: "flex",
   justifyContent: "spaceAround"}}>
          <button disabled={loading ? true : false} onClick={handleUpload}>
            Upload Image
          </button>
          <Link to ='/gallery'> View Gallery </Link>
          </div>
      </div>

      <div className="output">
        {info && <div className="info">{info}</div>}
        {file && <div>{file.name}</div>}

        <div
          style={
            isProgressCompleted ? { display: "none" } : { display: "block" }
          }
        >
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}
          ></motion.div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default UploadImage;
