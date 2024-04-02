'use client';
// app/analytics/GoogleAnalytics.tsx
import {usePathname, useSearchParams} from 'next/navigation'
import { Suspense, useEffect } from "react";
import {pageview} from "@/app/helpers/gtagHelper"
import Script from 'next/script'

function GoogleAnalytics({GA_MEASUREMENT_ID}){
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
    
        pageview(GA_MEASUREMENT_ID, url);
        
    }, [pathname, searchParams, GA_MEASUREMENT_ID]);
    
    return (
        <>
        </>
)}

export default function GoogleAnalyticsScript({GA_ID}) {

    return (
        <>
            <Script strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}/>
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        <Suspense fallback={<div></div>}>
            <GoogleAnalytics GA_MEASUREMENT_ID={GA_ID}/>
        </Suspense>
        </>
    );
}