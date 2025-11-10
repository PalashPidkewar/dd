// "use client";
// import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import { QRCode } from "react-qrcode-logo";

// const Footer = () => {
//   return (
//     <footer className="relative text-white px-6 md:px-16 py-8 bg-gradient-to-r from-blue-200 to-blue-500">
//       <div className="relative z-10">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left Side - Logo + Description + Social + QR */}
//           <div className="lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-[15px] mt-[-45px]">

//             <div className="w-42 h-42 relative mx-auto lg:mx-0">
//               <img
//                 src="/Footerimg/backgroundlogoremove.png"
//                 alt="Logo"
//                 className="object-contain w-full h-full"
//               />
//             </div>

//             {/* Description */}
//             <p className="text-white">
//               Path Logistic, Bangalore – Delivering reliable, timely, and efficient logistics solutions tailored to your business needs.
//             </p>

//             {/* Social Icons + QR */}
//             <div className="flex items-center gap-6 mt-4">
//               {/* Social Icons */}
//               <div className="flex gap-4 text-2xl">
//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="transition-colors"
//                   style={{ color: "#E1306C" }} // Instagram pink
//                 >
//                   <FaInstagram />
//                 </a>
//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="transition-colors"
//                   style={{ color: "#1877F2" }} // Facebook blue
//                 >
//                   <FaFacebookF />
//                 </a>
//                 <a
//                   href="https://youtube.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="transition-colors"
//                   style={{ color: "#FF0000" }} // YouTube red
//                 >
//                   <FaYoutube />
//                 </a>
//               </div>



//               {/* QR Code */}
//               <div className="flex flex-col items-center mt-4">
//                 <div className="w-20 h-20">
//                   <QRCode
//                     value="https://www.pathltd.com/"
//                     size={70}
//                     bgColor="transparent" // better than #00000000
//                     fgColor="#ffffff"
//                   />
//                 </div>
//                 <p className="text-blue-600 text-sm font-medium mt-2 pl-2 text-center">
//                   <a
//                     href="https://www.pathltd.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-red-400"
//                   >
//                     Scan & Click
//                   </a>
//                 </p>

//               </div>

//             </div>
//           </div>

//           {/* Right Side - Contact + Maps + Address */}
//           <div className="flex flex-col md:flex-row justify-between gap-12 lg:w-[65%] w-full">
//             {/* Contact */}
//             <div className="md:w-1/3 space-y-2">
//               <h3 className="font-bold text-lg">Contact:</h3>
//               <p className="flex items-center gap-2">
//                 <FaEnvelope className="text-green-300" /> mmlp.blr@pathltd.com
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaPhoneAlt className="text-orange-300" /> 9899880388
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaPhoneAlt className="text-orange-300" /> +91-7324-350100
//               </p>
//             </div>

//             {/* Maps + Address */}
//             <div className="flex md:w-2/3 gap-6 flex-col md:flex-row">
//               {/* Maps Section */}
// <div className="flex-1 flex flex-col gap-2">
//   <h3 className="font-bold text-lg">Map:</h3>
//   <div className="flex gap-4">
//     {/* Map 1 */}
//     <div className="flex-1 h-35 rounded-lg overflow-hidden flex flex-col">
//       <iframe
//         title="Path Logistics Bangalore"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.123456!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11cf3456789%3A0x123456789abcdef!2sPath+Logistics+Bangalore!5e0!3m2!1sen!2sin!4v1696049600000!5m2!1sen!2sin"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//       <div className="text-center text-sm font-medium text-blue-700 mt-1">
//         Path Logistics Bangalore
//       </div>
//     </div>

//     {/* Map 2 */}
//     <div className="flex-1 h-35  rounded-lg overflow-hidden flex flex-col">
//       <iframe
//         title="Path India Ltd. Mhow"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.123456!2d75.7587!3d22.5663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f9cd2014b943%3A0xe2f161cf7fdf846!2sPATH+India+Ltd.!5e0!3m2!1sen!2sin!4v1696049700000!5m2!1sen!2sin"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//       <div className="text-center text-sm font-medium text-blue-700 mt-1">
//         Path India Ltd. Mhow
//       </div>
//     </div>
//   </div>

//               </div>

//               {/* Address */}
//               <div className="flex-1 space-y-1 pl-12">
//                 <h3 className="font-bold text-lg">Address:</h3>
//                 <p className="flex items-center gap-2">
//                   76, Mall Road, Mhow
//                 </p>
//                 <p className="flex items-center gap-2">Indore (M.P.) - 453441</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom text */}
//         <div className="mt-6 text-center text-gray-100 text-sm">
//           &copy; {new Date().getFullYear()} Path Ltd. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [showMap, setShowMap] = useState(false);
  const websiteURL = "https://www.pathltd.com/";

  return (
    <footer className="bg-gradient-to-r from-blue-300 via-green-400 to-blue-300 text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-20 pb-3">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="relative w-auto h-[50px] sm:h-[70px] md:h-[50px] mb-2 sm:mb-3">
            <Image
              src="/Footerimg/logoback.png"
              alt="Logo"
              width={124}
              height={40}
              className="object-contain h-full w-auto"
              priority
            />
          </div>

          <p className="text-xs sm:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 max-w-md font-normal leading-relaxed px-2 sm:px-0">
            Path Logistic, Bangalore – Delivering reliable, timely, and efficient logistics
            solutions tailored to your business needs.
          </p>

          {/* SOCIAL LINKS */}
          <div className="lg:pt-20 flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center lg:justify-start text-white text-lg sm:text-xl">
            <a
              href="https://www.facebook.com/pathltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/pathrecharge/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/path-recharge/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedinIn />
            </a>
            <a href="tel:7489828437" className="hover:scale-110 transition-transform">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/@PathRecharge"
              className="hover:scale-110 transition-transform"
            >
              <FaYoutube />
            </a>

            {/* QR Code */}
            <a
              href={websiteURL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <div className="relative w-max -mt-6 md:-mt-7 lg:-mt-8">
                <QRCodeCanvas
                  value={websiteURL}
                  size={75}
                  bgColor="transparent"
                  fgColor="#000000"
                  includeMargin
                  level="H"
                  className="sm:w-[75px] sm:h-[75px] md:w-[80px] md:h-[80px] lg:w-[85px] lg:h-[85px]"
                />
                <span className="absolute inset-0 pt-20 md:pt-22 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-blue-500 pointer-events-none">
                  SCAN & CLICK
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[65%] flex flex-col gap-6 sm:gap-8 md:gap-10">
          {/* CONTACT INFO */}
          <div className="sm:flex sm:flex-wrap sm:justify-center sm:gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 text-xs sm:text-sm text-center sm:text-left">
            <div className="sm:w-[45%] md:w-auto">
              <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">
                CALL SUPPORT
              </h4>
              <p>+91-7324-350100</p>
            </div>

            <div className="sm:w-[45%] md:w-auto">
              <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">
                SALES SUPPORT
              </h4>
              <p>9899880388</p>
              <p>8827753128</p>
            </div>

            <div className="sm:w-[45%] md:w-auto">
              <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">
                EMAIL
              </h4>
              <p>mmlp.blr@pathltd.com</p>
              <p>anjul@pathltd.com</p>
            </div>


            <div className="sm:w-[45%] md:w-auto">
              <h4 className="font-semibold mb-2 text-sm md:text-base lg:text-lg font-oswald">
                CORPORATE OFFICE
              </h4>
              <p className="flex items-start gap-2 justify-center md:justify-start pr-4 md:pr-8 lg:pr-10">
                <FaMapMarkerAlt className="text-orange-500 text-base md:text-lg flex-shrink-0 mt-0.5" />
                <span>76, Mall Road, Mhow Indore (M.P.) India – 453441</span>
              </p>
                    <Link href="/component/Login" className="  text-bold pl-6  inline-flex items-center mt-3 px-4 py-2">
      <span>Login</span>
      <CiLogin className="ml-2 text-red-700" />
    </Link>
            </div>
          </div>

          {/* MAP SECTION */}
          <div className="flex-1 flex flex-col gap-2 -mt-5">
            <h3 className="font-bold text-lg flex items-center justify-between sm:justify-start">
              <span>Map:</span>
              {/* Mobile toggle button */}
              <button
                className="sm:hidden bg-white/20 text-white px-3 py-1 rounded-md text-xs hover:bg-white/30 transition"
                onClick={() => setShowMap(!showMap)}
              >
                {showMap ? "Hide Maps" : "View Maps"}
              </button>
            </h3>

            {/* Maps container */}
            <div className={`${showMap ? "block" : "hidden"} sm:block`}>
              {/* Horizontal scroll for mobile */}
              <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide">
                {/* Map 1 */}
                {/* Map 1 */}
                <div className="min-w-[250px] sm:min-w-0 sm:flex-1 h-40 md:h-48 lg:h-40 rounded-lg overflow-hidden flex flex-col flex-shrink-0">
                  <iframe
                    title="Path Logistics Bangalore"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.123456!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11cf3456789%3A0x123456789abcdef!2sPath+Logistics+Bangalore!5e0!3m2!1sen!2sin!4v1696049600000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="text-center text-sm font-medium text-white mt-1">
                    Path Logistics Bangalore
                  </div>
                </div>

                {/* Map 2 - Hidden on Mobile */}
                <div className="hidden sm:flex sm:flex-1 h-40 md:h-48 lg:h-40 rounded-lg overflow-hidden flex-col flex-shrink-0">
                  <iframe
                    title="Path India Ltd. Mhow"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.123456!2d75.7587!3d22.5663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f9cd2014b943%3A0xe2f161cf7fdf846!2sPATH+India+Ltd.!5e0!3m2!1sen!2sin!4v1696049700000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="text-center text-sm font-medium text-white mt-1">
                    Path India Ltd. Mhow
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="relative mt-4 sm:mt-6 lg:mt-8">
        <div className="border-t border-white/40 pt-3 sm:pt-4 text-center text-xs sm:text-sm">
          © 2025 <span className="font-semibold">Path Recharge</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
                                                                                                                                                                                                                                                                                                                        