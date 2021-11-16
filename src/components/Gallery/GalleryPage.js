import React, { useState } from "react";
import Title from "../Title";
import UploadImage from "../UploadImage";
import ImageGrid from "../ImageGrid";
import Modal from "../Modal/Modal";
import "./Gallery.css";
import { useAuth } from "../../firebase/config";

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);
  const currentUser = useAuth();
  return (
    <div>
      {/* <Title/> */}
      {/* {currentUser && <UploadImage />} */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
