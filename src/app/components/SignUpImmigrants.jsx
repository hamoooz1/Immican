"use client";
import {Input, Autocomplete, AutocompleteItem, Checkbox } from "@nextui-org/react";
import homeCountries from "@/data/homeCountries.json";
import usePost from "../hooks/usePost";
import { useState, useContext, useRef } from "react";
import ModalPopUp from "./ModalPopUp";
import { ModalStateContext } from "@/app/providers/ModalStateProvider";
import ReCAPTCHA from "react-google-recaptcha";
//Form validation
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const immigrantSchema = z.object({
  fname: z.string().min(1, { message: "first name is required" }),
  lname: z.string().min(1, { message: "last name is required" }),
  emailAddress: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().length(10, { message: "Phone number must be 10 digits long" }),
  profession: z.string().min(1, { message: "Profession is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  country: z.string().min(1, { message: "Country is required" }),
});

//Terms and conditions
import {documents} from "@/data/docs.js";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";

const SignUpImmigrants = () => {

const countries = ["Canada", "USA (Coming soon)"]
const { send, isLoading, error } = usePost('https://immican.ai/ImmicanPHP/api/v1/immigrant-signup.php');
  
const modalState = useContext(ModalStateContext);

 //Terms and conditions
 const [isChecked, SetChecked]= useState(false);
 const {isOpen, onOpen, onOpenChange} = useDisclosure();

const recaptcha = useRef();

//Form validation
const {
  register,
  handleSubmit,
  formState: { errors },
  reset
} = useForm({ resolver: zodResolver(immigrantSchema) });

  async function onSubmit(data) {

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
        modalState.setShowModal(true);
        reset();
        SetChecked(false);
        
      }
      else {
        console.log(data)
      }
    }

  };

  
return (

  <form onSubmit={isChecked ? handleSubmit(onSubmit) : (e) => {e.preventDefault(); alert("Please accept the terms and conditions")}} name="businessForm" action="submit" className=" flex  flex-col p-4 justify-between">
      {/* Only allows the form to be submitted if the terms and conditions are accepted */}
      <div className="flex ">
        <div className="flex-col w-full mr-2">
            <Input {...register("fname")} className="flex mr-2 mt-2" radius="sm" size="sm" label="First Name" name="fname" type="text" />
            {errors.fname && <span className=" text-red font-sans font-medium ml-1">{errors.fname.message}</span>}
          </div>
          <div className="flex flex-col w-full">
            <Input {...register("lname")} className="flex mt-2" radius="sm" size="sm" label="Last Name"  name="lname" type="text" />
            {errors.lname && <span className=" text-red font-sans font-medium ml-1">{errors.lname.message}</span>}
          </div>
      </div>
      
      <div className="flex items-center">
        <div className="flex-col w-full mr-2">
          <Input {...register("age")} className="mr-2 mt-2" radius="sm" size="sm" label="Age"  name="age" type="number" />
          {errors.age && <span className=" text-red font-sans font-medium ml-1">{errors.age.message}</span>}
        </div>
        <div className="flex-col w-full">
          <Input {...register("profession")} className=" mt-2" radius="sm" size="sm" label="Profession" name="profession" type="text" />
          {errors.profession && <span className=" text-red font-sans font-medium ml-1">{errors.profession.message}</span>}
        </div>
      </div>
      <div className="flex">
          <div className=" flex-col w-full mr-2">
            <Input {...register("phone")} className="mt-2" radius="sm" size="sm" label="Phone Number" name="phone" type="text" />
            {errors.phone && <span className=" text-red font-sans font-medium ml-1">{errors.phone.message}</span>}
          </div>
        {/*<Input className="flex mt-2" radius="sm" size="sm"  label="ext."  type="text" />*/}
      </div>
      <div className="flex mt-2">
        <div className="flex-col w-full mr-2">
          <Autocomplete 
            radius="sm" 
            size="sm" 
            label="Country of origin" 
            name="country" 
            className="mr-2"
            {...register("country")}
          >
            {homeCountries.map((country) => (
              <AutocompleteItem 
                key={country.name} 
                value={country.name}
              >
                {country.name}
              </AutocompleteItem>
            ))}
          </Autocomplete>
          {errors.country && <span className=" text-red font-sans font-medium ml-1">{errors.country.message}</span>}
        </div>
      
      <Autocomplete 
        radius="sm" 
        size="sm" 
        label="Destination country" 
        disabledKeys={["USA (Coming soon)"]}
      >
        {countries.map((country) => (
          <AutocompleteItem key={country} value={country}>
            {country}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      </div>

      <div className="mt-2" >


      <div className="flex-col w-full">
          <Input {...register("emailAddress")} className="flex " radius="sm" size="sm"  label="Email"  name="emailAddress" type="email" />
          {errors.emailAddress && <span className=" text-red font-sans font-medium ml-1">{errors.emailAddress.message}</span>}
        </div>
      {/*<Input className="flex mt-2" radius="sm" size="sm"
        isRequired
        label="Password"
        
        type="password"
        />
      <Input className="flex mt-2" radius="sm" size="sm"
        isRequired
        label="Confirm Password"
        
        type="password"
        />*/}
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

        <ReCAPTCHA
          className="mt-2 flex justify-center"
          sitekey="6LcTzGEpAAAAAGIt0NnSX0PxKTOQxPrcxKk3yt2I"
          data-action="IMMIGRANT_SIGNUP"
          ref={recaptcha}    
       />

      <div className="flex flex-col mt-4">
        <button 
          className="bg-red h-[35px] rounded-md "
          > 
          Sign up
        </button>

      </div>

      <ModalPopUp/>
    </form>
  );

};

export default SignUpImmigrants;