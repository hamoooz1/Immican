"use client";
import {
  Tabs,
  Tab,
  Input,
  Textarea,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

function JoinToday() {
  const router = useRouter();
  return (
    <section className="w-[100%] flex flex-col items-center my-4 ">
      <h1 className="text-3xl self-center pb-5">Join Today!</h1>
      <h3 className="text-xl w-[800px] text-center mxmd:w-[100%]">
        Start your journey today and find out how you can be among the first to
        try ImmiCan.ai.{" "}
      </h3>
      <div className="flex w-[330px] justify-between py-4">
        <Button
          onClick={() => router.push("/product/immigrants")}
          className=" p-6 bg-btnBlue  text-white font-bold "
        >
          For Immigrants
        </Button>

        <Button
          onClick={() => router.push("/product/business")}
          className=" p-6 bg-black  text-white font-bold "
        >
          For Businesses
        </Button>
      </div>
    </section>
  );
}

export default JoinToday;
