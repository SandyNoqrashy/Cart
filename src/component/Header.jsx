import { FaShoppingCart } from "react-icons/fa";
const Header = ({ products }) => {
  return (
    <div className="h-20 w-screen bg-slate-500 shadow-2xl flex items-center justify-between px-10">
      <div className="text-white font-bold text-xl">Supermarket</div>
      <div className="relative cursor-pointer">
        <FaShoppingCart className="text-white text-2xl" />
        <div className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-bold rounded-full px-2">
          {products.length}
        </div>
      </div>
    </div>
  );
};

export default Header;
