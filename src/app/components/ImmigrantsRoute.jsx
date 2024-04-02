"use client"
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { TabContext } from "@/app/providers/TabProvider";

const ImmigrantsRoute = () => {
  const router = useRouter()
  const tabContext = useContext(TabContext)
  
  return (
    <div >
      
      <div className="h-[285px] w-[100%] bg-violet   flex justify-center  overflow-hidden">
        <div className="flex mxmd:flex-col  justify-between items-center w-[1200px] m-auto px-10">
        <div className="flex mxmd:flex-col justify-center items-center">

          <Image width={44} height={44} src="/images/One.png" alt="" className="w-11 h-11  mx-5" />
          <div className="flex flex-col w-[100%] md:w-[700px] items-start mxmd:items-center mxmd:text-center mxmd:w-[90%] ">
            <h1 className="font-bold mxmd:text-center   ">Start your immigration journey today</h1>
            <p>
            Start your immigration journey with ImmiCan.ai and settle up to 8 months sooner.
            </p>
          </div>
          </div>
          <div className="mxmd:h-0 mxmd:w-0">
          <Image className="overflow-hidden " src={"/product/get_started.svg"} alt="" height={240} width={250}></Image>
          </div>
        </div>
      </div>



      <div className="h-[285px] w-[100%] bg-paleGreen  flex  justify-center  overflow-hidden">
        <div className="flex  mxmd:flex-col-reverse justify-between items-center w-[1200px] m-auto ">
          <Image className="mxmd:h-0 mxmd:w-0 overflow-hidden" src={"/images/roadmap2.gif"} alt="" height={275} width={600}></Image>
          <div className=" text-rightflex flex-col w-[700px] items-end mxmd:items-center mxmd:text-center mxmd:w-[90%]">
            <h1 className="font-bold lg:text-right ">Your Path, Your Way.</h1>
            <p className="lg:text-right">
              Immigration is not 
              one-size-fits-all. ImmiAI guides your immigration
              journey with a personalized roadmap, ensuring you stay on track.
            </p>
          </div>
          <Image width={44} height={44} src="/images/Two.png" alt="" className="w-11 h-11 mr-3 ml-5" />
        </div>
      </div>

      <div className="h-[285px] w-[100%] bg-paleYellow   flex justify-center  overflow-hidden">
        <div className="flex mxmd:flex-col  justify-between items-center w-[1200px] m-auto px-10">
          <div className="flex mxmd:flex-col justify-center items-center">

          <Image width={44} height={44} src="/images/Three.png" alt="" className="w-11 h-11  mx-5" />
          <div className="flex flex-col w-[100%] md:w-[700px] items-start mxmd:items-center mxmd:text-center mxmd:w-[90%] ">
            <h1 className="font-bold mxmd:text-center   ">Get the help you need most</h1>
            <p  >
            Ensure a smooth transition by connecting with curated service providers tailored for each stage of your journey.
            </p>
          </div>
          </div>
          <div className="mxmd:h-0 mxmd:w-0">
          <Image className="overflow-hidden    " src={"/product/connect_services.svg"} alt="" height={500} width={300}></Image>
          </div>
        </div>
      </div>






  

      <section>
      <section className="flex justify-center" >
        <div className="bg-[#FFD77E] lg:mx-[100px] mxlg:w-[100%] w-[1200px] mx-auto mxlg:h-auto py-5 h-[700px] lg:rounded-[50px] flex flex-col justify-center items-center border-solid shadow-lg lg:my-24">
          <h1 className="text-textColour font-bold text-[40px] mt-5">
            Pricing
          </h1>
          <div className=" lg:w-[100%] flex justify-evenly mxlg:flex-col items-center">
            {/* Card 1 */}
            <div className="bg-white w-[450px]  h-[500px] rounded-[50px] mt-10 shadow-md text-center mx-8">
              <div className="flex flex-col items-center mt-5">
                <span className="bg-paleGreen py-1 px-3 font-bold mb-3 rounded-[50px]">
                  Join Waitlist
                </span>
                <p className="text-black font-light font-poppins">
                  Get access to ImmiCan as soon as we launch
                </p>
                <div className="border border-black w-[350px] m-auto opacity-10 mt-5"></div>
              </div>
              <div className="flex flex-col items-start ml-[50px]">
                <ul className="list-none mt-5">
                  <li className="mb-3 flex items-baseline"><FaCheckCircle size={13} style={{color:"green"}}className="mr-1"/> Service Match</li>
                  <li className="mb-3 flex items-baseline"><FaCheckCircle size={13} style={{color:"green"}}className="mr-1"/> Personlized Road Map</li>
                  <li className="mb-3 flex items-baseline"><FaCheckCircle size={13} style={{color:"green"}}className="mr-1"/> Service Tracking</li>
                  <li className="mb-3 flex items-baseline"><FaCheckCircle size={13} style={{color:"green"}}className="mr-1"/> Reporting and Analysis</li>
                  <li className="mb-3 flex items-baseline"><FaCheckCircle size={13} style={{color:"green"}}className="mr-1"/> Chat & Scheduling</li>
                  <li className="mb-3 flex items-baseline"><FaCheckCircle size={13} style={{color:"green"}}className="mr-1"/> Data Visualization</li>
                  <li className="mb-3 flex items-baseline"><FaCheckCircle size={13} style={{color:"green"}}className="mr-1"/> Trusted and Secure Platform</li>
                  <li className="flex items-baseline"><FaCheckCircle size={13} style={{color:"green"}}className="mr-1"/> Vetted Orginzations</li>
                </ul>
              </div>
              <button onClick={() => {
                tabContext.setTabDefault("Immigrants");
                router.push("/signup");
                }} className="mt-5 bg-btnBlue text-white rounded-[50px] px-[100px] py-2">Join Waitlist</button>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col justify-center items-center my-8">
              <h1 className="font-bold mxmd:text-[36px] text-[44px]">Skip the line!</h1>
              <p className="font-regular mxmd:text-[22px] text-[36px] w-3/5 text-center">For only $20.00 per month, get access to ImmiCAN today.</p>
              <button onClick={() => {
                tabContext.setTabDefault("Immigrants");
                router.push("/signup");
                }} className="mt-5 bg-[#DD5471] text-white rounded-[50px] px-[100px] py-2">Join Waitlist</button>
            </div>
            
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}

export default ImmigrantsRoute;
