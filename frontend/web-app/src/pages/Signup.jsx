import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrlContext } from "../context/BaseUrlContext";
import { IconLock, IconMailAi, IconUserBolt } from "@tabler/icons-react";
import { UserEmailContext } from "../context/UserEmailContext";
const Signup = () => {
  const { base_url } = React.useContext(BaseUrlContext);
  const userEmail = useContext(UserEmailContext).userEmail;
  const setUserEmail = useContext(UserEmailContext).setUserEmail;
  const [currentUserEmail, setcurrentUserEmail] = useState("");
  const [currentUserPassword, setcurrentUserPassword] = useState("");
  const [currentUser, setcurrentUser] = useState("");
  const getResponses = async () => {
    const response = await axios
      .post(
        `${base_url}/query/register/`,
        {
          Username: currentUser,
          Password: currentUserPassword,
          Email: userEmail,
        },
        {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        }
      )
      .then((response) => {
        setUserEmail(currentUserEmail);
        return response;
      })
      .catch((error) => {
        console.error(error);
        alert("server not running! a simulated response is being sent");
        const response = {
          data: {
            message: "simulation",
          },
        };
        return response;
      });
  };

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await getResponses();
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="text-white">
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold text-white">Sign Up</h1>
        {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setcurrentUserEmail(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
              />
              <IconMailAi className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>UserName</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setcurrentUser(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="text"
              />
              <IconUserBolt className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setcurrentUserPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
              />
              <IconLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl background-with-opacity">
            Sign up
          </button>
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link to="/" className="text-accent">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
