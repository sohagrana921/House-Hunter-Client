import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import HouseCard from "../../../components/HouseCard/HouseCard";

const Featured = () => {
  const [featuredHouses, setFeaturedHouses] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedHouses(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle heading={"Featured Property"} />
      <HouseCard houses={featuredHouses} />
    </div>
  );
};

export default Featured;
