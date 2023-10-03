Travel Booking App - A Mern Project
Deployed on render: https://mern-travel-app-5a8r.onrender.com/

https://app.diagrams.net/#G1P54ljU-0rcZgtlg1Mt1GjHAbnAfZjG3F

This travel booking web application allows users to browse, book tours and manage their bookings. Users can sign up, log in, view featured travel locations, book tours, and manage their bookings, as well as view weather for city tours.Latitude and longitude are used for weather location. In order for users to view special features, users must be logged in. 

Features
User Authentication: Users can sign up and log in to the application as well as edit information. Glitch: stays the same when refreshed.
Browse Tours: Users can view a list of available tours and travel locations.
Tour Details: Users can click on a tour to view its details, including the tour guide, duration, and price.
Booking Tours: Authenticated users can book tours by providing booking details.
View Bookings: Users can view a list of their booked tours.
Cancel Bookings: Users can cancel their bookings.
Weather: Users will be able to view the weather for each location using API and latitude and longitude.

For the future, a reach woulld be more cities, using an external database, including local sights. A map with markers would be a great addition. 

Technologies Used
Frontend:

React: React is used for building the frontend. It is a popular JavaScript library for building user interfaces.
React Router: React Router is used for client-side routing, enabling navigation between different pages of the app. React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It  allow navigating without refreshing the page.
Weather API: https://open-meteo.com/

Backend:

Node.js: The backend server is built with Node.js, a runtime environment for executing JavaScript on the server.
Express: Express.js is the web application framework for Node.js.
MongoDB: MongoDB Atlas is used as the database storing user data, tour information, and bookings.
Mongoose: Mongoose is an ODM (Object Data Modeling) library for MongoDB.

Authentication:

JSON Web Tokens (JWT): JWTs for user authentication and authorization, allowing secure access to protected routes.
API Communication:
Axios: Axios is used to make HTTP requests from the frontend to the backend API.
