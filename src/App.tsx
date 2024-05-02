import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default App;
