"use client";
import { Input, Textarea, Checkbox } from "@nextui-org/react";
import { useContext, useState, useRef } from "react";
import usePost from "../hooks/usePost";
import ModalPopUp from "./ModalPopUp";
import {ModalStateContext } from "@/app/providers/ModalStateProvider";
import ReCAPTCHA from "react-google-recaptcha";

//Terms and conditions
import {documents} from "@/data/docs.js";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";

//Form validation
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const investorSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  emailAddress: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  compName: z.string().min(1, { message: "Company name is required" }),
  phone: z.string().length(10, { message: "Phone number must be 10 digits long" }),
  msg: z.string().min(1, { message: "Message is required" }),
});


const ContactComponent = () => {
  const { send, isLoading, error } = usePost('https://immican.ai/ImmicanPHP/api/v1/investor.php');
  
  const modalState = useContext(ModalStateContext);
  const recaptcha = useRef();

  //Terms and conditions
  const [isChecked, SetChecked]= useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  //Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: zodResolver(investorSchema) });


  async function onSubmit(data) {
    console.log(data);

    const captchaValue = recaptcha.current.getValue();

    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
    } else {
      const res = await fetch("https://immican.vercel.app/api/v1/reCAPTCHA.php", {
        method: "POST",
        body: JSON.stringify({ 'event': {
          'token': captchaValue,
          'expectedAction': 'IMMIGRANT_SIGNUP'
      } }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data_captcha = await res.json();
      if (data_captcha.tokenProperties.valid) {
        send(data);
        window.grecaptcha.reset();
        reset();
        modalState.setShowModal(true);
        
      }
      else {
        console.log(data)
      }
    }

  };



  return (

    <div className=" flex rounded-3xl  shadow-lg overflow-hidden">

      {/* <Image src={"/images/fatherSon.jpg"} style={{ objectFit: "cover" }} alt="" height={600} width={350} ></Image> */}
      <form onSubmit={isChecked ? handleSubmit(onSubmit) : (e) => {e.preventDefault(); alert("Please accept the terms and conditions")}} className="flex flex-col bg-white  h-[600px] w-[700px] justify-center p-10 " action="submit">
        {/* Only allows the form to be submitted if the terms and conditions are accepted */}
        <h1 className="text-3xl pb-8">Want to invest in ImmiCan?</h1>
        
        <div className="flex">
          <div className="flex-col mr-2 w-full">
            <Input {...register("name")} className=" mt-2 mr-2" radius="sm" size="sm" label="Name" name="name" type="text" />
            {errors.name && <span className=" text-red font-sans font-medium ml-1">{errors.name.message}</span>}
          </div>
          <div className="flex-col w-full">
            <Input {...register("emailAddress")} className=" mt-2 " radius="sm" size="sm"  label="Email" name="emailAddress" type="email" />  
            {errors.emailAddress && <span className=" text-red font-sans font-medium ml-1">{errors.emailAddress.message}</span>}   
          </div>
        </div>
        <div className="flex">
          <div className="flex-col w-full mr-2">
            <Input {...register("compName")} className=" mt-2 mr-2" radius="sm" size="sm" label="Legal Business Name" name="compName" type="text" />   
            {errors.compName && <span className=" text-red font-sans font-medium ml-1">{errors.compName.message}</span>}
          </div>
          <div className="flex-col w-full">
            <Input {...register("phone")} className=" mt-2 " radius="sm" size="sm"  label="Phone" name="phone" type="phone" />
            {errors.phone && <span className=" text-red font-sans font-medium ml-1">{errors.phone.message}</span>}
          </div>
        </div>
        <div className="flex-col w-full">
              <Textarea
                name="msg"
                label="Message"
                placeholder="Enter your message"
                className="mt-2"
                minRows={7}
                {...register("msg")}
          />
          {errors.msg && <span className=" text-red font-sans font-medium ml-1">{errors.msg.message}</span>}
          </div>
          
        {/* Terms and conditions */ }
        <Checkbox className='mt-2' onClick={onOpen} isSelected={isChecked} onValueChange={SetChecked}>Terms and Conditions</Checkbox>
         {isChecked && <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                  <ModalBody>
                    <Accordion>
                    <AccordionItem key="1" aria-label="DPA" title="Data Processing Addendum">
                      <ScrollShadow className=" h-[325px]">
                       <pre className=" text-small font-sans overflow-auto whitespace-pre-wrap">{documents[0]}</pre> 
                      </ScrollShadow>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="PP_1" title="Privacy Policy - (EEA), Switzerland, or UK">
                      <ScrollShadow className=" h-[325px]">
                       <pre className=" text-small font-sans overflow-auto whitespace-pre-wrap">{documents[1]}</pre> 
                      </ScrollShadow>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="PP_2" title="Privacy Policy - Non (EEA), Switzerland, or UK">
                      <ScrollShadow className=" h-[325px]">
                       <pre className=" text-small font-sans overflow-auto whitespace-pre-wrap">{documents[2]}</pre> 
                      </ScrollShadow>
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="ToU" title="Terms of Use">
                      <ScrollShadow className=" h-[325px]">
                       <pre className=" text-small font-sans overflow-auto whitespace-pre-wrap">{documents[3]}</pre> 
                      </ScrollShadow>
                    </AccordionItem>
                  </Accordion>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={() => {onClose(); SetChecked(false)}}>
                      Decline
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Accept
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>}

        <div className=" mt-2">
        <ReCAPTCHA
          className="mb-2 flex justify-center"
          sitekey="6LcTzGEpAAAAAGIt0NnSX0PxKTOQxPrcxKk3yt2I"
          data-action="IMMIGRANT_SIGNUP"
          ref={recaptcha}    
        />
          <button className="bg-red h-[35px] w-[100%] rounded-md "> Submit</button>


        </div>
          <ModalPopUp title="Thank you for your interest!" message="We will reach out shortly."/>

      </form>
    </div>

  );

};

export default ContactComponent;
