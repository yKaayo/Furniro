import ConfidenceBanner from "../components/ConfidenceBanner";
import SectionBg from "../components/SectionBg";
import CartTotal from "../layout/CartTotal";

const Cart = () => {
  return (
    <>
      <SectionBg name="Cart" />
      <CartTotal />
      <ConfidenceBanner />
    </>
  );
};

export default Cart;
