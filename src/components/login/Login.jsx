import "./Login.css";
import { useState } from "react";
import { login } from "../../utilities/users-service";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
    setErrorMessage("");
  };
  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
    setErrorMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login({ email: email, password: password });
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
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
          required
        />
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
