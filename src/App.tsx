import { Button } from "primereact/button";
import { sampleProducts } from "./utils/sampleProduct";

const App = () => {
  console.log(sampleProducts);
  return (
    <div>
      <h1>Hello</h1>
      <Button label="Check" icon="pi pi-check" />
    </div>
  );
};

export default App;
