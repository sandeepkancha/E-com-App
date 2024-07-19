import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Product"}>Products</Link>
          </li>
          <li>
            <Link to={"/Cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
