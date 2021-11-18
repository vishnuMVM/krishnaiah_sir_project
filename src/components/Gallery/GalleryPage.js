import React, { useState } from "react";
import Title from "../Title";
import UploadImage from "../UploadImage";
import ImageGrid from "../ImageGrid";
import Modal from "../Modal/Modal";
import "./Gallery.css";
import { useAuth } from "../../firebase/config";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);
  const currentUser = useAuth();
  return (
    <div>
      {/* <Title/> */}
      {/* {currentUser && <UploadImage />} */}

<Loader type="TailSpin" color="#00Bfff" height={50} width={50} />

      <ImageGrid setSelectedImg={setSelectedImg} />

      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}


    </div>
  );
}
