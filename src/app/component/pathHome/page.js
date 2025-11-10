import Allcomponets from "../AllComponets/page";
export default function Home() {
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
   {/* <div className="absolute left-4 -bottom-5 text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500 drop-shadow-lg">
        PathLogistic Bangalore
      </div> */}
      <Allcomponets/>
      </>
  );
}
