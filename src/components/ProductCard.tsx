import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import RatingBox from "./RatingBox";

const ProductCard = ({ data }: { data: Product }) => {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={data.image} alt="" />
      </figure>
      <div className="card-body">
        <Link to={`product/${data.slug}`}>
          <h2 className="card-title">{data.name}</h2>
        </Link>
        <RatingBox rating={data.rating} numReviews={data.numReviews} />
        <p className="font-bold text-lg text-slate-600">$ {data.price}</p>
        <div className="card-actions justify-end">
          <button className="btn">
            Add To Cart
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
