import React from "react";

interface StartButtonProps {
  title: string;
}

export default function StartButton(props: StartButtonProps) {
  return (
    <>
      <button className="text-sm text-center text-white bg-purple w-full rounded-3xl py-2 px-4 tablet:w-[70%] laptop:w-[50%] tablet:text-base font-medium hover:bg-fuchsia-950 ease-in duration-100 hover:scale-105">
        {props.title}
      </button>
    </>

  )
}