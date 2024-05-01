import { FiShoppingCart } from "react-icons/fi";

function NavbarComponent() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-lg">TSEcommerce</a>
      </div>
      <div className="flex">
        <button className="btn btn-square btn-ghost">
          <div className="flex">
            <FiShoppingCart className="w-5 h-5" />
            <div className="badge badge-secondary badge-sm text-white  ">3</div>
          </div>
        </button>
        <button className="btn btn-square btn-ghost btn-lg text-md">
          Login
        </button>
      </div>
    </div>
  );
}

export default NavbarComponent;
