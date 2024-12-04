import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const colors = {
  Free: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  "Free-Trial": {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  Freemium: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  Paid: {
    bg: "bg-red-100",
    text: "text-red-700",
  },
};
const ToolCard = ({ rank, cost, name, description, visitUrl }) => {
  return (
    <div className="bg-white rounded-xl px-4 py-4 shadow-lg relative border">
      {/* Rank Badge */}
      <div className="flex items-center justify-between">
        <div className="relative -top-4 right-4 w-8 h-8 bg-[#FFF7E5] rounded-tl-xl flex items-center justify-center font-semibold text-gray-700">
          {rank}
        </div>
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span
              className={`text-sm px-2 py-0.5 rounded ${colors[cost].bg} ${colors[cost].text}`}
            >
              {cost}
            </span>
          </div>
        </div>
      </div>

      {/* Tool Info */}
      <div className="mb-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">« {description} »</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["AI"].map((tag, index) => (
          <span
            key={index}
            className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <Link
          to={visitUrl}
          target="_blank"
          className="bg-[#4D77FF] text-white px-6 py-2 rounded-lg flex items-center gap-2"
        >
          <span className="font-medium">VISIT</span>
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
