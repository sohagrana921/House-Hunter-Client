import { Link } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
const PropertyCategoris = ({ categories }) => {
  return (
    <div className="flex justify-between px-6 py-4">
      <h1 className="text-3xl font-semibold">{categories}</h1>
      <Link className="px-4 py-2 text-xl font-semibold text-blue-700 rounded hover:bg-blue-800 hover:text-white flex items-center gap-3">
        See more property <HiOutlineChevronDoubleRight />
      </Link>
    </div>
  );
};

export default PropertyCategoris;
