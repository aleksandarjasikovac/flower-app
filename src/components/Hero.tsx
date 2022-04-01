import React from "react";
import hero from "../assets/pl-hero.png";
import { BsSearch } from "react-icons/bs";

export function Hero() {
  return (
    <div
      className="w-screen h-500 bg-cover no-repeat relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-5xl text-white font-semibold">
          Discover Flowers around you
        </h1>
        <h3 className="text-white pt-4">
          Explore between more than 8.427 sightings
        </h3>
        <label className="text-gray-400 focus-within:text-gray-600 block w-500 h-14 relative mt-10">
          <input
            type="text"
            name="email"
            placeholder="Looking for something specific?"
            className="w-full h-full pl-4"
          ></input>
          <BsSearch className="absolute right-3 top-1/2 " />
        </label>
      </div>
    </div>
  );
}
