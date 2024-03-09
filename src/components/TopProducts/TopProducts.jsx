import React from "react";
import { TopProductsData } from "../../data";
import { FaStar } from "react-icons/fa6";

const TopProducts = () => {
  return (
    <section>
      <div className="container">
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consectetur iure labore consequatur aperiam qui, assumenda
            reiciendis tenetur error inventore libero velit sint rem recusandae
            veniam, excepturi temporibus minus aut?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {TopProductsData.map((data)=>(
            <div data-aos='zoom-in' key={data.id} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white
             relative shadow-xl duration-300 group max-w-[300px]">
                <div className="h-[100px]">
                    <img src={data.img} alt={data.title} className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
                </div>
                <div className="p-4 text-center">
                    <div className="w-full flex items-center justify-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                    </div>
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                    <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
