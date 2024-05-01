import { Button } from "primereact/button";
import Navbar from "./components/Navbar";
import { sampleProducts } from "./utils/sampleProduct";

const App = () => {
  console.log(sampleProducts);
  return (
    <div>
      <Navbar />
      <h1 className="text-xl">Hello</h1>
      <Button label="Check" icon="pi pi-check" />
    </div>
  );
};

export default App;
