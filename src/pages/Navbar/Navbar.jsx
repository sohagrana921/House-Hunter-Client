import TopNav from "../../components/TopNav/TopNav";
import {
  HiHome,
  HiOutlineViewList,
  HiClipboardList,
  HiOutlineTable,
} from "react-icons/hi";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <span>
          <HiHome></HiHome> Home
        </span>
      </li>
      <li>
        <span>
          <HiOutlineViewList />
          Property List
        </span>
      </li>
      <li>
        <span>
          <HiClipboardList />
          Article
        </span>
      </li>
      <li>
        <span>
          <HiOutlineTable />
          About Us
        </span>
      </li>
    </>
  );
  return (
    <div>
      <TopNav />
      <div className="bg-base-100 border-b-2 flex md:flex-col py-2 md:py-4 justify-between">
        {/* DropDown Menu Here */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <div className="flex justify-around items-center px-5">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal text-2xl gap-4 px-1">
              {navLinks}
            </ul>
          </div>

          <div className="form-control">
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
