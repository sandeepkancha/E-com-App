import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Ecom App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
