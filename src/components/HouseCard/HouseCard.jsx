const HouseCard = ({ houses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-container">
      {houses.map((house) => (
        <div key={house.id} className="card  bg-base-200 shadow-xl">
          <figure>
            <img src={house.image} alt="house" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{house.title}</h2>
            <p>{house.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseCard;
