require("dotenv").config();
require("./database.cjs");

const Location = require("../models/location.cjs");
const Booking = require("../models/booking.cjs");
const TourGuide = require("../models/tour_guide.cjs");
const Tour = require("../models/tour.cjs");

(async function () {
  // Delete existing data
  await Location.deleteMany({});
  await Booking.deleteMany({});
  await TourGuide.deleteMany({});
  await Tour.deleteMany({});

  // Create Tour Guides
  const tourGuides = await TourGuide.create([
    {
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice@example.com",
      phone_number: "11112222",
      dob: "1988-03-10",
      address: "789 Oak Road, City, Country",
    },
    {
      first_name: "David",
      last_name: "Wilson",
      email: "david@example.com",
      phone_number: "55556666",
      dob: "1995-09-25",
      address: "321 Cedar Street, Town, Country",
    },
    {
      first_name: "Emily",
      last_name: "Brown",
      email: "emily@example.com",
      phone_number: "77778888",
      dob: "1992-07-18",
      address: "567 Pine Avenue, Village, Country",
    },
  ]);

  // Create Locations
  const locations = await Location.create([
    {
      name: "Paris, France",
      description:
        "Explore the romantic streets of Paris and enjoy iconic landmarks like the Eiffel Tower.",
      image:  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg", 
      lon: 2.3522, // Longitude coordinate for Paris
      lat: 48.8566, // Latitude coordinate for Paris
    },
    {
      name: "Kyoto, Japan",
      description:
        "Experience the beauty of Kyoto with its historic temples, stunning gardens, and rich culture.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIJzuZAYoa5hcj3kangY17L6scCWQdsDmlKmUu_BrkF6-RL0C8xjp8R4Xs59qRzxFdbY&usqp=CAU", 
      lon: 135.7681, // Longitude coordinate for Kyoto
      lat: 35.0116, // Latitude coordinate for Kyoto
    },
    {
      name: "New York City, USA",
      description:
        "Discover the city that never sleeps, with its skyscrapers, Broadway shows, and diverse neighborhoods.",
      image: "https://planreadygo.com/wp-content/uploads/2020/07/NYC-skyline-wtih-statue-of-liberty.jpg", 
      lon: -74.006, // Longitude coordinate for New York City
      lat: 40.7128, // Latitude coordinate for New York City
    },
    {
      name: "Santorini, Greece",
      description:
        "Relax on the picturesque beaches of Santorini and enjoy breathtaking sunsets over the Aegean Sea.",
      image: "https://www.costacruises.eu/content/dam/costa/inventory-assets/ports/JTR/jtr-santorini-port-1.jpg.image.2048.1536.medium.jpg", 
      lon: 25.396, // Longitude coordinate for Santorini
      lat: 36.3932, // Latitude coordinate for Santorini
    },
  ]);

  // Create Tours with linked Tour Guides and Locations
  await Tour.create([
    {
      tour_name: "Paris Romance",
      description: "A romantic getaway in Paris",
      price: 1200,
      start_date: new Date("2023-06-01"),
      end_date: new Date("2023-06-10"),
      tour_guide: {
        _id: tourGuides[0]._id,
        first_name: tourGuides[0].first_name,
        last_name: tourGuides[0].last_name,
      }, // Link to Alice
      location: locations[0], // Link to Paris
    },
    {
      tour_name: "Kyoto Adventure",
      description: "An adventure in Kyoto",
      price: 900,
      start_date: new Date("2023-07-05"),
      end_date: new Date("2023-07-15"),
      tour_guide: {
        _id: tourGuides[1]._id,
        first_name: tourGuides[1].first_name,
        last_name: tourGuides[1].last_name,
      }, // Link to David
      location: locations[1], // Link to Kyoto
    },
    {
      tour_name: "Santorini Dwelling",
      description: "Explore the city from ancient times by the coast",
      price: 1200,
      start_date: new Date("2023-08-15"),
      end_date: new Date("2023-08-20"),
      tour_guide: {
        _id: tourGuides[0]._id,
        first_name: tourGuides[0].first_name,
        last_name: tourGuides[0].last_name,
      }, // Link to Alice
      location: locations[2], // Link to Santorini
    },
    {
      tour_name: "New York City Explorer",
      description: "Explore the city that never sleeps",
      price: 1500,
      start_date: new Date("2023-08-10"),
      end_date: new Date("2023-08-20"),
      tour_guide: {
        _id: tourGuides[2]._id,
        first_name: tourGuides[2].first_name,
        last_name: tourGuides[2].last_name,
      }, // Link to Emily
      location: locations[3], // Link to NYC
    },
  ]);

  console.log("Database seeded successfully");
  process.exit(1);
})();
