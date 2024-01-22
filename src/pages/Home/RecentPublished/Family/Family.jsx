import { useEffect, useState } from "react";
import PropertyCategoris from "../../../../components/PropertyCategories/PropertyCategoris";
import HouseCard from "../../../../components/HouseCard/HouseCard";

const Family = () => {
  const [family, setFamily] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFamily(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <PropertyCategoris categories={"Family"} />
      <HouseCard houses={family} />
    </div>
  );
};

export default Family;
