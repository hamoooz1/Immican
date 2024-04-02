// app/components/cookiebanner.tsx
'use client';
import { getLocalStorage, setLocalStorage } from '@/app/helpers/storageHelper';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { useRouter } from "next/navigation";

export default function CookieBannerLoader(){
    const router = useRouter()
    const [cookieConsent, setCookieConsent] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    //Analytics
    const analyticsConsent = useRef(true);
    
    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)
        
        //Analytics
        const storedAnalyticsConsent = getLocalStorage("analytics_consent", null)
        //console.log("Stored Cookie Consent: ", storedCookieConsent)
        setCookieConsent(storedCookieConsent)
        handleCookies(storedCookieConsent, storedAnalyticsConsent)
    }, [])

    function gtag(){
        dataLayer.push(arguments)
    }
        
    //Make arguments the amount of options
    function handleCookies(cookies, analytics) {

       
        //Analytics
        const newValue = analytics ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("analytics_consent", analytics)

        //Default cookies
        setCookieConsent(cookies)
        if(cookies === true){
            gtag('js', new Date());
            window.dataLayer = window.dataLayer || [];
            
            setLocalStorage("cookie_consent", cookies)
            
        }

        //For Testing
        //console.log("Cookie Consent: ", value)
        
    }
    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${cookieConsent != null ? "hidden" : "flex"} px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-50 rounded-lg shadow`}>
            
            <div className='mt-2 mb-auto text-center'>
                <Link href={"/cookies"}><p >We use <span className='font-bold text-sky-400 hover:text-sky-500'>cookies</span> on our site.</p></Link>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 '>
                    <button className='px-3 py-2 bg-gray-900 text-white rounded-lg' onClick={() => handleCookies(true, analyticsConsent.current.checked)}>Accept Cookies</button>
                    <button className='px-3 py-2 bg-slate-800 text-white rounded-lg' onClick={() => setShowOptions(!showOptions)}>Manage my cookies</button>
                </div>
                { showOptions && 
                    <div className='flex gap-2'>
                        <input type="checkbox" id="Essential" name="Essential" value="Essential" defaultChecked disabled/>
                        <label htmlFor="Essential"> Essential</label><br/>
                        <input type="checkbox" id="Analytics" name="Analytics" value="Analytics" defaultChecked ref={analyticsConsent} onClick={() => {console.log(analyticsConsent.current.checked)}}/>
                        <label htmlFor="Analytics"> Analytics</label><br/>
                    </div> 
                }
            </div>
        </div>
    )}

     