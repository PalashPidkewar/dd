"use client";
import React from "react";
import { GiRoad } from "react-icons/gi"; // Highway
import { CiTimer } from "react-icons/ci"; // 28 years
import { GrMapLocation } from "react-icons/gr"; // 70+ locations
import { AiOutlineStock } from "react-icons/ai"; // 4000+ crores turnover
import { IoIosPeople } from "react-icons/io"; // 6000+ employees
import { SiToll, SiSitepoint } from "react-icons/si"; // 45+ toll plaza
import { motion } from "framer-motion";

// ✅ Framer Motion Variants
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const simpleFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Pathgroup = () => {
  const cardsData = [
    { title: "31%", description: "Market Share of OMT Highway Project in India" },
    { title: "~6500", description: "Lane Kilometers Highways" },
    { title: "28+", description: "Wayside Amenities Project" },
    { title: "4 ROB", description: "Rail Over Bridge" },
    { title: "3+", description: "Multistorey Parkings" },
    { title: "45+", description: "Toll Plaza" },
    { title: "6 HAM", description: "Hybrid Annuity Model" },
    { title: "6 BOT", description: "Build Operate Transfer" },
    { title: "31 TMS", description: "Toll Management System" },
    { title: "7 OMT", description: "Operate Maintain Transfer" },
    { title: "15 EPC", description: "Engineering Procurement Construction" },
    { title: "1 MMLP", description: "Path Logistic Bangalore" },
  ];

  return (
    <>
      {/* ================= PATH GROUP SECTION ================= */}
      <section className="w-full bg-white px-6 py-4 lg:py-12 md:px-16 lg:px-24">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="flex items-center gap-2 text-blue-500 text-4xl font-bold tracking-wider">
            <SiSitepoint className="text-orange-500 text-4xl lg:text-5xl" />
            <span>
              P<span className="text-2xl">ath Group</span>
              <span className="text-orange-500">..</span>
            </span>
          </h2>
        
        </div>

        {/* Description + Video */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-12">
          {/* Left Content */}
          <div className="md:w-3/5 w-full space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Path Group is one of India’s leading infrastructure and industrial companies.
              The Group works in key areas such as highway and road construction, Path Recharge
              wayside amenities, and Path Logistics Bengaluru.
            </p>
            <p>
              In the manufacturing sector, Path Group produces metal crash barriers, GFRP rebars,
              and thermoplastic road marking materials — supporting safe, sustainable, and modern
              infrastructure across India.
            </p>
            <p>
              The company also operates the Majhi Mumbai Terminal and has a presence in sports
              through its association with the Indian Street Premier League (ISPL).
            </p>
          </div>

          {/* Right Video */}
          <div className="md:w-2/5 w-full">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <video
                className="w-full h-full"
                src="/Video/pathgroupvideoss.mp4"
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

        {/* Stats Cards */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="rounded-xl bg-gray-50 p-8 shadow-inner"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: GiRoad, title: "17+ State", description: "Presence Across India" },
              { icon: CiTimer, title: "28+ Years", description: "Industry Experience" },
              { icon: GrMapLocation, title: "70+ Locations", description: "Project Footprint" },
              { icon: AiOutlineStock, title: "4000+ Cr.", description: "Annual Group Turnover" },
              { icon: IoIosPeople, title: "6000+ Emp.", description: "Dedicated Workforce" },
              { icon: SiToll, title: "45+ Toll", description: "Toll Plaza Operations" },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={simpleFadeUp}
                className="p-3 text-center transition-all duration-300 hover:bg-white rounded-lg group"
              >
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
                  <card.icon className="text-2xl text-blue-600 group-hover:text-white" />
                </div>
                <h4 className="font-extrabold text-xl text-gray-800 mb-1">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= OUR DELIVERY SECTION ================= */}
      <section className="w-full bg-white px-6 py-8 md:px-16 lg:px-24 space-y-12">
        {/* Heading */}
        <div>
        <h1 className="text-gray-600 text-3xl md:text-4xl font-bold mb-6">
            Delivery Excellence: <span className="text-orange-500 font-normal">Our Proven Track Record :</span>
          </h1>
          
          <p className="text-sm sm:text-base text-gray-400">
            Path India Ltd has established a strong presence in India’s infrastructure sector with
            a market share of 35% in OMT Highway Projects. With a delivery of over 6,500 lane
            kilometers of highways, the company has demonstrated excellence across multiple domains
            including Hybrid Annuity{" "}
            <span className="text-orange-400">(HAM)</span>, Build Operate Transfer{" "}
            <span className="text-orange-400">(BOT)</span>, Operate Maintain Transfer{" "}
            <span className="text-orange-400">(OMT)</span>, Engineering Procurement Construction{" "}
            <span className="text-orange-400">(EPC)</span> and Toll Management Systems{" "}
            <span className="text-orange-400">(TMS)</span>.
          </p>
        </div>

        {/* Delivery Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center pt-4">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="group border border-gray-300 rounded-xl p-4 bg-white shadow-sm transition-transform transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              <h3 className="flex items-center justify-center gap-2 font-bold text-lg text-gray-900 group-hover:text-orange-500 mb-2">
                <img
                  src="/aboutimg/Logo Element (Arrow).webp"
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

export default Pathgroup;

