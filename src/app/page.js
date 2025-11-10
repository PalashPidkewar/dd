import Image from "next/image";
import Solution from "./component/Solution/page";
import SustainabilitySection from "./component/Sustainability/page";
import AboutSection from "./component/About/page";
import Homefullscreenvideo from "./component/Homefillscreenvideo/page";
import Pathgroup from "./component/PathGroup/page";
import Pathmmlp from "./component/MMLP/page";
import GradientUnderline from "./component/UnderLine/page";

export default function Home() {
  return (
    <>
    {/* <PathHome/> */}
    <Homefullscreenvideo/>
    <AboutSection/>
    < GradientUnderline />
    <Pathgroup/>
     < GradientUnderline />
   <Pathmmlp/>
    < GradientUnderline />
    <Solution/>
     < GradientUnderline />
    <SustainabilitySection/>
    </>
  );
}
