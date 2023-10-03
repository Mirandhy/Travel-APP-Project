import "./Login.css";
import { useState } from "react";
import { login } from "../../utilities/users-service";

const Login = ({ setUser }) => { //Login functional component with a setUser prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

//Event handler
  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
    setErrorMessage("");
  };
  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
    setErrorMessage("");
  };
  const handleSubmit = async (e) => { // // Event handler for form submission
    e.preventDefault();

    try {
      const user = await login({ email: email, password: password });
      //// If login is successful, update the user state using the setUser function
      setUser(user);
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(
        "An error occurred during login. Please try again later."
      );
    }
  };

  return (
    <div className="login-section">
      {/* Login form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Sign In</h3>
         {/* error message if it is not empty */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label>Email</label>
         {/* Email input */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
          required
        />
            {/* Password input*/}
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => handleChangePassword(e)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
