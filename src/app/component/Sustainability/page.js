"use client";
import Image from "next/image";
import { SiSitepoint } from "react-icons/si";

export default function SustainabilitySection() {
  const cards = [
    {
      image: "/sustainabilitylogo/tree.jpeg",
      title: "Maintaining Coastal Ecosystem",
      description: "We care about everything that nature gifts us.",
    },
    {
      image: "/sustainabilitylogo/watermnagment.jpeg",
      title: "Water Management",
      description: "We believe in the egalitarian share of water among the community.",
    },
    {
      image: "/sustainabilitylogo/customersupport.jpg",
      title: "Customer Support",
      description: "Leveraging IT for business excellence and customer centricity.",
    },
    {
      image: "/sustainabilitylogo/images.jpeg",
      title: "Valuing Talent",
      description: "Providing meaningful work and opportunities to learn & grow.",
    },
    {
      image: "/sustainabilitylogo/wastemanagement.jpg",
      title: "Waste Management",
      description: "We ensure efficient and responsible waste management.",
    },
    {
      image: "/sustainabilitylogo/climate.webp",
      title: "Climate Resilience",
      description: "Taking action to mitigate climate change related risks.",
    },
    {
      image: "/sustainabilitylogo/safetyvalue.webp",
      title: "Safety as a Value",
      description: "Creating a safe and productive workplace for everyone.",
    },
    {
      image: "/sustainabilitylogo/sustainbility supply chain.webp",
      title: "Sustainable Supply Chain",
      description: "Promoting local economic development and responsible sourcing.",
    },
    // Added cards
    {
      image: "/sustainabilitylogo/evcharger.jpeg",
      title: "E.V Charging",
      description: "Supports energy efficiency and lower operating costs.",
    },
    {
      image: "/sustainabilitylogo/women empowerment.png",
      title: "Women Empowerment",
      description: "Empowered Women, Empower the World.",
    },
  ];

  return (
    <section className="w-full">
      {/* Section 1 - Banner Image with Text */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/sustainabilitylogo/banner.jpg"
          alt="Sustainability Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="flex items-center gap-2 text-4xl font-bold tracking-wider">
            <SiSitepoint className="text-orange-500 text-5xl" />
            <span className="text-white">
              S<span className="text-3xl">ustainability</span>
              <span className="text-orange-500">..</span>
            </span>
          </h2>
          <p className="text-lg md:text-xl">We are amongst the greenest ports</p>
        </div>
      </div>

      {/* Section 2 - Green Line & Title */}
      <div className="flex items-center justify-center mt-12 px-4 text-center space-x-3">
        <Image
          src="/CompanyLogo/smalllogo.webp"
          alt="Company Logo"
          width={40}
          height={40}
        />
        <h2 className="text-2xl md:text-3xl font-bold text-blue-500">
          Towards Sustainable Development
        </h2>
      </div>
      <div className="w-24 h-[3px] bg-green-600 mx-auto mb-3"></div>

      {/* Section 3 - Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 px-4 md:px-16 pb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md group"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-bold">{card.title}</h3>
              <p className="text-gray-200 text-sm mt-1">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
