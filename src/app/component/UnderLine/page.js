"use client";
import React from "react";
import Image from "next/image";

const GradientUnderline = () => {
  return (
    <div className="relative flex items-center justify-between py-8 w-full">
      {/* Left Gradient Line */}
      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-[3px] rounded-full">
        {/* Left side */}
        <div className="absolute left-0 w-[45%] h-full bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500 rounded-full" />
        {/* Right side */}
        <div className="absolute right-0 w-[45%] h-full bg-gradient-to-r from-green-500 via-yellow-400 to-blue-500 rounded-full" />
      </div>

      {/* Logos on top */}
      <div className="flex w-full items-center justify-between relative z-10">
        {/* Left Small Logo */}
        <Image
          src="/CompanyLogo/smalllogo.webp"
          alt="Left Logo"
          width={30}
          height={30}
          className="bg-white"
        />

        {/* Center Logo with Gradient Arrows */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <div className="hidden lg:flex absolute left-[-34px] top-1/2 transform -translate-y-1/2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />   {/* Blue */}
                  <stop offset="50%" stopColor="#facc15" />  {/* Yellow */}
                  <stop offset="100%" stopColor="#10b981" /> {/* Green */}
                </linearGradient>
              </defs>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>

          {/* Center Main Logo */}
          <Image
            src="/Footerimg/logoback.png"
            alt="Main Company Logo"
            width={90}
            height={90}
            className="bg-white p-2 rounded-full shadow-lg"
          />

          {/* Right Arrow */}
          <div className="hidden lg:flex absolute right-[-34px] top-1/2 transform -translate-y-1/2 rotate-180">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
        </div>

        {/* Right Small Logo */}
        <Image
          src="/CompanyLogo/smalllogo.webp"
          alt="Right Logo"
          width={30}
          height={30}
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default GradientUnderline;
