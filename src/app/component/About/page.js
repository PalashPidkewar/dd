"use client";
import React from "react";
import { LuMapPinned } from "react-icons/lu";
import { CiTimer } from "react-icons/ci";
import { BsTrainLightrailFront } from "react-icons/bs";
import { MdOutlineWarehouse } from "react-icons/md";
import { GiBlockHouse } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
import { SiSitepoint } from "react-icons/si";
import { MdOutlineConnectingAirports } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
const AboutSection = () => {
  const cardsData = [
    { title: "6 Railway Sidings", description: "In the facility" },
    { title: "3.5 kms", description: "Dodbele Railway Station" },
    { title: "NH 648  NH 48", description: "Connected to Multi-lane National Highways" },
    { title: "4-lane", description: "Connected Satellite Town Ring Road (STRR) in the south-west" },
    { title: "~339 kms", description: "Mangalore Port" },
    { title: "55 kms", description: "Kempegowda International Airport, Bengaluru" },
  ];
  return (<>
    <section className="w-full bg-white px-6 py-6 lg:py-12 md:px-16 lg:px-24">
      {/* Section 1 - Heading */}
      <div className="mb-2 lg:mb-10">
        <h2 className="flex items-center gap-2 text-blue-500 text-4xl font-bold tracking-wider">
          <SiSitepoint className="text-orange-500 text-4xl lg:text-5xl" />
          <span>
            A<span className="text-2xl">bout Us</span>
            <span className="text-orange-500">..</span>
          </span>
         
        </h2>

      </div>

      {/* Section 2 - Content */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-12">
        {/* Left Side (60%) */}
        <div className="md:w-3/5 w-full space-y-5  text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            Path Bangalore Logistics is a logistics and supply chain service provider based in Bangalore, Karnataka, offering efficient and reliable transportation, warehousing, and distribution solutions. The company typically focuses on providing end-to-end logistics management for businesses across sectors such as e-commerce, manufacturing, retail, and FMCG.
          </p>

          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <MdOutlineFeaturedPlayList className="text-2xl text-orange-400" />
            Key Features:
          </h3>

          <ul className="list-disc list-inside space-y-2 ">
            <li>
              It is developed as a major Multimodal Logistics Park (MMLP) with
              road + rail + warehousing integration.
            </li>
            <li>
              The hub is located near Bengaluru (in Dobbaspet etc) and claims
              strategic connectivity (rail sidings, national highways) to
              regional supply chains.
            </li>
            <li>
              It draws upon national policy context (“PM Gati Shakti”, logistics
              efficiency) to justify scale and relevance.
            </li>
          </ul>
        </div>

        {/* Right Side (40%) - YouTube Video */}
        <div className="md:w-2/5 w-full">
          <div className="aspect-w-16 aspect-h-18 rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full"
              src="/Video/pathlogistic.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Section 3 - Cards with React Icons */}
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {/* Card 1 */}
        <div className="border border-gray-300 rounded-lg p-6 text-center">
          <LuMapPinned className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h4 className="font-semibold text-lg mb-2 hover:text-orange-400">Location</h4>
          <p className="text-gray-600 text-sm">
            Strategically located for easy access to highways and rail networks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 rounded-lg p-6 text-center">
          <CiTimer className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h4 className="font-semibold text-lg mb-2 hover:text-orange-400">Timely Delivery</h4>
          <p className="text-gray-600 text-sm">
            Ensuring on-time deliveries with reliable transport and planning.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 rounded-lg p-6 text-center">
          <BsTrainLightrailFront className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h4 className="font-semibold text-lg mb-2 hover:text-orange-400">Rail Connectivity</h4>
          <p className="text-gray-600 text-sm">
            Integrated rail network for faster and efficient logistics.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-300 rounded-lg p-6 text-center">
          <MdOutlineWarehouse className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h4 className="font-semibold text-lg mb-2 hover:text-orange-400">Warehousing</h4>
          <p className="text-gray-600 text-sm">Space million sq. ft. ~5.2</p>
        </div>

        {/* Card 5 */}
        <div className="border border-gray-300 rounded-lg p-6 text-center">
          <GiBlockHouse className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h4 className="font-semibold text-lg mb-2 hover:text-orange-400">Commercial Space</h4>
          <p className="text-gray-600 text-sm">Million sq. ft. ~1.76</p>
        </div>

        {/* Card 6 */}
        <div className="border border-gray-300 rounded-lg p-6 text-center">
          <CiShop className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h4 className="font-semibold text-lg mb-2 hover:text-orange-400">Customs Bonded</h4>
          <p className="text-gray-600 text-sm">Area million sq. ft 0.78</p>
        </div>
      </div>



    </section>
    <br></br>
    <section className="w-full bg-white px-6 py-0 md:px-16 lg:px-24 space-y-1 pb-2">
      {/* Section 1 - Left 65%, Right 35% */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left */}
        <div className="md:w-2/3 w-full space-y-4">
        <h2 className="flex items-center gap-3 text-blue-700 font-extrabold text-base sm:text-xl md:text-2xl tracking-tight">
    {/* Icon for Speed/Flow (Lightning Bolt) */}
    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
    Instantly Connected: <span className="text-orange-600">Seamless Flow</span>
</h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg pt-1">
            The facility is located in the northwest quadrant of Bengaluru, it is the only one of its kind in the larger area, with no similar facilities in the southwest or northeast quadrants. Strategically situated adjacent to the STRR (NH648), PATH Logicity offers convenient access and serves as a vital resource for both the northeast and southwest regions. It also has seamless road connectivity to multiple national highways and excellent rail connectivity with the Dodbele Railway Station being just 3.5 kilometres away.
          </p>
        </div>
        {/* Right - Image with hover effect */}
        <div className="md:w-1/3 w-full">
          <div className="overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/aboutimg/345.webp" // replace with your image path
              alt="Logistics Facility"
              className="w-full h-60 object-cover transform transition duration-500 group-hover:brightness-110"
            />
          </div>
        </div>

      </div>

      {/* Section 2 - Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 text-center pt-5">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="group border border-gray-300 rounded-xl p-4 bg-white shadow-sm transition-transform transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
          >
            <h3 className="flex items-center justify-center gap-2 font-bold text-lg text-gray-900 group-hover:text-orange-500 mb-2">
              <img
                src="/aboutimg/Logo Element (Arrow).webp" // replace with your actual image path
                alt="icon"
                className="w-5 h-5 object-contain"
              />
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm">{card.description}</p>
          </div>

        ))}
      </div>


    </section>

  </>

  );
};

export default AboutSection;
