import { Carousel } from "flowbite-react";
import React from "react";

const Slider = () => {
  return (
    <div className="h-[900px]">
      <Carousel className=" rounded-none">
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="w-full h[900px]" src="/slider/1.jpeg" alt="" />
          <div className=" absolute  bg-gradient-to-r to-70% from-[#4530ff] to-[#fff0] w-full h-full flex pt-44 px-10">
           <div className="lg:w-2/3 space-y-10">
           <p className="lg:text-8xl text-[#FF0090] font-bold  uppercase ">Thrilling <br /> Kabaddi  </p>
            <p className="lg:text-6xl text-white font-bold">Matches: A Display of Strength, Strategy, and Teamwork</p>
           </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="w-full h[900px]" src="/slider/2.webp" alt="" />
          <div className=" absolute  bg-gradient-to-r to-70% from-[#4530ff] to-[#fff0] w-full h-full flex pt-44 px-10">
           <div className="lg:w-2/3 space-y-10">
           <p className="lg:text-8xl text-[#FF0090] font-bold  uppercase ">Thrilling <br /> Kabaddi  </p>
            <p className="lg:text-6xl text-white font-bold">Matches: A Display of Strength, Strategy, and Teamwork</p>
           </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="w-full h[900px]" src="/slider/3.jpg" alt="" />
          <div className=" absolute  bg-gradient-to-r to-70% from-[#4530ff] to-[#fff0] w-full h-full flex pt-44 px-10">
           <div className="lg:w-2/3 space-y-10">
           <p className="lg:text-8xl text-[#FF0090] font-bold  uppercase ">Thrilling <br /> Kabaddi  </p>
            <p className="lg:text-6xl text-white font-bold">Matches: A Display of Strength, Strategy, and Teamwork</p>
           </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="w-full h[900px]" src="/slider/fotball.jpeg" alt="" />
          <div className=" absolute  bg-gradient-to-r to-70% from-[#4530ff] to-[#fff0] w-full h-full flex pt-44 px-10">
           <div className="lg:w-2/3 space-y-10">
           <p className="lg:text-8xl text-[#FF0090] font-bold  uppercase ">Thrilling <br /> Kabaddi  </p>
            <p className="lg:text-6xl text-white font-bold">Matches: A Display of Strength, Strategy, and Teamwork</p>
           </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="w-full h[900px]" src="/slider/5.webp" alt="" />
          <div className=" absolute  bg-gradient-to-r to-70% from-[#4530ff] to-[#fff0] w-full h-full flex pt-44 px-10">
           <div className="lg:w-2/3 space-y-10">
           <p className="lg:text-8xl text-[#FF0090] font-bold  uppercase ">Thrilling <br /> Kabaddi  </p>
            <p className="lg:text-6xl text-white font-bold">Matches: A Display of Strength, Strategy, and Teamwork</p>
           </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="w-full h[900px]" src="/slider/6.jpg" alt="" />
          <div className=" absolute  bg-gradient-to-r to-70% from-[#4530ff] to-[#fff0] w-full h-full flex pt-44 px-10">
           <div className="lg:w-2/3 space-y-10">
           <p className="lg:text-8xl text-[#FF0090] font-bold  uppercase ">Thrilling <br /> Kabaddi  </p>
            <p className="lg:text-6xl text-white font-bold">Matches: A Display of Strength, Strategy, and Teamwork</p>
           </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
