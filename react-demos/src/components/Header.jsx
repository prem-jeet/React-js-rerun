import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <h1>Welcome to my Website</h1>
      <nav>
        <span className="flex flex-center">
          <FaHome />
          <a href="">Home</a>
        </span>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
