import LocationToggle from "../locationtoggle/page";
export default function Homefullscreenvideo() {
  return (<>
    
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Fullscreen Video */}
      <video
        src="/Video/pathlogistic.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />

      {/* Dark overlay for better text visibility */}
      
 

    </div>
     <div className="w-full h-[3px] bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500 rounded-full" />
   <LocationToggle/>
      </>
  );
}
