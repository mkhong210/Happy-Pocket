import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    // <header className="text-3xl font-bold text-center mb-6">
    //   <Link to="/home">Happy Pocket</Link>
    // </header>

    // <header className="bg-indigo-600 text-white p-4 shadow-md">
    //   <div className="container mx-auto flex items-center justify-between">
    //     <Link to="/home" className="text-3xl font-bold hover:underline">
    //       Happy Pocket
    //     </Link>
    //     {/* 필요하면 네비게이션 메뉴도 여기에 추가 가능 */}
    //     <nav>
    //       <ul className="flex space-x-4 text-lg">
    //         <li>
    //           <Link to="/home" className="hover:underline">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/add" className="hover:underline">
    //             Add Expense
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/reports" className="hover:underline">
    //             Reports
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>

    <header className="bg-indigo-600 text-white py-4 shadow-md">
      <h1 className="text-3xl font-bold text-center">
        <Link to="/home" className="no-underline hover:underline">
          Happy Pocket
        </Link>
      </h1>
    </header>
  );
};

export default Header;
