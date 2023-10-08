import React, { useEffect } from "react";
import "../input.css";
import "../style.css";

import {
  BookmarkIcon,
  DevicePhoneMobileIcon,
  InformationCircleIcon,
  Bars3Icon,
  UserCircleIcon,
  DocumentCheckIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { IconUserBolt } from "@tabler/icons-react";

export function Navbar() {
  return (
    <div className="pr-2 mr-2 z-50">
      <div
        className={`navbar bg-gray-400 rounded-xl text-secondary-content flex-row-reverse justify-between m-2 
          md:flex-row`}
      >
        {/* name */}
        <div className="flex-row-reverse px-1 gap-0 md:flex-row">
          {/* <UserCircleIcon className="w-6 h-6" /> */}
          <IconUserBolt className="w-6 h-6" />
          <NavLink to={"/"}>
            <div className="btn btn-ghost normal-case text-base md:text-lg">
              STAR APP
            </div>
          </NavLink>
        </div>
        {/* maincontents */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-base md:text-lg">
              <NavLink to={"/home"} id="contact_element">
                <QuestionMarkCircleIcon className="w-6 h-6" />
                Query
              </NavLink>
            </li>
            <li className="text-base md:text-lg">
              <NavLink to={"/docs"} id="contact_element">
                <DocumentCheckIcon className="w-6 h-6" />
                Docs
              </NavLink>
            </li>
            <li className="text-base md:text-lg">
              <NavLink to={"/profile"} id="contact_element">
                <UserCircleIcon className="w-6 h-6" />
                Profile
              </NavLink>
            </li>
            <li className="text-base md:text-lg">
              <NavLink to={"/signin"} id="contact_element">
                <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
