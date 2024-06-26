import React from "react";
import { Iconprop } from "../type";

function ThumbIcon({h,w,c}:Iconprop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill={c}
      viewBox="0 0 24 24"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M2 9h3v12H2a1 1 0 01-1-1V10a1 1 0 011-1zm5.293-1.293l6.4-6.4a.5.5 0 01.654-.047l.853.64a1.5 1.5 0 01.553 1.57L14.6 8H21a2 2 0 012 2v2.104a2 2 0 01-.15.762l-3.095 7.515a1 1 0 01-.925.619H8a1 1 0 01-1-1V8.414a1 1 0 01.293-.707z"></path>
      </g>
    </svg>
  );
}

export default ThumbIcon;