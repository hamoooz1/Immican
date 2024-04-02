"use client";
//IMPORTs
import brandsData from "../../data/brandsData.json";
import Ticker from 'framer-motion-ticker';
import { motion } from "framer-motion";
import Brand from "./Brand";

const BrandsList = () => {

  return (

    <section>
      <h1 className="lg:text-4xl text-xl text-center text-[#605B56]">Brands that trust ImmiCan.ai</h1>

      <div className="mt-10 w-full max-w-screen-lg h-[200px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        <Ticker className="" duration={20}>
          {brandsData.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Brand image={item.image}></Brand>
            </motion.div>
          ))}
        </Ticker>
      </div>

    </section>
  );

};


export default BrandsList;