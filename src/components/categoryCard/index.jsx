import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, title, tools }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow border">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-6 border-b pb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* Tools List */}
      <div className="space-y-4">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">{index + 1}.</span>
              {/* <div className="w-6 h-6 flex items-center justify-center">
                {tool.icon}
              </div> */}
              {/* <img src={tool.tool_logo} alt="Logo" /> */}
              <span className="text-sm">{tool.tool_name}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Link
          to={`/tools/${id}`}
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          See all category
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
