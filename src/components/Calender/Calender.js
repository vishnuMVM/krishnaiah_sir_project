import React, { useState, useEffect } from "react";
import './Calender.css'



export default function Calender() {
  let calenderImageLinks = [
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136382/calender/1_zagnaz.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136384/calender/2_rfdj6d.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136382/calender/3_elorek.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136382/calender/4_ncttuf.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136383/calender/5_s9ap00.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136382/calender/6_hchjo4.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136383/calender/7_sfkn1y.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136384/calender/8_srqqmp.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136384/calender/9_fyuq0l.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136384/calender/10_gxhaah.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136384/calender/11_lpvalh.jpg",
    "https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136384/calender/12_getbln.jpg"
  ];




  return (
    <>

   <h1 className="calender-heading center">Telugu Calender</h1>
   <img className="center border-image" src="https://res.cloudinary.com/lokesh-webdev/image/upload/v1649145538/calender/border_wuamk7.png" alt="border" />
      <div className="calender-grid-container">
        {calenderImageLinks.map((imageSrc) => {
          return (
            <div className="calender-image-container ">
              <img className="calender-image" src={imageSrc} alt="calender-pics" />
            </div>
          );
        })}
      </div>
      <div className="other-details">
             <div>
          <img
            className="other-details-image"
            src="https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136385/calender/13_uu4osm.jpg"
            alt="calender-pics"
          />
        </div>
        <div >
          <img
            className="other-details-image"
            src="https://res.cloudinary.com/lokesh-webdev/image/upload/v1649136385/calender/14_g8yh2g.jpg"
            alt="calender-pics"
          />
        </div>
        </div>



    <div className="download-calender center">
       <h3>To Download this calender <a className="text-danger" href="https://firebasestorage.googleapis.com/v0/b/mygallery-73ec4.appspot.com/o/%E0%B0%B6%E0%B1%81%E0%B0%AD%E0%B0%95%E0%B1%83%E0%B0%A4%E0%B1%8D_%E0%B0%B8%E0%B0%82%E0%B0%B5%E0%B0%A4%E0%B1%8D%E0%B0%B8%E0%B0%B0_%E0%B0%95%E0%B0%BE%E0%B0%B2%E0%B1%86%E0%B0%82%E0%B0%A1%E0%B0%B0%E0%B1%8D.pdf?alt=media&token=13894ca7-75f5-4d1b-b844-82ec235c9dac">Click Here...</a></h3>
    </div>


    </>
  );
}
