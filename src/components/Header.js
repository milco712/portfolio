import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="mx-auto flex max-w-4xl items-center justify-between p-6 my-2">
      <h1 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        <Link to={"/"}>Eunji's Portfolio</Link>
      </h1>
      <nav className="text-xl">
        <ul className="flex sm:space-x-6 space-x-3 font-semibold">
          <li>
            <Link
              to={"/management"}
              className={`pb-1 ${
                location.pathname === "/management"
                  ? "border-b-2 border-gray-900"
                  : "hover:border-b-2 hover:border-gray-900"
              }`}
            >
              관리
            </Link>
          </li>
          <li>
            <Link
              to={"/service"}
              className={`pb-1 ${
                location.pathname === "/service"
                  ? "border-b-2 border-gray-900"
                  : "hover:border-b-2 hover:border-gray-900"
              }`}
            >
              기획
            </Link>
          </li>
          <li>
            <Link
              to={"/development"}
              className={`pb-1 ${
                location.pathname === "/development"
                  ? "border-b-2 border-gray-900"
                  : "hover:border-b-2 hover:border-gray-900"
              }`}
            >
              개발
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
