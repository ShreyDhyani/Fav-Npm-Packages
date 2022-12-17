import React from "react";
import "./Test.css";

export default function () {

  const values = JSON.parse(localStorage.getItem("fav_packages") as string);
  console.log("values>>", values[0]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-red-200">
      
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front flex items-center justify-center">
            {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
            <h1>{values[0].favPackageName}</h1>
          </div>
          <div className="flip-card-back relative flex items-center justify-center">
            <div className="absolute top-2 right-2 text-red-500 cursor-pointer" onClick={()=>{console.log("HEllo")}}>X</div>
            <p>{values[0].favReason}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
