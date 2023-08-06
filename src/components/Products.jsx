/* eslint-disable react/prop-types */
import { AddToCartIcon } from "./Icons";
import "./products.css";

// eslint-disable-next-line react/prop-types
function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products?.map((item) => (
          <li className="card" key={item.id}>
            <div className="imagen">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div>
              <strong>{item.title}</strong> - price $ {item.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Products;
