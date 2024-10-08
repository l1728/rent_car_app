import { Link } from "react-router-dom";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Car Rental Company</p>
      </footer>
    </div>
  );
};

export default Layout;
