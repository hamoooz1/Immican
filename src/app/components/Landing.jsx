"use client";
import { Tabs, Tab, Input, Textarea, Link, Button, Card, CardBody, CardHeader, Chip, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";


import React from "react";

import Image from "next/image";



const Landing = () => {
  const router = useRouter()

  return (
    <section className="bg-background bg-no-repeat  bg-bottom w-[100%] mxmd:h-[600px] md:h-[800px]   dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a3e44] via-[#08090a] to-black   ">
      <div className="flex justify-center items-center  md:mx-10 pt-20 ">

        <div className="h-0 w-0 md:h-[650px] md:w-[434px] mr-8" >
          <Image src="/images/hero_image_nurse_2.png" alt="" className=" md:min-w-[434px]  rounded-[50px]" height={650} width={434} />
        </div>

        <div className="w-[750px] h-[450px] md:max-h-[240px]  flex flex-col justify-evenly mxmd:items-center text-center mxmd:mx-6 md:text-start mx-24">
          <h1 className="text-5xl font-bold mb-2 leading-[1.2em] mxlg:text-center mr-8">
            Empowering immigrants on their path to success.
          </h1>
          <p className="text-2xl font-light mxlg:text-center mr-8">
            Ensuring the process of achieving success is quick, straight-forward
            and easy.
          </p>
          <div className=" flex justify-between max-w-[325px] mt-10 items-center mr-8">
     
              <Button onClick={() => router.push("/product/immigrants")} className=" mr-2 p-6 shadow-md bg-btnBlue  text-white font-bold ">For Immigrants</Button>
     
   
              <Button onClick={() => router.push("/product/business")} className=" p-6 bg-black shadow-md text-white font-bold ">For Businesses</Button>
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
