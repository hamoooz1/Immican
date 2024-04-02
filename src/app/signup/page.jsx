"use client";
//IMPORTs
import SignUpBusiness from "../components/SignUpBusiness";
import SignUpImmigrants from "../components/SignUpImmigrants";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { ModalStateProvider}  from "@/app/providers/ModalStateProvider";
import { useContext } from "react";
import { TabContext } from "@/app/providers/TabProvider";


const SignUp = () => {
  const tabContext = useContext(TabContext)

  return (
    <section className="bg-background bg-no-repeat bg-bottom w-full h-screen flex  justify-center items-center  ">
    <div className="bg-white flex overflow-hidden rounded-2xl  shadow-lg" >
      <Image src={"/images/fatherSon.jpg"} className="mxmd:hidden" style={{ objectFit: "cover" }} alt="" height={650} width={450}/>
      <Card className="w-[600px] h-[650px] shadow-none rounded-none pt-4">
        <CardBody className="overflow-hidden">
          
          <ModalStateProvider>
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
             defaultSelectedKey={tabContext.tabDefault}
            >
              <Tab key="Business" title="Business" >
                  <SignUpBusiness/>
              </Tab>
              <Tab key="Immigrants" title="Immigrants" >
                  <SignUpImmigrants/>
              </Tab>
            </Tabs>
          </ModalStateProvider>
        </CardBody>
      </Card>
    </div>

    </section>

  );
};

export default SignUp;