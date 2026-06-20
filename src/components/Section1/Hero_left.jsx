import React from "react";
import 'remixicon/fonts/remixicon.css'

const Hero_left = () => {
  return (
    <div className= "w-1/3 flex flex-col justify-between h-full  ">
      <div className=" h-8/10">
        <h2 className="font-bold text-5xl h-4/8 pt-5">
          Prospective <br /> customer <br /> segmentation
        </h2>
        <h3 className=" text-gray-600 w-64 h-4/8 font-medium
">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          voluptatem, sed distinctio molestias fuga atque autem et recusandae
          totam doloribus!
        </h3>
      </div>
      <div className="text-7xl h-2/10">
        <i class="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default Hero_left;
