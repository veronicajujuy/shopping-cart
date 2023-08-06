/* eslint-disable react/prop-types */
import Filters from "./Filters";
const Header = ({ setFilters }) => {
  return (
    <div>
      <Filters setFilters={setFilters} />
    </div>
  );
};

export default Header;
