import Image from "next/image";
import GradientUnderline from "../UnderLine/page";
import SustainabilitySection from "../Sustainability/page";
import AboutSection from "../About/page";

import Pathgroup from "../PathGroup/page";
import Pathmmlp from "../MMLP/page";
import SolutionHome from "../Solution/page";
import Contact from "../Contact/page";
export default function Allcomponets() {
  return (
    <>
  
    <AboutSection/>
    <GradientUnderline/>
    <Pathgroup/>
     <GradientUnderline/>
   <Pathmmlp/>
    <GradientUnderline/>
    <SolutionHome/>
     <GradientUnderline/>
    <SustainabilitySection/>
    <GradientUnderline/>
    <Contact/>
    </>
  );
}
