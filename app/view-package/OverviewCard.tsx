import React from "react";

interface OverviewItemProps {
  label: string;
  value: string;
  isClickable?: boolean;
}

const OverviewItem: React.FC<OverviewItemProps> = ({
  label,
  value,
  isClickable = false,
}) => {
  return (
    <div className="mb-5">
      <div className="mb-1.5 text-xs text-zinc-500">{label}</div>
      <div
        className={`text-base text-neutral-900 ${
          isClickable ? "underline cursor-pointer" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
};

const OverviewCard: React.FC = () => {
  return (
    <aside className="p-5 bg-white rounded-xl border border-solid border-neutral-400 border-opacity-50 w-[394px] max-md:w-full max-sm:p-4">
      <h2 className="mb-2.5 text-lg text-zinc-500">Overview</h2>
      <div className="mx-0 mt-2.5 mb-5 h-px bg-zinc-500 bg-opacity-20" />

      <OverviewItem label="Duration" value="4 Nights / 5 Days" />
      <OverviewItem label="Transport" value="Sedan / Van (With A/C)" />
      <OverviewItem
        label="Journey"
        value="Colombo > Kandy > Nuwara Eliya > Ella"
      />
      <OverviewItem label="Guide" value="Yes (Chauffeur guide)" />
      <OverviewItem label="Price ($)" value="On Request" isClickable={true} />

      <button className="p-4 mt-8 text-center text-white bg-yellow-600 rounded-md cursor-pointer w-full">
        INQUIRE NOW
      </button>
    </aside>
  );
};

export default OverviewCard;
