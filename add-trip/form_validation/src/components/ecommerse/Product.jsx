import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartState } from "../../state_management/atoms/ProductState";

const Product = ({ prod }) => {
  const [cart, setCart] = useRecoilState(CartState);
  const { title, price, category } = prod;
  const AddItemToCart = (prod) => {
    if (!cart.includes(prod)) {
      setCart([...cart, prod]);
    }
  };

  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <p>{category}</p>
      <button onClick={() => AddItemToCart(prod)}>add</button>
    </div>
  );
};

export default Product;
