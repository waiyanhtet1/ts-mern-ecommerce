import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/store";
import { addToCart } from "../redux/cartSlice";
import { CartItem } from "../types/Cart";
import { Product } from "../types/Product";
import RatingBox from "./RatingBox";

const ProductCard = ({ data }: { data: Product }) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = (product: CartItem) => {
    dispatch(addToCart(product));
  };

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
          <button
            className="btn"
            onClick={() =>
              addToCartHandler({
                _id: data._id,
                countInStock: data.countInStock,
                image: data.image,
                name: data.name,
                price: data.price,
                quantity: 1,
                slug: data.slug,
              })
            }
          >
            Add To Cart
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
