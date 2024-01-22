import {
  HiOutlineHome,
  HiOfficeBuilding,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { Link } from "react-router-dom";
const CatagoriesNav = () => {
  const items = (
    <>
      <li className="border-2 hover:border-blue-700 rounded-full px-1 py-3  flex justify-center">
        <Link className="flex items-center gap-2">
          <HiOutlineHome />
          Family
        </Link>
      </li>
      <li className="border-2 hover:border-blue-700 rounded-full px-1 py-3 flex justify-center">
        <Link className="flex items-center gap-2">
          <HiOutlineHome />
          Bachelor
        </Link>
      </li>
      <li className="border-2 hover:border-blue-700 rounded-full px-1 py-3 flex justify-center">
        <Link className="flex items-center gap-2">
          <HiOfficeBuilding />
          Office
        </Link>
      </li>
      <li className="border-2 hover:border-blue-700 rounded-full px-1 py-3 flex justify-center">
        {" "}
        <Link className="flex items-center gap-2">
          <HiOutlineHome />
          Sublet
        </Link>
      </li>
      <li className="border-2 hover:border-blue-700 rounded-full px-1 py-3 flex justify-center">
        {" "}
        <Link className="flex items-center gap-2">
          <HiOutlineHome />
          Hostel
        </Link>
      </li>
      <li className="border-2 hover:border-blue-700 rounded-full px-1 py-3 flex justify-center">
        <Link className="flex items-center gap-2">
          <HiOutlineShoppingBag />
          Shop
        </Link>
      </li>
    </>
  );
  return (
    <div className="my-4">
      <ul className="grid grid-cols-3  md:grid-cols-6 gap-2 w-2/3 mx-auto text-xl">
        {items}
      </ul>
    </div>
  );
};

export default CatagoriesNav;
