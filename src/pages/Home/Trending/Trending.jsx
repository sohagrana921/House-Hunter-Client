import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import HouseCard from "../../../components/HouseCard/HouseCard";

const Trending = () => {
  const [trendingHouses, setTrendingHouses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setTrendingHouses(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle heading={"Trending Property"} />
      <HouseCard houses={trendingHouses} />
    </div>
  );
};

export default Trending;
