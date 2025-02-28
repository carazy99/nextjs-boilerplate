import React from "react";

interface DayCardProps {
  day: number;
  imageUrl: string;
  activities: string[];
}

const DayCard: React.FC<DayCardProps> = ({ day, imageUrl, activities }) => {
  return (
    <article className="flex items-start mb-10">
      <div className="flex justify-center items-center w-20 h-20 text-base font-extrabold text-yellow-600 bg-white rounded-full shadow-[0px_0px_15px_rgba(0,0,0,0.25)]">
        Day {day}
      </div>
      <div className="flex overflow-hidden -ml-10 bg-white rounded-xl border border-solid border-neutral-400 border-opacity-50 max-sm:flex-col">
        <img
          src={imageUrl}
          className="object-cover w-60 h-[140px] max-sm:w-full max-sm:h-[200px]"
          alt={`Day ${day}`}
        />
        <div className="px-5 py-4 text-base leading-6 text-neutral-900 max-sm:p-4">
          {activities.map((activity, index) => (
            <p key={index}>{activity}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default DayCard;
