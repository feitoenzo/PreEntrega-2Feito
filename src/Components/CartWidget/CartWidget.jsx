import { HiOutlineShoppingCart } from "react-icons/hi";

const CartWidget = ({ numero }) => {
  return (
    <div>
      <span size={30}>CARRITO</span>
      <HiOutlineShoppingCart color="green" size={30} />
    </div>
  );
};

export default CartWidget;
