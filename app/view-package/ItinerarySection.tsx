import React from "react";
import DayCard from "./DayCard";

const itineraryData = [
  {
    day: 1,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f4a4d20c74047cecd72eb09edbaa5d18344524",
    activities: [
      "Airport Pickup and Assistance",
      "Transfer to Kandy.",
      "Check-Into The Hotel and Relax.",
      "Enjoy a Street Food Tour.",
    ],
  },
  {
    day: 2,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/84ddddc547660aeba1dc22cdc69b2678064becd3",
    activities: [
      "Kandy lake and view point",
      "Peradeniya Botanical Garden",
      "Temple of Tooth (World Heritage Site)",
      "Kandy National Museum",
    ],
  },
  {
    day: 3,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/14c7555998e9d675cd3f1cad3b95ff9517d338b7",
    activities: [
      "Ambuluwawa Tower",
      "Ramboda Falls",
      "Tea Factory and Plantation",
      "Overnight stay in Nuwara Eliya",
    ],
  },
  {
    day: 4,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b07158bf6d608a8892b0b26dc476656e2ef56f78",
    activities: [
      "Train Ride to Ella",
      "Nine Arch Bridge",
      "Little Adam's Peak hiking",
      "Overnight stay in Ella",
    ],
  },
];

const ItinerarySection: React.FC = () => {
  return (
    <section className="flex-1">
      {itineraryData.map((item) => (
        <DayCard
          key={item.day}
          day={item.day}
          imageUrl={item.imageUrl}
          activities={item.activities}
        />
      ))}
    </section>
  );
};

export default ItinerarySection;
