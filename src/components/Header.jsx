import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/color">Color</Link>
          </li>
          <li>
            <Link to="/emotions">Emoción</Link>
          </li>
          <li>
            <Link to="/text">Texto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
