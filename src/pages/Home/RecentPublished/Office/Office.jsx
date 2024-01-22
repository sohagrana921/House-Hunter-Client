import { useEffect, useState } from "react";
import PropertyCategoris from "../../../../components/PropertyCategories/PropertyCategoris";
import HouseCard from "../../../../components/HouseCard/HouseCard";

const Office = () => {
  const [office, setOffice] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setOffice(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <PropertyCategoris categories={"Office"} />
      <HouseCard houses={office} />
    </div>
  );
};

export default Office;
