"use client";
import React, { useState, useEffect } from "react";
import { SiSitepoint } from "react-icons/si";
import Image from "next/image";

const logos = [
  { img: "/MMLP/authorozition1.png", name: "RVNLLogo" },
  { img: "/MMLP/authorozition2.png", name: "KIADBLogo" },
  { img: "/MMLP/authorozition4.png", name: "NHLMLLogo" },
   { img: "/MMLP/morthlogo.png", name: "Morthlogo" }

];

const Pathmmlp = () => {
  const images = [
    { id: 2, src: "/MMLP/map.png", name: "image2.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full bg-white px-6 py-3 md:px-16 lg:px-24">
        {/* Section 1 - Heading */}
        <div className="mb-10">
          <h2 className="flex items-center gap-2 text-blue-500 font-bold tracking-wider">
            {/* Icon */}
            <SiSitepoint className="text-orange-500 text-5xl" />

            {/* Large screen text */}
            <span className="hidden lg:inline text-4xl">
              M
              <span className="text-2xl">
               MLP <span className="text-gray-700 text-base"> The Future of Indian Logistics is here:</span> 
              </span>
              <span className="text-orange-500">..</span>
            </span>

            {/* Small screen text */}
            <span className="inline lg:hidden text-3xl">
              <span>
                M<span className="text-2xl">MLP</span>
                <span className="text-orange-500">..</span>
              </span>
            </span>
          </h2>
        </div>

        {/* Section 2 - Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-12">
          {/* Left Side */}
          <div className="md:w-3/5 w-full space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Multi-Modal Logistics Parks <span title="text-orange-400">(MMLPs) </span> act as strategic transportation hubs that integrate various modes of transport—such as road, rail, and air—to streamline freight movement and significantly boost logistics efficiency.
            </p>
            <p>
              Aligned with the Government of India's vision under the <span className="font-bold">PM Gati Shakti</span> initiative, PATH Logicity is a cornerstone in the development of 35 Multimodal Logistics Parks <span className="text-orange-300">(MMLPs)</span> nationwide. With a budgeted investment of ₹46,000 Crores, these MMLPs aim to revolutionize the logistics landscape, enhancing efficiency and reducing costs across the supply chain.
            </p>
            <p>
              Equipped with state-of-the-art warehousing facilities, cold storage units, and mechanized material handling systems.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-2/5 w-full">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                // src="/MMLP/parkimg.webp"
                src="/CompanyLogo/bannerpath1.png"
                alt="Path Bangalore Logistics"
              />
            </div>
          </div>
        </div>

        {/* Section 3 - Cards */}
        <div className="border border-gray-300 rounded-lg overflow-hidden flex flex-col md:flex-row flex-wrap">
          {/* Card 1 */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-300 p-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/aboutimg/Logo Element (Arrow).webp"
                  alt="icon"
                  className="w-5 h-5 object-contain"
                />
                <h4 className="font-semibold text-lg text-blue-500 hover:text-orange-400">35 MMLPs</h4>
              </div>
              <p className="text-sm sm:text-base">to be built under PM Gati Shakti Master Plan on PPP model</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-300 p-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/aboutimg/Logo Element (Arrow).webp"
                  alt="icon"
                  className="w-5 h-5 object-contain"
                />
                <h4 className="font-semibold text-lg text-blue-500 hover:text-orange-400">46,000 Crores</h4>
              </div>
              <p className="text-sm sm:text-base">budgeted investment for MMLPs across the country</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-300 p-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/aboutimg/Logo Element (Arrow).webp"
                  alt="icon"
                  className="w-5 h-5 object-contain"
                />
                <h4 className="font-semibold text-lg text-blue-500 hover:text-orange-400">Infrastructure</h4>
              </div>
              <p className="text-sm sm:text-base">Bengaluru is the largest amongst the MMLPs being built currently</p>
            </div>
          </div>
        </div>
      </section>

      <br />

   {/* Images and Logos Side by Side */}
<div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-6 px-4 mb-5">

  {/* Left side - Images Card */}
  <div className="flex flex-col gap-4 border border-gray-200 rounded-lg p-4 shadow-sm w-full max-w-md mx-auto md:mx-0">
    {images.map((img) => (
      <div key={img.id} className="flex flex-col items-center">
        <Image
          src={img.src}
          alt={`Image ${img.id}`}
          width={400}
          height={400}
          className="object-cover rounded-lg w-full h-auto"
        />
        <p className="text-gray-600 text-base md:text-lg font-semibold mt-2 text-center">
          Path Logistic Map <span className="text-orange-300">footprint</span>
        </p>
      </div>
    ))}
  </div>

  {/* Right side - Logos Carousel Card */}
  <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 shadow-sm w-full max-w-md mx-auto md:mx-0 mt-6 md:mt-0">
    <div className="relative w-48 h-48 md:w-64 md:h-57">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.img}
          alt={logo.name}
          className={`
            absolute inset-0 w-full h-full object-contain
            transition-opacity duration-1000
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  <p className="text-gray-600 text-base md:text-lg font-semibold mt-4 text-center">
  Official Authorization   <span className="text-xs md:text-xs align-super">@</span>
  <span className="text-orange-300 text-xs md:text-sm"> RVNL, NHLML, KIADB ,Morth</span>
</p>

  </div>

</div>



    </>
  );
};

export default Pathmmlp;
