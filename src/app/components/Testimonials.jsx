"use client"
import testimonialsData from "../../data/testimonialsData.json";
import { useState } from "react";
import Ticker from 'framer-motion-ticker';
import { motion } from "framer-motion";
import "../styles/carousel.css";


//CAROUSEL FUNCTIONs
const iterations = Array(2).fill(null);


const Testimonials = () => {
const [isPlaying, setIsPlaying] = useState(true)


  return (
    <>
    <h2 className=" text-3xl  text-center text-[#605B56]">How ImmiCan is making an impact</h2>
    <div className=" mt-10 w-[1200px] max-lg:w-[100%] h-[400px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
      <Ticker isPlaying={isPlaying}    duration={60}>
        {testimonialsData.map((item, index) => (
          <motion.div onMouseEnter={()=> setIsPlaying(false)} onMouseLeave={()=> setIsPlaying(true)} key={index} className=" dark:bg-slate-700 flex flex-col h-[300px] p-2  w-[300px] mx-5  shadow-lg rounded-xl justify-between px-5 py-10"  whileHover={{ scale: 1.1 }}>
            <p className="text-lg ">{item.comment}</p>
            <p> - {item.name}</p>

          </motion.div>
        ))}
      </Ticker>
    </div>
        </>
  );
};

export default Testimonials;