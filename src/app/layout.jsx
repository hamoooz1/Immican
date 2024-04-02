
import "./styles/globals.css";
import NavBar from "./components/NavBar";
import { Providers } from "./providers";
import Footer from "./components/Footer";
import GoogleAnalyticsScript from "@/app/analytics/GoogleAnalytics";
import CookieBannerLayout from '@/app/components/CookieBanner';
import { TabProvider } from "@/app/providers/TabProvider";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" >
      <GoogleAnalyticsScript GA_ID='G-VNMN82526F'/>
      <body className="font-inter " data-new-gr-c-s-check-loaded="14.1152.0" data-gr-ext-installed="">
        <Providers> 
          <NavBar />
            <TabProvider>
              {children}
            </TabProvider>
          <CookieBannerLayout/>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
