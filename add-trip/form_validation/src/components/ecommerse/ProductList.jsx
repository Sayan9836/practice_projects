import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { get_products } from "../../state_management/selectors/GetFakeProducts";
import Product from "./Product";

const ProductList = () => {
  const products = useRecoilValue(get_products);
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      {products?.map((prod) => (
        <Product key={prod.id} prod={prod} />
      ))}
    </Suspense>
  );
};

export default ProductList;
