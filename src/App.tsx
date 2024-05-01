import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { sampleProducts } from "./utils/sampleProduct";

const App = () => {
  console.log(sampleProducts);
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default App;
