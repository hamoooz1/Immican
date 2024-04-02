import BusinessRoute from "@/app/components/BusinessRoute";
import { TabProvider } from "@/app/providers/TabProvider";

export const metadata  = {
  title: 'For Businesses',
  description: 'The smartest way you to manage your clients.',
  metadataBase: new URL('https://immican.ai/product/business'),
};

const Business = () => {
  return (
    <div className="overflow-x-hidden">
      <BusinessRoute />
    </div>
  )
}

export default Business;