import { Helmet } from "react-helmet-async";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/store";
import RatingBox from "../components/RatingBox";

const ProductPage = () => {
  const { slug } = useParams();

  const { products } = useAppSelector((state) => state.products);

  const data = products.find((p) => p.slug === slug);

  console.log(data);

  return (
    <div className="flex flex-col md:flex-row gap-10 my-10 mx-5  md:mx-32">
      <Helmet>
        <title>Product Page</title>
        product page
      </Helmet>
      <img
        src={data?.image}
        alt=""
        className="w-full md:w-1/2 h-full object-cover"
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl">{data?.name}</h1>
        <RatingBox
          rating={data?.rating as number}
          numReviews={data?.numReviews as number}
        />
        <h1 className="text-3xl text-slate-600">Price: ${data?.price}</h1>

        {(data?.countInStock as number) > 30 ? (
          <div>
            Status : <div className="badge badge-success text-white">Stock</div>
          </div>
        ) : (
          <div>
            Status :{" "}
            <div className="badge badge-error text-white">Out Of Stock</div>
          </div>
        )}
        <p className="text-slate-500">{data?.descriptioin}</p>

        <button className="btn">
          Add To Cart
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
