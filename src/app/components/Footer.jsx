"use client"
import Link from "next/link";
import Image from "next/image";
import { FaSquareInstagram, FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"
function Footer() {
  return (
    
    <footer className=" flex justify-center w-[100%] max-w-[100%] h-[200px] bg-black text-white ">
      

    <div className="flex flex-col md:w-[900px]">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">

          <Link className=" text-[32px] " href={'/'}> ImmiCAN</Link>
          <div className="flex w-[150px] justify-between ">

           
            <Link key={"L"} href={"https://www.linkedin.com/company/immi-ai/?trk=public_profile_topcard-current-company&originalSubdomain=ca"} target={'_blank'}><Image key={"L"} width={30} height={30}  src={"/social_media/LI-In-Bug.png"} alt="LinkedIn logo"  className="object-fill"/></Link> 
            <Link key={"I"} href={"https://instagram.com"} target={'_blank'}><Image  width={25} height={25}  src={"/social_media/Instagram_Glyph_Gradient.svg"} alt="Instagram logo" className="object-fit"/></Link>
            <Link key={"X"} href={"https://twitter.com/Saad_zkhan"} target={'_blank'}><Image  href="https://twitter.com/Saad_zkhan" width={24} height={24}  src={"/social_media/X_logo.svg"} alt="x logo" className="object-fill"/></Link>
            <Link key={"F"} href={"https://facebook.com"} target={'_blank'}><Image  width={27} height={27}  src={"/social_media/Facebook_Logo_Primary.png"} alt="Facebook logo" className="object-fit"/></Link>
          
          </div>
          </div>

            <div className="flex justify-center w-full pt-5"> 

              <Link href={'/product/immigrants'} className="pr-3">Immigrants</Link>
              <Link href={'/product/business'} className="pr-3">Business</Link>
              <Link href={'/investors'} className="pr-3">Investors</Link>

            </div>
            <div className="text-center" >
              <p>&copy; Copyright 2024 ImmiCAN </p>
              <p>Powered by <a className="text-blue-100" href="https://ayratech.ca">AyraTech </a></p>
            </div>
          </div>
 
      
    </footer>
  );
}

export default Footer;
