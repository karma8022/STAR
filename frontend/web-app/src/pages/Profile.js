import React from "react";

const Profile = () => {
  return (
    <div id="parent" className="text-white">
      <div id="container" className="flex gap-2">
        <div
          id="left"
          className="card min-w-[35%] min-h-[600px] px-4 py-4 background-with-opacity gap-2"
        >
          <div className="min-h-[75%] rounded-2xl  background-with-opacity4 mt-20 mr-12 ml-12">
            <div className="flex items-center p-4">
              <div className="avatar"> </div>
              <div className="ml-4">
                <figure className="pl-24 pt-24 ">
                  <img
                    className=" w-56 h-56 rounded-full"
                    src="https://source.unsplash.com/random"
                    alt="Profile Image"
                  />
                </figure>
                <h2 className="text-xl font-semibold pl-44 pt-4">John Doe</h2>
                <p className="text-gray-400 pl-40 pt-4">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="right"
          className="card min-w-[65%] min-h-[600px] px-4 py-4 background-with-opacity3"
        >
          <div className="card bg-white min-w-[65%] min-h-[100%] background-with-opacity4">
            <div className="pt-12 pb-8 pl-[350px] font-bold text-4xl">
              Previous Queries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

