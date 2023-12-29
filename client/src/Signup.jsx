import { useState } from "react";
import { Link } from "react-router-dom";
//using axios to send data to server
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // on submit send data to server
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, password }; //json object
    axios.post("http://localhost:3001/register", data)
    .then(result => {
        console.log(result);
        navigate('/login')
    })
    .catch(err => console.log(err))
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white rounded shadow p-5">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            Register
          </button>
          <p>Already Have an Account?</p>
        </form>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rouded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
