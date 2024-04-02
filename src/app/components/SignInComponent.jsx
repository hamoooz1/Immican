import { Tabs, Tab, Input, Textarea, Link, Button, Card, CardBody, CardHeader, Chip, Autocomplete, AutocompleteItem } from "@nextui-org/react";

import Image from "next/image";

const SignInComponent = () => {

  return (

    <div className=" flex rounded-3xl  shadow-lg overflow-hidden">

      <Image src={"/images/fatherSon.jpg"} className="mxmd:hidden" style={{ objectFit: "cover" }} alt="" height={600} width={350} ></Image>
      <form className="flex flex-col bg-white  h-[600px] w-[500px] justify-center p-10 " action="submit">
        <h1 className="text-3xl pb-8">Sign in</h1>
        <Input className="flex " radius="sm" size="sm"  isRequired label="Email"  type="email" />
      <Input className="flex mt-2" radius="sm" size="sm"
        isRequired
        label="Password"
        
        type="password"
        />

        <div className="flex flex-col mt-2">
          <button className="bg-red h-[35px] rounded-md "> sign in</button>
          <Link href={'/signup'} className="pr-3 text-[#306dd7] hover:underline text-sm ">Create an account</Link>
          <Link href={'/'} className="pr-3 text-[#306dd7] hover:underline text-sm">Recover account</Link>

        </div>


      </form>
    </div>

  );

};

export default SignInComponent;
