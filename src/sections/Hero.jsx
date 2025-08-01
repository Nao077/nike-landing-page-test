import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* max-xl:padding-x  */}
      <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full padding-x pt-28">
        <p className="text-base font-montserrat text-coral-red">
          Our Summer collections
        </p>
        {/* max-sm:leading-[82] */}
        <h1 className="mt-10 font-palanquin text-8xl xl:text-[78px] lg:text-[70px] max-sm:text-5xl font-bold ">
          <span className="lg:bg-white lg:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"> 
          Discover stylish Nike arrivals, quality comfort, and innovationfor
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center lg:min-h-screen py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />

        <div className="flex  sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {
            shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard 
                imgURL={shoe} 
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
                 />
              </div>
            ))
          }
        </div>

      </div>
    </section>
  );
};

export default Hero;
