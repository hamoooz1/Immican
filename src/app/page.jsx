//IMPORTs
import Landing from "./components/Landing";
import JoinToday from "./components/JoinToday";
import ProblemSolution from "./components/ProblemSolution";
import NewsLetter from "./components/NewsLetter";
import Mission from "./components/Mission";
import BrandsList from "./components/BrandsList";
import Testimonials from "./components/Testimonials";
export const metadata  = {
  title: 'ImmiCan',
  description: 'Immigrants, find everything you need to settle and succeed in your new country. Connect with top vetted professionals, get rent assistance, AI conversational assistance, and fast economic integration, all in one place.',
  metadataBase: new URL('https://immican.ai/'),
};

//COMPONENT DECLARATION
export default function Home() {
  // COMPONENT RETURN
  return (
    <div className="flex flex-col items-center overflow-x-hidden ">
      <Landing />
      <Mission />
      <BrandsList />
      <ProblemSolution />
      <Testimonials />
      <JoinToday />
      <NewsLetter />
    </div>
  );
}
