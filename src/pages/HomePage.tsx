import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useAppDispatch, useAppSelector } from "../app/store";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../redux/productSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="error" text={error} />
  ) : (
    <div className="flex items-center flex-wrap gap-5 justify-center">
      <Helmet>
        <title>TS Ecommerce</title>
      </Helmet>
      {products.slice(0, 4).map((data, i) => (
        <ProductCard key={i} data={data} />
      ))}
    </div>
  );
};

export default HomePage;
