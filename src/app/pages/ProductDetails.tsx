import { useState } from "react";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineGavel,
} from "react-icons/md";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation()
  const product = location.state

  const [viewing, setViewing] = useState("");

  const features = [
    {
      title: "Mileage",
      value: "10,021",
    },
    {
      title: "KMH",
      value: "50",
    },
    {
      title: "Interior color",
      value: "Jack black with Arizon accents",
    },
    {
      title: "Engine",
      value: "155HP 1.35L I3",
    },
    {
      title: "Transmission",
      value: "Contineous variable transmission",
    },
    {
      title: "Exterior color",
      value: "Blue gold methalic",
    },
  ];

  return (
    <div className="p-8 mx-auto py-5 border pt-10 flex flex-col relative min-h-max justify-center">
      <p className="text-3xl text-primary text-center font-bold mb-5">
        {product.name}
      </p>
      <div className="w-full items-center">
        <img
          src={require("../assets/" + product.coverImage)}
          alt="car"
          className="object-cover object-center aspect-video w-full"
        />
      </div>
      {/* featured images */}
      <div className="flex mt-8 gap-y-8 gap-x-8">
        {
          product.images.map((image: any) => <div className="flex flex-1">
            <img src={require("../assets/" + image)} alt="cover" />
          </div>)
        }
      </div>
      {/* details rows */}
      <div className="flex mt-8 flex-col mb-10">
        <div className="flex flex-col w-full" id="property">
          <div
            className="flex flex-row items-center justify-between w-full mb-4"
            id="label"
          >
            <p className="text-primary text-4xl font-semibold">Fuel Economy</p>
            <div>
              {viewing === "fuel" ? (
                <MdOutlineKeyboardArrowUp
                  className="text-primary text-4xl font-semibold hover:cursor-pointer"
                  onClick={() => setViewing("")}
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  className="text-primary text-4xl font-semibold hover:cursor-pointer"
                  onClick={() => setViewing("fuel")}
                />
              )}
            </div>
          </div>
          <hr className="w-full bg-primary border-0 h-[1px]" />
          {viewing === "fuel" && (
            <div className="mb-4" id="details">
              <div
                className="flex flex-row items-center justify-between w-full mb-2"
                id="details-item"
              >
                <p className="text-primary text-xl">Fuel type</p>
                <p className="text-primary text-2xl font-semibold">{product.fuelType.toString().toUpperCase()}</p>
              </div>
              <div
                className="flex flex-row items-center justify-between w-full mb-2"
                id="details-item"
              >
                <p className="text-primary text-xl">Combined gas milage</p>
                <p className="text-primary text-2xl font-semibold">48 KMH</p>
              </div>
              <div
                className="flex flex-row items-center justify-between w-full mb-2"
                id="details-item"
              >
                <p className="text-primary text-xl">City gas milage</p>
                <p className="text-primary text-2xl font-semibold">47 KMH</p>
              </div>
              <div
                className="flex flex-row items-center justify-between w-full mb-2"
                id="details-item"
              >
                <p className="text-primary text-xl">High way gas milage</p>
                <p className="text-primary text-2xl font-semibold">53 KMH</p>
              </div>
              <div
                className="flex flex-row items-center justify-between w-full mb-2"
                id="details-item"
              >
                <p className="text-primary text-xl">Fuel tank size</p>
                <p className="text-primary text-2xl font-semibold">50 L</p>
              </div>
              <hr className="w-full bg-primary border-0 h-[1px]" />
            </div>
          )}
        </div>

        <div className="flex flex-col w-full" id="property">
          <div
            className="flex flex-row items-center justify-between w-full mb-4"
            id="label"
          >
            <p className="text-primary text-4xl font-semibold">Performance</p>
            <div>
              {viewing === "performance" ? (
                <MdOutlineKeyboardArrowUp
                  className="text-primary text-4xl font-semibold hover:cursor-pointer"
                  onClick={() => setViewing("")}
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  className="text-primary text-4xl font-semibold hover:cursor-pointer"
                  onClick={() => setViewing("performance")}
                />
              )}
            </div>
          </div>
          <hr className="w-full bg-primary border-0 h-[1px]" />
          {viewing === "performance" && (
            <div className="mb-4" id="details">
              <div
                className="flex flex-row items-center justify-between w-full mb-2"
                id="details-item"
              >
                <p className="text-primary text-xl">Engine type</p>
                <p className="text-primary text-2xl font-semibold">Automatic</p>
              </div>
              <hr className="w-full bg-primary border-0 h-[1px]" />
            </div>
          )}
        </div>
        <div className="flex flex-col w-full" id="property">
          <div
            className="flex flex-row items-center justify-between w-full mb-4"
            id="label"
          >
            <p className="text-primary text-4xl font-semibold">Measurement</p>
            <div>
              {viewing === "measurements" ? (
                <MdOutlineKeyboardArrowUp
                  className="text-primary text-4xl font-semibold hover:cursor-pointer"
                  onClick={() => setViewing("")}
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  className="text-primary text-4xl font-semibold hover:cursor-pointer"
                  onClick={() => setViewing("")}
                />
              )}
            </div>
          </div>
          <hr className="w-full bg-primary border-0 h-[1px]" />
        </div>
        <div className="flex flex-col w-full" id="property">
          <div
            className="flex flex-row items-center justify-between w-full mb-4"
            id="label"
          >
            <p className="text-primary text-4xl font-semibold">Overview</p>
            <div>
              {viewing === "overview" ? (
                <MdOutlineKeyboardArrowUp
                  className="text-primary text-4xl font-semibold hover:cursor-pointer"
                  onClick={() => setViewing("")}
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  className="text-primary text-4xl font-semibold hover:cursor-pointer"
                  onClick={() => setViewing("")}
                />
              )}
            </div>
          </div>
          <hr className="w-full bg-primary border-0 h-[1px]" />
        </div>
      </div>
      {/* features */}
      <div className="mb-8">
        <p className="text-primary text-4xl font-semibold">Features</p>
        <div className="grid grid-cols-2 gap-y-4 mt-6 px-8">
          {features.map((item, i) => (
            <div className="flex flex-row items-center gap-x-2">
              <div className="bg-primary w-5 h-5 top-0" key={i} />
              <div className="pt-2">
                <p className="text-primary font-semibold text-2xl">
                  {item.title}
                </p>
                <p className="text-primary font-light">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* description */}
      <div className="mb-8 px-8">
        <p className="text-primary text-4xl font-semibold">
          Dealer's description
        </p>
        <div className="grid grid-cols-2 gap-y-4 mt-4">
          <p className="text-primary font-light">{product.description}</p>
        </div>
      </div>
      <div className="flex absolute bottom-10 right-10">
        <button className="bg-primary text-white font-bold text-3xl py-4 px-12 rounded-sm hover:bg-primary-hover">
          <div className="flex flex-row items-center justify-center gap-x-2">
            <MdOutlineGavel />
            <p>BID</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
