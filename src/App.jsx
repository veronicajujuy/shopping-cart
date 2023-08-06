import { useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import { products as initialProducts } from "./mocks/products.json";

// custom hook que separa la logica para filtrar productos
const useFilters = () => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  /*filtrar productos */
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { filterProducts, setFilters };
};

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header setFilters={setFilters} />
      <h1>Shopping cart</h1>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
