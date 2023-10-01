import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import "./Profile.css"; // Import your CSS for styling
import FeaturedBookings from "../../components/bookings/bookings";

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    // Implement your logic to save the edited user data here
    // You can send an API request to update the user's profile
    // Example: send a PATCH or PUT request to your API
    console.log("Saving changes:", editedUser);

    // After saving changes, exit edit mode
    setIsEditing(false);
  };

  return (
    <div className="container">
      <NavBar user={user} />
      <div className="profile">
        <h2>My Profile</h2>
        {isEditing ? (
          <div className="edit-profile">
            <div className="form-group">
              <label htmlFor="first_name">First Name:</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={editedUser.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name:</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={editedUser.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={new Date(editedUser.dob).toLocaleDateString()}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number:</label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                value={editedUser.phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                id="address"
                value={editedUser.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <button
                onClick={handleSaveChanges}
                style={{ backgroundColor: "green", color: "white" }}
              >
                Save Changes
              </button>
              <button onClick={handleEditToggle}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="view-profile">
            <p>
              <strong>First Name:</strong> {user.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {user.last_name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Date of Birth:</strong>
              {new Date(user.dob).toLocaleDateString()}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phone_number}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            <button onClick={handleEditToggle}>Edit Profile</button>
          </div>
        )}
      </div>
      <FeaturedBookings></FeaturedBookings>
    </div>
  );
};

export default Profile;
