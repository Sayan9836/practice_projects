import React from "react";
import { useRecoilState } from "recoil";
import { CartState } from "../../state_management/atoms/ProductState";

const Cart = () => {
  const [carts, setCart] = useRecoilState(CartState);

  const removeCartItem = (prod) => {
    const newCartItems = carts.filter((ele) => ele.id !== prod.id);
    setCart(newCartItems);
  };

  return (
    <div>
      {carts?.map((prod) => (
        <div key={prod.id}>
          <p>{prod.title}</p>
          <p>{prod.price}</p>
          <p>{prod.category}</p>
          <button onClick={() => removeCartItem(prod)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
