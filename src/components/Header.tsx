import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white py-4 shadow-md">
      <h1 className="text-3xl font-bold text-center">
        <Link to="/main" className="no-underline">
          Happy Pocket
        </Link>
      </h1>
    </header>
  );
};

export default Header;
