import React from "react";
import { CLOUDINARY_IMG_BASE_URL } from "../assets/resources";
import NO_IMAGE2 from "../assets/NO_IMAGE.png";

const Card = ({ cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
  locality,
  area,
  minDeliveryTime,
  maxDeliveryTime,
  avgRating, }) => {
  return (
    <div className="shadow-2xl p-2   bg-amber-50 my-2 mx-2 w-64  rounded-md">
      <img className="w-fit" src={(cloudinaryImageId) == undefined || (cloudinaryImageId) == "" ? NO_IMAGE2 : CLOUDINARY_IMG_BASE_URL + cloudinaryImageId} />
      <h1 className="text-lg font-bold">{name}</h1>
      <h1 className="font-semibold text-gray-800">{cuisines[0]} {cuisines.length >= 2 ? "," : ""} {cuisines.length >= 2 && cuisines[1]}  </h1>
      <div className=" px-2 flex justify-between ">

        <span className=" text-sm   font-semibold text-gray-800">{avgRating === "--" ? null : avgRating}</span>
        <h1 className="text-sm font-semibold text-gray-800">{maxDeliveryTime} MINS</h1>
      </div>
    </div>
  )
}

export default Card;