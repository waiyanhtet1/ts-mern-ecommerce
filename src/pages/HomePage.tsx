import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { sampleProducts } from "../utils/sampleProduct";

const HomePage = () => {
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
