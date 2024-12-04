import { Route, Routes } from "react-router-dom";
import { Categories, ToolsList } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/tools/:id" element={<ToolsList />} />
      </Routes>
    </>
  );
};

export default App;
