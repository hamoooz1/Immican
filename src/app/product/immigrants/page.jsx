import ImmigrantsRoute from "@/app/components/ImmigrantsRoute";
import { TabProvider } from "@/app/providers/TabProvider";

export const metadata  = {
  title: 'For Immigrants',
  description: 'Find out how to make your immigration a success.',
  metadataBase: new URL('https://immican.ai/product/immigrants'),
};

const Immigrants = () => {
  return (
    <div className="overflow-x-hidden">
      <ImmigrantsRoute />
    </div>
  )
}

export default Immigrants;

