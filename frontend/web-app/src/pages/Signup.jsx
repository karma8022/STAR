import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import "../style.css";
const Signup = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-8 bg-white rounded-2xl text-center mt-28">
        <div className="  px-4 py-8 ">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form>
            <div className="my-4 text-center">
              <label>Email</label>
              <div className="my-2  rounded-2xl">
                <input
                  className="w-[50%] p-2 bg-primary border border-input rounded-2xl"
                  type="email"
                />
              </div>
            </div>
            <div className="my-4 text-center">
              <label>Password</label>
              <div className="my-2 w-full relative rounded-2xl">
                <input
                  className="w-[50%] p-2 bg-primary border border-input rounded-2xl"
                  type="password"
                />
              </div>
              <button className=" my-2 p-3 bg-button text-btnText rounded-2xl text-center bg-pink-300">
                Sign up
              </button>
            </div>
          </form>
          <p className="my-4 text-center">Already have an account? </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
