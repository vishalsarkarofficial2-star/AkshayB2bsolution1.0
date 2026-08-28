import React from 'react';
import { Bell, Shield, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

export const MobileAppBanner: React.FC = () => {
  return (
    <section id="mobile-app-banner-section" className="py-14 bg-gradient-to-r from-[#0B3D91] via-[#0D47A1] to-[#1565C0] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text and Features */}
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 bg-orange-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-full shadow-xs">
              Mobile App Release
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              NOW YOUR COMPLIANCE PARTNER ONE CLICK AWAY WITH {COMPANY_DETAILS.name.toUpperCase()} APP!
            </h2>

            <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
              Track live MCA status, receive instant WhatsApp &amp; SMS due-date alerts, download government registration certificates directly into your device vault, and connect with assigned legal executives on 24x7 priority chat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Bell className="w-4 h-4 text-orange-300" />
                <span>Live Status Alerts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Shield className="w-4 h-4 text-orange-300" />
                <span>Encrypted Vault</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <MessageCircle className="w-4 h-4 text-orange-300" />
                <span>1-Tap CA Support</span>
              </div>
            </div>

            {/* App Store / Play Store Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => alert('The akshayb2bsolutions Android app will begin downloading or link to Google Play Store.')}
                className="transition-transform hover:scale-105 active:scale-95 duration-200 cursor-pointer focus:outline-none"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play Store"
                  referrerPolicy="no-referrer"
                  className="h-[44px] sm:h-[48px] object-contain"
                />
              </button>

              <button
                onClick={() => alert('The akshayb2bsolutions iOS app is currently in TestFlight Beta. You will receive notification on email.')}
                className="transition-transform hover:scale-105 active:scale-95 duration-200 cursor-pointer focus:outline-none"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on Apple App Store"
                  referrerPolicy="no-referrer"
                  className="h-[44px] sm:h-[48px] object-contain"
                />
              </button>
            </div>
          </div>

          {/* Right Phone Image Container - Crops extra white canvas margins */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative group max-w-[270px] sm:max-w-[310px] w-full">
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-blue-400/30 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition duration-300"></div>

              {/* Smartphone Frame Wrapper - Clips extra white background edges */}
              <div className="relative bg-slate-950 p-2 sm:p-2.5 rounded-[2.5rem] border-4 border-slate-800 shadow-2xl overflow-hidden">
                {/* Top Notch / Speaker */}
                <div className="w-16 h-3 bg-slate-800 rounded-b-xl mx-auto mb-2 relative z-20 flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-slate-900 rounded-full"></div>
                </div>

                {/* Cropped Screen Box - Hides outer white padding */}
                <div className="rounded-[1.8rem] overflow-hidden bg-slate-900 relative flex items-center justify-center">
                  <img
                    src="https://lh3.googleusercontent.com/d/1fgkWaJfuBA5IHaf-fl7SVHMxOgkFMGs0"
                    alt="Akshay B2B Solutions Mobile App"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://drive.google.com/uc?export=view&id=1fgkWaJfuBA5IHaf-fl7SVHMxOgkFMGs0';
                    }}
                    className="w-full h-auto max-h-[480px] object-cover scale-[1.14] transform transition-transform duration-300 group-hover:scale-[1.18]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
