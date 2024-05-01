import { FiShoppingCart } from "react-icons/fi";

type CardProps = {
  name: string;
  image: string;
  price: number;
};

const Card = ({ name, image, price }: CardProps) => {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>$ {price}</p>
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

export default Card;
