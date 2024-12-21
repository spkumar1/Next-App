import React from "react";
import bottle from "@/assets/images/bottle.png";
import tablate from "@/assets/images/tab.png";
import Image from "next/image";
import demo from "@/assets/images/image.png";

const Card = ({ date = "", primaryTitle, secondaryTitle, index, secDate }) => {
  return (
    <>
      <section
        className={`relative  w-[20rem]  selection: ${
          index % 2 === 0 ? "h-[23rem]" : "h-[12rem]"
        }`}
      >
        <Image
          src={bottle}
          fill
          alt="Covid-19"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-0">
          <span className="date-tag">{date}</span>
          <h6 className="p-8 mt-8 font-bold">{primaryTitle}</h6>
        </div>
      </section>
      <section
        className={`relative mt-4 w-[20rem]   ${
          index % 2 === 0 ? "h-[12rem]" : "h-[23rem]"
        }`}
      >
        <Image
          src={tablate}
          fill
          alt="Covid-19"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-0">
          {index !== 1 && (
            <span className="date-tag">{secDate ? secDate : date}</span>
          )}
          <h6 className="p-8 font-bold mt-8">{secondaryTitle}</h6>
        </div>
      </section>
    </>
  );
};

export default Card;
