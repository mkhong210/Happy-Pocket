import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="text-3xl font-bold text-center mb-6">
      <Link to="/home">Happy Pocket</Link>
    </header>
  );
};

export default Header;
