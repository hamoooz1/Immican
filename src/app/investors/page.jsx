//IMPORTs
import ContactComponent from "../components/ContactComponent";
import {ModalStateProvider} from "@/app/providers/ModalStateProvider";

export const metadata  = {
  title: 'For Investors',
  description: 'Investing in Immican is investing in your countries economic growth.',
  metadataBase: new URL('https://immican.ai/investors'),
};

const Contact = () => {
  return (
    <section className="bg-background bg-no-repeat bg-top w-full h-screen flex justify-center items-center">
      <ModalStateProvider>
        <ContactComponent/>
      </ModalStateProvider>
    </section>
  );
};

export default Contact;