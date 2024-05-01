import Navbar from "./components/Navbar";
import { sampleProducts } from "./utils/sampleProduct";

const App = () => {
  console.log(sampleProducts);
  return (
    <div className="">
      <Navbar />
    </div>
  );
};

export default App;
