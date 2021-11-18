import React from "react";
import Iframe from "react-iframe";
import "./mapview.css";

const MapView = () => {
  return (

      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.765139630742!2d79.52314931482823!3d13.549993990478288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMTPCsDMyJzYwLjAiTiA3OcKwMzEnMzEuMiJF!5e0!3m2!1sen!2sin!4v1637041446008!5m2!1sen!2sin"
        id="myId"
        className="map-view"
        display="initial"
        position="relative"
      />
  
  
  );
};

export default MapView;