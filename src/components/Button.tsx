import React from "react";

interface ButtonProps {
  title: string;
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <button className="smky-btn3 relative hover:text-blue py-2 px-3 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-white after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white">{props.title}</button>
    </>
  )
}

