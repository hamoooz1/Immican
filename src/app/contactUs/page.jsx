//IMPORTs
import ContactUsComponent from "@/app/components/ContactUs";
import {ModalStateProvider} from "@/app/providers/ModalStateProvider";

const ContactUs = () => {
  return (
    <section className="bg-background_2 bg-no-repeat bg-bottom w-full h-screen flex justify-center items-center">
      <ModalStateProvider>
        <ContactUsComponent/>
      </ModalStateProvider>
    </section>
  );
};

export default ContactUs;