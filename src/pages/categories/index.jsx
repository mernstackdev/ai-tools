import { useState, useEffect } from "react";
import { CategoryCard } from "../../components";
import { createClient } from "@supabase/supabase-js";
import { Loader2 } from "lucide-react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Categories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      setIsLoading(true);
      const { data } = await supabase.rpc("get_top_10_tools_per_category");
      setCategories(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center py-8">
        <h1 className="text-6xl font-bold">Full AI List</h1>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
        {categories?.map((category) => (
          <CategoryCard
            key={category.category_id}
            id={category.category_id}
            title={category.category_name}
            tools={category.tools}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
