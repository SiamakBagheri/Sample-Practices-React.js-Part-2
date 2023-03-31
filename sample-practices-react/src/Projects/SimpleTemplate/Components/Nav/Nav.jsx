import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link  to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/NotFoundPage">Not Found 404</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
