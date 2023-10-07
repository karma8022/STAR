import React from "react";

const Profile = () => {
  return (
    <div id="parent">
      <div id="container" className="flex gap-2">
        <div
          id="left"
          className="card min-w-[35%] min-h-[600px] px-4 py-4 bg-pink-300 gap-2"
        >
          <div className="card min-w-[80%] min-h-[100%] bg-base-100 shadow-xl">
            <div className="flex items-center p-4">
              <div className="avatar"> </div>
              <div className="ml-4">
                <figure className="pl-32 pt-40 ">
                  <img
                    className=" w-64 h-64 rounded-full"
                    src="https://source.unsplash.com/random"
                    alt="Profile Image"
                  />
                </figure>
                <h2 className="text-xl font-semibold pl-52 pt-4">John Doe</h2>
                <p className="text-gray-600 pl-48 pt-4">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="right"
          className="card min-w-[65%] min-h-[600px] px-4 py-4 bg-slate-500"
        >
          <div className="card bg-white min-w-[65%] min-h-[100%]">
            <div className="pt-12 pb-8 pl-[350px] font-bold text-4xl">
              Previous Queries
            </div>
            <div className="pl-12 pr-12">
              <div className="min-h-[100px] px-4 py-4 bg-slate-400 border rounded-2xl mb-4"></div>
              <div className="min-h-[100px] px-4 py-4 bg-slate-400 border rounded-2xl mb-4"></div>
              <div className="min-h-[100px] px-4 py-4 bg-slate-400 border rounded-2xl mb-4"></div>
              <div className="min-h-[100px] px-4 py-4 bg-slate-400 border rounded-2xl mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
