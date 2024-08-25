import axios from "axios";
import { selector } from "recoil";

export const get_products = selector({
  key: "Products",
  get: async () => {
    const URI = `https://fakestoreapi.com/products`;
    try {
      const response = await axios.get(URI);
      if (response) {
        console.log(response.data);
        return response.data || [];
      }
    } catch (error) {
      console.log(error?.message);
      return [];
    }
  },
});
