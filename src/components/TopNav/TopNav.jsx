const TopNav = () => {
  return (
    <div className="flex items-center justify-between px-1 md:px-10 py-4 border-b-2">
      <div className="flex items-center md:items-end gap-5">
        <img
          src="https://static.thenounproject.com/png/128251-200.png"
          alt="logo"
          className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]"
        />
        <h1 className="hidden md:block md:text-3xl font-serif font-bold ">
          House Hunter
        </h1>
      </div>
      <div className="flex gap-2 md:gap-8">
        <button className="btn btn-xs md:btn-lg btn-outline md:text-xl">
          + Add Property
        </button>
        <button className="btn btn-xs md:btn-lg btn-outline md:text-xl">
          Login/Register{" "}
        </button>
      </div>
    </div>
  );
};

export default TopNav;
