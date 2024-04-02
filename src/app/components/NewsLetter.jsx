//IMPORTs
import { Button } from "@nextui-org/react";

//COMPONENT DECLARATION
function NewsLetter() {



  //COMPONENT RETURN
  return (
    <div className="bg-paleGreen  dark:bg-[#5A8282] w-[100%] py-10 flex flex-col items-center  ">

      <h4 className="text-3xl self-center pb-5" >Sign up for the newsletter.</h4>
      <div className="flex max-md:flex-col items-center">

        <input className="w-full h-[48px] rounded-md px-2" type="email" placeholder="email address" />
        <Button className="m-2  rounded-md font-bold w-[122px] h-[48px] ">submit</Button>
      </div>
    </div>
  );
}

export default NewsLetter;