"use client";
import {ScrollShadow} from "@nextui-org/react";
import {documents} from "@/data/docs.js";
import {Accordion, AccordionItem} from "@nextui-org/react";

import {Card, CardBody} from "@nextui-org/react";
const Cookies = () => {
  return (
    <section className="bg-background_2 bg-no-repeat bg-bottom w-full h-screen flex flex-col justify-center items-center">
      <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 mt-10 mb-5 flex-grow">
        <CardBody>
            <ScrollShadow className="w-full h-screen">
              <pre className=" text-small font-sans overflow-auto whitespace-pre-wrap">{documents[4]}</pre>
            </ScrollShadow>
        </CardBody>
      </Card>
      
    </section>
  );
};

export default Cookies;