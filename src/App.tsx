import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { sampleProducts } from "./utils/sampleProduct";

const App = () => {
  console.log(sampleProducts);
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />

      <div className="flex items-center flex-wrap gap-5 justify-center">
        {sampleProducts.slice(0, 4).map((data, i) => (
          <Card
            name={data.name}
            image={data.image}
            price={data.price}
            key={`${data.name}_${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
