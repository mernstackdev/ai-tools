import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { ToolCard } from "../../components";
import { Loader2 } from "lucide-react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const ToolsList = () => {
  const { id } = useParams();

  const [tools, setTools] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getToolsByCategoryId() {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.rpc("get_tools_by_category", {
        p_category_id: id,
      });

      if (error || data.length === 0) {
        setTools([]);
        setCategory("");
        return;
      }

      const toolsData = data[0];
      setCategory(toolsData.category);
      setTools(toolsData.tools);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getToolsByCategoryId();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center py-8">
        <h1 className="text-6xl font-bold">{category}</h1>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {tools?.map((tool, index) => (
          <ToolCard
            key={tool.id}
            rank={index + 1}
            name={tool?.name}
            description={tool?.short_description}
            cost={tool?.cost}
            visitUrl={tool?.site_url}
          />
        ))}
      </div>
    </>
  );
};

export default ToolsList;
