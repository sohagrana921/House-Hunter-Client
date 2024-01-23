import { useEffect, useState } from "react";
import PropertyCategoris from "../../../../components/PropertyCategories/PropertyCategoris";
import HouseCard from "../../../../components/HouseCard/HouseCard";

const Bachelor = () => {
  const [bachelor, setBachelor] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setBachelor(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <PropertyCategoris categories={"Bachelor"} />
      <HouseCard houses={bachelor} />
    </div>
  );
};

export default Bachelor;
