import React from "react";
import CustomButton from "../CustomButton/CustomButton";

export default function Modal({ ...props }) {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center">
      <div className="w-[700px] h-72 bg-white border-2 flex flex-col justify-around items-center">
        <label>Are you sure you want to delete?</label>
        <div className="w-full flex justify-evenly">
          <CustomButton
            label="Cancel"
            callback={() => {
              props.setShowModal(false);
            }}
          />
          <CustomButton
            label="Yes"
            color={"bg-green-500"}
            callback={() => {
              props.deletFavPackage();
              props.setShowModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
