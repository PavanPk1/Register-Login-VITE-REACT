import { useState } from "react";
import { Link } from "react-router-dom";
//using axios to send data to server
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // on submit send data to server
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password }; //json object
    axios
      .post("http://localhost:3001/login", data)
      .then((result) => {
        console.log(result);
        if (result.data.status === "success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-white rounded shadow p-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success rounded-0">
            Login
          </button>
          <p>Already Have an Account?</p>
        </form>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rouded-0 text-decoration-none"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
