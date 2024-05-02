import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProductAction, ProductState } from "../types/Product";
import { sampleProducts } from "../utils/sampleProduct";

const HomePage = () => {
  const initialState: ProductState = {
    products: [],
    loading: false,
    error: "",
  };

  const reducer = (state: ProductState, action: ProductAction) => {
    switch (action.type) {
      case "REQUEST":
        return { ...state, loading: true };
      case "SUCCESS":
        return { ...state, loading: false, products: action.payload };
      case "FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  return (
    <div className="flex items-center flex-wrap gap-5 justify-center">
      {sampleProducts.slice(0, 4).map((data, i) => (
        <div key={i} className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={data.image} alt="" />
          </figure>
          <div className="card-body">
            <Link to={`product/${data.slug}`}>
              <h2 className="card-title">{data.name}</h2>
            </Link>
            <p className="font-bold text-lg text-slate-600">$ {data.price}</p>
            <div className="card-actions justify-end">
              <button className="btn">
                Add To Cart
                <FiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
