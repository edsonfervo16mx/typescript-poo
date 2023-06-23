import axios from "axios";

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get("https://api.escuelajs.co/api/v1/products");
    return promise;
  }

  async function getProductsAsync() {
    const result = await axios.get("https://api.escuelajs.co/api/v1/products");
    return result.data;
  }

  console.log("-".repeat(10));
  const result = await delay(3000);
  console.log(result);

  console.log("-".repeat(10));
  const products = await getProducts();
  console.log(products.data);

  console.log("-".repeat(10));
  const products_async = await getProductsAsync();
  console.log(products_async);
})();
