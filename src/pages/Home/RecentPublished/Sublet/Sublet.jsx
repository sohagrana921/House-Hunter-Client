import { useEffect, useState } from "react";
import PropertyCategoris from "../../../../components/PropertyCategories/PropertyCategoris";
import HouseCard from "../../../../components/HouseCard/HouseCard";

const Sublet = () => {
  const [sublet, setSublet] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setSublet(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <PropertyCategoris categories={"Sublet"} />
      <HouseCard houses={sublet} />
    </div>
  );
};

export default Sublet;
