import axios from "axios";

import { Product } from "./models/product.model";

(async () => {
  // tipado de la respuesta de la funcion async <Product[]>
  async function getProductsAsync() {
    // Tipado de la respuesta de la peticion con axios
    const { data } = await axios.get<Product[]>(
      "https://api.escuelajs.co/api/v1/products"
    );
    // El tipado ayuda a tener referencias de la respuesta gracias a la interface Product
    // as Product[] ayuda a tipar cuando la libreria no permite el tipado
    // data.map(item => item.title)
    return data;
  }
  console.log("-".repeat(10));
  const products_async = await getProductsAsync();
  console.log(products_async.map((item) => `${item.title}`));
})();
