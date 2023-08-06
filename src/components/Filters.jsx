/* eslint-disable react/prop-types */
import { useState, useId } from "react";

const Filters = ({ setFilters }) => {
  const [minPrice, setMinPrice] = useState(0);
  //   uso del hook useID
  const minPrinceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters((prevState) => ({ ...prevState, minPrice: event.target.value }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({ ...prevState, category: event.target.value }));
  };
  return (
    <div className="filters">
      <div>
        <label htmlFor={minPrinceFilterId}>Precio</label>
        <input
          type="range"
          name="price"
          id={minPrinceFilterId}
          min="0"
          max="1500"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
