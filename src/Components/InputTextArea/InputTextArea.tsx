import React, { useState } from "react";

export default function InputTextArea({...props}) {
  const [input, setInput] = useState<string>("");
  return (
    <>
      <h2 className="font-bold text-sm text-[#4b5c6b] mt-10">
        Why is this your fav?
      </h2>
      <textarea
        className="border-2 border-[#c3cfd9] rounded w-full"
        id="text-area"
        name="w3review"
        rows={10}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          props.setFavReason(e.target.value);
        }}
      ></textarea>
    </>
  );
}
