import React from "react";

interface TestimonalProps {
  text: string | JSX.Element;
}

const Testimonial = (props: TestimonalProps) => {
  return (
    <>
      <div className="bg-white tablet:w-1/2 text-black p-2 rounded-xl shadow-md shadow-stone-800">
        <p className="laptop:text-sm">{props.text}</p>
      </div>
    </>
  )
}

export default Testimonial;