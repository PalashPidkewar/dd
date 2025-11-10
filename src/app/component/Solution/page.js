// "use client";
// // pages/index.js
// import Image from "next/image";
// import { FaBuilding, FaUsers, FaBook, FaTruck, FaUtensils, FaBaby, FaGasPump } from "react-icons/fa";
// import { motion } from "framer-motion";
// export default function Home() {
//     const serviceCards = [
//         {
//             icon: <FaBuilding className="text-3xl text-blue-600" />,
//             title: "Commercial Spaces (Office and Retail)",
//         },
//         {
//             icon: <FaUsers className="text-3xl text-green-600" />,
//             title: "Employees Accommodation",
//         },
//         {
//             icon: <FaBook className="text-3xl text-yellow-600" />,
//             title: "Skill Development Centre",
//         },
//         {
//             icon: <FaTruck className="text-3xl text-red-600" />,
//             title: "Trucker Amenities",
//         },
//         {
//             icon: <FaUtensils className="text-3xl text-purple-600" />,
//             title: "Mess / Canteen",
//         },
//         {
//             icon: <FaBaby className="text-3xl text-pink-600" />,
//             title: "Dispensary / Crèche",
//         },
//         {
//             icon: <FaUtensils className="text-3xl text-orange-600" />,
//             title: "Restaurants and Food Courts",
//         },
//         {
//             icon: <FaGasPump className="text-3xl text-gray-600" />,
//             title: "Fuel Stations",
//         },
//     ];


//     const solutioncardicons = [
//         { icon: "/Solutionlogo/19.webp", title: "Bonded Warehousing" },
//         { icon: "/Solutionlogo/20.webp", title: "Designated Yards" },
//         { icon: "/Solutionlogo/21.webp", title: "Warehousing- Standard" },
//         { icon: "/Solutionlogo/22.webp", title: "Inter-modal Area" },
//         { icon: "/Solutionlogo/23.webp", title: "Cold Storage" },
//         { icon: "/Solutionlogo/24.webp", title: "Vehicle parking and Service area" },
//     ];

//     return (<>
//         <div className="min-h-screen bg-gray-100">
//             {/* Section 1 - Image */}
//             <div className="relative w-full h-[50vh]">
//                 <Image
//                     src="/CompanyLogo/logistic.webp"
//                     alt="Banner Image"
//                     fill
//                     className="object-cover"
//                 />
//             </div>

//             {/* Section 2 - Heading */}
//             <div className="flex items-center justify-center mt-8 px-4 space-x-3">
//                 {/* Logo */}
//                 <Image
//                     src="/CompanyLogo/smalllogo.webp"
//                     alt="Company Logo"
//                     width={40}
//                     height={40}
//                 />

//                 {/* Heading */}
//                 <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
//                     Tailoring Services to Suit Business Needs..
//                 </h1>
//             </div>

//             {/* Optional underline */}
//             <div className="w-20 h-[2px] bg-orange-300 mx-auto mt-2"></div>



//             {/* Section 3 - Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 md:px-16">
//                 {[
//                     {
//                         title: "Grade-A Facility",
//                         description:
//                             "Advanced infrastructure, security systems, and efficient handling of equipment to ensure the highest standard of logistics.",
//                     },
//                     {
//                         title: "Built-to-suit Model",
//                         description:
//                             "Customizable warehouse and logistics spaces tailored to specific requirements of businesses, providing smooth operations.",
//                     },
//                     {
//                         title: "Multi-user Model",
//                         description:
//                             "Providing shared facilities for multiple users, optimising space utilisation, and reducing costs for small to medium enterprises (SMEs).",
//                     },
//                     {
//                         title: "Custom Office and Exim Clearance",
//                         description:
//                             "A value-added service along with warehousing management, reducing port waiting times and lowering export freight costs and transit times.",
//                     },
//                 ].map((card, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ y: 20, opacity: 0 }}
//                         whileInView={{ y: 0, opacity: 1 }}
//                         viewport={{ once: true }}
//                         whileHover={{
//                             backgroundColor: "#1D4ED8", // Tailwind blue-700
//                             color: "#FFFFFF", // ye parent text color override karega
//                             y: -5,
//                             transition: { duration: 0.3 },
//                         }}
//                         className="bg-white p-6 rounded-lg shadow cursor-pointer"
//                     >
//                         <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
//                         <p className="">{card.description}</p> {/* text-gray-700 remove kar diya */}
//                     </motion.div>

//                 ))}
//             </div>

//             {/* Section 4 - Integrated Facility Solutions */}
//             <div className="flex items-center justify-center mt-16 px-4 gap-3">
//                 {/* Logo */}
//                 <Image
//                     src="/CompanyLogo/smalllogo.webp" // Replace with your logo path
//                     alt="Company Logo"
//                     width={40} // adjust size
//                     height={40}
//                 />
//                 {/* Heading */}
//                 <h2 className="text-2xl md:text-3xl font-bold text-blue-500">
//                     Integrated Facility Solutions
//                 </h2>
//             </div>
//             <div className="w-20 h-[2px] bg-orange-300 mx-auto mt-2"></div>


//             {/* Facility Cards with Logo Above and Transparent Background */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 mt-8 px-4 md:px-16">
//                 {serviceCards.map((card, index) => {
//                     const isLastColumn = (index + 1) % 4 === 0; // Last column for lg screens
//                     const isLastRow = index >= serviceCards.length - (serviceCards.length % 4 || 4);

//                     return (
//                         <div
//                             key={index}
//                             className={`
//           flex flex-col items-center text-center p-6
//           border-gray-300
//           ${!isLastColumn ? "border-r" : ""}
//           ${!isLastRow ? "border-b" : ""}
//           bg-transparent
//         `}
//                         >
//                             {/* Logo/Icon */}
//                             <div className="mb-2">{card.icon}</div>
//                             {/* Text below icon */}
//                             <p className="text-gray-700 font-medium">{card.title}</p>
//                         </div>
//                     );
//                 })}
//             </div>

//         </div>

//         <div className="min-h-screen bg-gray-100  pt-10">
//             {/* Section 1 - Image */}
//             <div className="relative w-full h-[50vh]">
//                 <Image
//                     src="/CompanyLogo/container1.jpg"
//                     alt="Banner Image"
//                     fill
//                     className="object-cover"
//                 />
//             </div>

//             {/* Section 2 - Heading */}
//             <div className="flex items-center justify-center mt-8 px-4 space-x-3">
//                 {/* Logo */}
//                 <Image
//                     src="/CompanyLogo/smalllogo.webp"
//                     alt="Company Logo"
//                     width={40}
//                     height={40}
//                 />

//                 {/* Heading */}
//                 <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
//                     Enabling Hassle-free Operations for Collective Growth..
//                 </h1>
//             </div>

//             {/* Optional underline */}
//             <div className="w-20 h-[2px] bg-orange-300 mx-auto mt-2"></div>



//             {/* Section 3 - Cards */}
//             <div className="overflow-x-auto px-4 md:px-16 mt-8">
//                 <div className="flex flex-wrap md:flex-nowrap gap-4">
//                     {[
//                         {
//                             title: "Grade-A Facility",
//                             description:
//                                 "PATH Logicity, situated in Dobbaspet, is poised to significantly reduce traffic congestion by decentralising industrial activities between Nelamangala and Tumakuru. Leveraging major transport corridors and infrastructure projects, the facility will ensure improved traffic flow and reduce pressure on urban centres. It will help in the ease of traffic handling, facilitating smoother logistics operations, streamlining supply chains and reducing transportation logistics costs for businesses.",
//                         },
//                     ].map((card, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ y: 20, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             viewport={{ once: true }}
//                             whileHover={{
//                                 backgroundColor: "#1D4ED8",
//                                 color: "#FFFFFF",
//                                 y: -5,
//                                 transition: { duration: 0.3 },
//                             }}
//                             className="w-full md:min-w-[300px] bg-white p-6 rounded-lg shadow cursor-pointer flex-shrink-0"
//                         >
//                             <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
//                             <p>{card.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>


//             {/* Section 4 - Integrated Facility Solutions */}
//             <div className="flex items-center justify-center mt-16 px-4 gap-3">
//                 {/* Logo */}
//                 <Image
//                     src="/CompanyLogo/smalllogo.webp" // Replace with your logo path
//                     alt="Company Logo"
//                     width={40} // adjust size
//                     height={40}
//                 />
//                 {/* Heading */}
//                 <h2 className="text-2xl md:text-3xl font-bold text-blue-500">
//                     Unlock the efficiency of Logistics with Rail Access, Warehousing, and 3PL Solutions
//                 </h2>
//             </div>
//             <div className="w-20 h-[2px] bg-orange-300 mx-auto mt-2"></div>


//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 mt-8 px-4 md:px-16">
//   {solutioncardicons.map((card, index) => {
//     const isLastColumn = (index + 1) % 3 === 0;
//     const isLastRow = index >= solutioncardicons.length - (solutioncardicons.length % 3 || 3);

//     return (
//       <div
//         key={index}
//         className={`
//           flex flex-col items-center text-center p-6
//           ${!isLastColumn ? "border-r border-gray-300" : ""}
//           ${!isLastRow ? "border-b border-gray-300" : ""}
//           bg-transparent
//         `}
//       >
//         {/* Logo/Image */}
//         <div className="mb-2">
//           <Image
//             src={card.icon}
//             alt={card.title}
//             width={60}
//             height={60}
//             className="object-contain"
//           />
//         </div>
//         {/* Text below icon */}
//         <p className="text-gray-700 font-medium">{card.title}</p>
//       </div>
//     );
//   })}
// </div>




//         </div>
//     </>
//     );
// }"use client";
"use client";

import Image from "next/image";
// React Icons
import { FaBuilding, FaUsers, FaBook, FaTruck, FaUtensils, FaBaby, FaGasPump } from "react-icons/fa";
import { SiSitepoint } from "react-icons/si";
import { MdOutlineGrade, MdOutlineLocalOffer, MdOutlineWarehouse } from "react-icons/md";

// Animation
import { motion } from "framer-motion";
import clsx from "clsx";

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SolutionHome() {
  const serviceCards = [
    { icon: <FaBuilding className="text-3xl text-blue-600" />, title: "Commercial Spaces" },
    { icon: <FaUsers className="text-3xl text-green-600" />, title: "Employees Accommodation" },
    { icon: <FaBook className="text-3xl text-yellow-600" />, title: "Skill Development Centre" },
    { icon: <FaTruck className="text-3xl text-red-600" />, title: "Trucker Amenities" },
    { icon: <FaUtensils className="text-3xl text-purple-600" />, title: "Mess / Canteen" },
    { icon: <FaBaby className="text-3xl text-pink-600" />, title: "Dispensary / Crèche" },
    { icon: <FaUtensils className="text-3xl text-orange-600" />, title: "Restaurants and Food Courts" },
    { icon: <FaGasPump className="text-3xl text-gray-600" />, title: "Fuel Stations" },
  ];

  const solutionCards = [
    { icon: "/Solutionlogo/19.webp", title: "Bonded Warehousing" },
    { icon: "/Solutionlogo/20.webp", title: "Designated Yards" },
    { icon: "/Solutionlogo/21.webp", title: "Warehousing- Standard" },
    { icon: "/Solutionlogo/22.webp", title: "Inter-modal Area" },
    { icon: "/Solutionlogo/23.webp", title: "Cold Storage" },
    { icon: "/Solutionlogo/24.webp", title: "Vehicle parking and Service area" },
  ];

  const facilityCards = [
    {
      title: "Grade-A Facility",
      description: "Advanced infrastructure, security systems, and efficient handling of equipment to ensure the highest standard of logistics.",
    },
    {
      title: "Built-to-suit Model",
      description: "Customizable warehouse and logistics spaces tailored to specific requirements of businesses, providing smooth operations.",
    },
    {
      title: "Multi-user Model",
      description: "Providing shared facilities for multiple users, optimizing space utilization, and reducing costs for SMEs.",
    },
    {
      title: "Custom Office & Exim Clearance",
      description: "Value-added service along with warehousing management, reducing port waiting times and lowering export freight costs.",
    },
  ];

  return (
    <div className="bg-white"> {/* Changed background to white for contrast */}

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <Image 
          src="/CompanyLogo/bannerpath.png" 
          alt="Banner" 
          fill 
          className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105" // Added hover effect to image
          quality={100}
          priority // For better performance on hero image
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-2 text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg" // Larger, bolder text, added drop shadow
          >
            <SiSitepoint className="text-orange-400 text-6xl md:text-8xl" />
            <span className="leading-tight">
              T<span className="text-4xl md:text-5xl font-semibold">ailoring Services to Suit Business Needs</span>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/95 mt-4 text-xl md:text-2xl font-light max-w-3xl"
          >
            Ensuring **efficient and integrated logistics solutions** for businesses across India.
          </motion.p>
        </div>
      </div>

      {/* --- */}

      {/* Facility Cards */}
      <div className="py-20 px-4 md:px-16 bg-gray-50"> {/* Added padding and a light gray background */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center flex items-center justify-center gap-3">
          <MdOutlineLocalOffer className="text-4xl text-blue-600" />
          <span className="text-blue-500 ">Our Facility Offerings</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-sm sm:text-base">
          {facilityCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -5, // Subtle lift
                scale: 1.02, // Subtle scale
                boxShadow: "0 15px 30px rgba(17, 24, 39, 0.15)", // Stronger, professional shadow
              }}
              transition={{ type: "spring", stiffness: 300 }} // Spring transition for a lively feel
              className={clsx(
                "group relative bg-white p-6 rounded-xl border border-gray-200 shadow-xl overflow-hidden", // Refined shadow and border
                "transition-all duration-500 cursor-pointer hover:border-blue-500" // Hover effect on border
              )}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 opacity-10 rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-15"></div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- */}

      {/* Service Cards */}
      <div className="py-20 px-4 md:px-16 bg-white">
        
        <div className="flex items-center justify-center text-center space-x-3">
  <Image
    src="/CompanyLogo/smalllogo.webp"
    alt="Company Logo"
    width={40}
    height={40}
    className="object-contain"
  />
  <h2 className="text-2xl md:text-3xl font-bold text-blue-600 leading-tight">
    <span >
Integrated Facility Solutions
    </span>
  </h2>
</div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-12">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }} // Staggered delay
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)", 
                backgroundColor: "#f9fafb" // Very light hover background
              }}
              className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ease-out">
                {card.icon}
              </div>
              <p className="text-center font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- */}

      {/* Solutions Section */}
      <div className="pt-10 pb-20 px-4 md:px-16 bg-gray-50">
        <div className="flex items-center justify-center text-center space-x-3">
  <Image
    src="/CompanyLogo/smalllogo.webp"
    alt="Company Logo"
    width={40}
    height={40}
    className="object-contain"
  />
  <h2 className="text-2xl md:text-3xl font-bold text-blue-600 leading-tight">
    <span >
      Logistics Solutions
    </span>
  </h2>
</div>

        
        {/* Description Card - Enhanced Design */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mx-auto bg-blue-500 p-8 rounded-2xl shadow-2xl text-white max-w-5xl relative overflow-hidden" // Changed to primary brand color
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 to-blue-500/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-extrabold mb-4 flex items-center gap-3 justify-center text-orange-300">
              <MdOutlineGrade className="text-3xl" /> 
              Grade-A Facility Spotlight 
              <MdOutlineGrade className="text-3xl" /> 
            </h1>
            <p className="mt-4 text-blue-100 text-lg font-light leading-relaxed">
              **PATH Logicity**, situated in Dobbaspet, is poised to significantly reduce traffic congestion by decentralising industrial activities between Nelamangala and Tumakuru. Leveraging major transport corridors and infrastructure projects, the facility will ensure **improved traffic flow** and reduce pressure on urban centres. It will help in the ease of traffic handling, facilitating smoother logistics operations, streamlining supply chains and reducing **transportation logistics costs** for businesses.
            </p>
          </div>
        </motion.div>

        {/* Solution Cards - New Grid Layout for Visual Impact */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {solutionCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay for the section
              whileHover={{ 
                y: -5, 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                zIndex: 10 
              }}
              className="flex flex-col items-center justify-start p-4 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 h-full text-center"
            >
              <div className="mb-3 w-16 h-16 flex items-center justify-center">
                <Image src={card.icon} alt={card.title} width={60} height={60} className="object-contain" />
              </div>
              <p className="font-semibold text-gray-700 text-sm mt-auto leading-snug">
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}