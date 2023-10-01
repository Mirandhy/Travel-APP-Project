import "./featured-locations.css";

const FeaturedLocations = () => {
  // Sample data for featured locations
  const locations = [
    {
      id: 1,
      name: "Paris, France",
      description:
        "Explore the romantic streets of Paris and enjoy iconic landmarks like the Eiffel Tower.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg", // You can replace this with the actual image URL
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      description:
        "Experience the beauty of Kyoto with its historic temples, stunning gardens, and rich culture.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIJzuZAYoa5hcj3kangY17L6scCWQdsDmlKmUu_BrkF6-RL0C8xjp8R4Xs59qRzxFdbY&usqp=CAU", // You can replace this with the actual image URL
    },
    {
      id: 3,
      name: "New York City, USA",
      description:
        "Discover the city that never sleeps, with its skyscrapers, Broadway shows, and diverse neighborhoods.",
      image:
        "https://planreadygo.com/wp-content/uploads/2020/07/NYC-skyline-wtih-statue-of-liberty.jpg", // You can replace this with the actual image URL
    },
    {
      id: 4,
      name: "Santorini, Greece",
      description:
        "Relax on the picturesque beaches of Santorini and enjoy breathtaking sunsets over the Aegean Sea.",
      image:
        "https://www.costacruises.eu/content/dam/costa/inventory-assets/ports/JTR/jtr-santorini-port-1.jpg.image.2048.1536.medium.jpg", // You can replace this with the actual image URL
    },
  ];

  return (
    <div className="featured-locations">
      <h2>Featured Locations</h2>
      <div className="location-cards">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <img src={location.image} alt={location.name} />
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <button className="view-location">View Location</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLocations;
