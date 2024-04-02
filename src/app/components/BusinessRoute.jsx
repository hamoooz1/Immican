"use client";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { TabContext } from "@/app/providers/TabProvider";

const BusinessRoute = () => {
  const router = useRouter()
  const tabContext = useContext(TabContext)


  return (
    <div className="">
      <section>


        <div className="h-[210px] w-[100%] bg-violet   flex justify-center  overflow-hidden">
        <div className="flex mxmd:flex-col  justify-between items-center w-[1200px] m-auto px-20">
        <div className="flex mxmd:flex-col justify-center items-center">
          <Image width={44} height={44} src="/images/One.png" alt="" className="w-11 h-11 mr-3 ml-5" />
          <div className="flex flex-col w-[100%] md:w-[700px] items-start mxmd:items-center mxmd:text-center mxmd:w-[90%]">
            <h1 className="font-bold mxmd:text-center  ">Elevate your business with Immican.ai</h1>
            <p >
            Grow your business by joining a platform backed by Canada&apos;s technology leaders
            </p>
          </div>
          </div>
          <div className="mxmd:h-0 mxmd:w-0">
          <Image className="overflow-hidden" src={"/product/growth.svg"} alt="" height={210} width={300}></Image>
          </div>
        </div>
      </div>



        <div className="h-[210px] w-[100%] bg-paleGreen  flex  justify-center  overflow-hidden">
        <div className="flex  mxmd:flex-col-reverse justify-between items-center w-[1200px] m-auto px-20 ">
          <Image className="mxmd:h-0 mxmd:w-0 overflow-hidden" src={"/product/settup_services.svg"} alt="" height={210} width={300}></Image>
          <div className="flex mxmd:flex-col-reverse justify-center items-center">
          <div className=" text-rightflex flex-col w-[700px] items-end mxmd:items-center mxmd:text-center mxmd:w-[90%]">
            <h1 className="font-bold md:text-right ">Set up your services</h1>
            <p className="md:text-right">
              
              Build your services age to begin automating your offerings
            </p>
          </div>
          <Image width={44} height={44} src="/images/Two.png" alt="" className="w-11 h-11 mr-3 ml-5" />
        </div>
        </div>




      </div>




        <div className="h-[210px] w-[100%] bg-paleYellow   flex justify-center  overflow-hidden">
        <div className="flex mxmd:flex-col  justify-between items-center w-[1200px] m-auto px-20">
        <div className="flex mxmd:flex-col justify-center items-center">
          <Image width={44} height={44} src="/images/Three.png" alt="" className="w-11 h-11 mr-3 ml-5" />
          <div className="flex mxmd:flex-col-reverse justify-center items-center">
          <div className="flex flex-col w-[100%] md:w-[700px] items-start mxmd:items-center mxmd:text-center mxmd:w-[90%]">
            <h1 className="font-bold mxmd:text-center  ">Connect with those who need you most</h1>
            <p >
            Immican helps connect service providers with clients in need,
                tailor fit to their personal journey.
            </p>
          </div>
          </div>
          </div>
          <div className="mxmd:h-0 mxmd:w-0">
          <Image className="overflow-hidden" src={"/product/connect.svg"} alt="" height={210} width={300}></Image>
          </div>
        </div>
      </div>

        <div className="h-[210px] w-[100%] bg-purple/50  flex  justify-center  overflow-hidden">
        <div className="flex  mxmd:flex-col-reverse justify-between items-center w-[1200px] m-auto px-20 ">
          
          <Image className="mxmd:h-0 mxmd:w-0 overflow-hidden" src={"/product/automation.svg"} alt="" height={210} width={300}></Image>
          <div className="flex mxmd:flex-col-reverse justify-center items-center">
          <div className=" text-rightflex flex-col w-[700px] items-end mxmd:items-center mxmd:text-center mxmd:w-[90%]">
            <h1 className="font-bold md:text-right ">Focus on what matters</h1>
            <p className="md:text-right">
              
            Pull reports, analyze trends, and automate your business
                activities
            </p>
          </div>
          <Image width={44} height={44} src="/images/Four.png" alt="" className="w-11 h-11 mr-3 ml-5" />
        </div>
        </div>
      </div>




      </section>
      <section className="flex justify-center" >
        <div className="bg-peach  w-[1200px] lg:my-[100px]  h-auto lg:rounded-[50px] flex flex-col items-center border-solid shadow-lg mxlg:w-[100%] pb-20">
          <h1 className="text-textColour font-bold text-[40px] mt-5">
            Pricing
          </h1>
          <div className=" lg:w-[100%] flex justify-evenly mxlg:flex-col items-center">
            {/* Card 1 */}

            <div className="bg-white w-[450px] mxmd:w-[100%] h-[500px] rounded-[50px] mt-10 shadow-md text-center mx-8">
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
                  <li className="my-3 flex items-baseline">
                    <FaCheckCircle
                      size={13}
                      style={{ color: "green" }}
                      className="mr-1"
                    />
                    Client Match
                  </li>
                  <li className="mb-3 flex items-baseline">
                    <FaCheckCircle
                      size={13}
                      style={{ color: "green" }}
                      className="mr-1"
                    />
                    Lead Management
                  </li>
                  <li className="mb-3 flex items-baseline">
                    <FaCheckCircle
                      size={13}
                      style={{ color: "green" }}
                      className="mr-1"
                    />
                    Service Automation
                  </li>
                  <li className="mb-3 flex items-baseline">
                    <FaCheckCircle
                      size={13}
                      style={{ color: "green" }}
                      className="mr-1"
                    />
                    Reporting Analysis
                  </li>
                  <li className="mb-3 flex items-baseline">
                    <FaCheckCircle
                      size={13}
                      style={{ color: "green" }}
                      className="mr-1"
                    />
                    Chat & Scheduling
                  </li>
                  <li className="mb-3 flex items-baseline">
                    <FaCheckCircle
                      size={13}
                      style={{ color: "green" }}
                      className="mr-1"
                    />
                    Secured and Compliant
                  </li>
                  <li className="flex items-baseline mb-10">
                    <FaCheckCircle
                      size={13}
                      style={{ color: "green" }}
                      className="mr-1"
                    />
                    Client Verification
                  </li>
                </ul>
              </div>
              <button onClick={() => {
                tabContext.setTabDefault("Business");
                router.push("/signup");
                }} className=" bg-btnBlue text-white rounded-[50px] px-[100px] py-2">Join Waitlist</button>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col justify-center items-center pt-12">
              <h1 className="font-bold mxmd:text-[36px] text-[44px]">Get Started!</h1>
              <p className="font-regular mxmd:text-[22px] text-[36px] w-4/5 text-center">Connect with those who need it most. Starting at $2500.00
              /month</p>
              <button onClick={() => {
                tabContext.setTabDefault("Business");
                router.push("/signup");
                }} className="bg-[#DD5471] text-white rounded-[50px] px-[100px] py-2 mt-5">Join Now</button>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default BusinessRoute;
