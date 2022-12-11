import React from "react";

interface CustomButtonProps {
  label: string;
  color: string;
}

export default function CustomButton({ ...props }) {
  let wrapperStyle = "";

  if (props.floatRight) {
    wrapperStyle = wrapperStyle + "w-full flex justify-end";
  }

  return (
    <div className={wrapperStyle}>
      <button
        className={
          "rounded px-4 py-2 text-white " +
          (props?.color ? " " + props?.color : " bg-red-500")
        }
        onClick={props.callback}
      >
        {props.label}
      </button>
    </div>
  );
}
