import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Profile from "../Profile/Profile";
import { getUser } from "../../utilities/users-service";
import Tours from "../Tours/Tours";
import Location from "../Location/Location";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <Routes>
            <Route
              path="/"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/tours" user={user} element={<Tours user={user} />} />
            <Route
              path="/location/:locationID"
              user={user}
              element={<Location user={user} />}
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/tours" element={<Tours user={user} />} />
          <Route
            path="/location/:locationID"
            user={user}
            element={<Location user={user} />}
          />
        </Routes>
      )}
    </main>
  );
}

export default App;
