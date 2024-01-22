import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
const SectionTitle = ({ heading }) => {
  return (
    <div>
      <h1 className="md:py-8 py-4 md:text-4xl text-xl font-mono font-semibold flex gap-3 items-center justify-center">
        <HiOutlineChevronDoubleLeft />
        {heading}
        <HiOutlineChevronDoubleRight />
      </h1>
    </div>
  );
};

export default SectionTitle;
