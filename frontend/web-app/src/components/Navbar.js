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
    <div className="pr-4 mr-4 z-50">
      <div
        className={`navbar bg-secondary rounded-xl text-secondary-content flex-row-reverse justify-between m-4 
			md:flex-row`}
      >
        {/* name */}
        <div
          className="flex-row-reverse px-2 gap-0
			md:flex-row"
        >
          {/* <UserCircleIcon className="w-8 h-8" /> */}
          <IconUserBolt className="w-8 h-8" />
          <NavLink to={"/"}>
            <div className="btn btn-ghost normal-case text-lg md:text-2xl">
              STAR APP
            </div>
          </NavLink>
        </div>
        {/* maincontents */}
        <div
          className="hidden
			   md:flex"
        >
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg md:text-2xl">
              <NavLink to={"/"} id="contact_element">
                <QuestionMarkCircleIcon className="w-8 h-8" />
                Query
              </NavLink>
            </li>
            <li className="text-lg md:text-2xl">
              <NavLink to={"/docs"} id="contact_element">
                <DocumentCheckIcon className="w-8 h-8" />
                Docs
              </NavLink>
            </li>
            <li className="text-lg md:text-2xl">
              <NavLink to={"/profile"} id="contact_element">
                <UserCircleIcon className="w-8 h-8" />
                Profile
              </NavLink>
            </li>
            <li className="text-lg md:text-2xl">
              <NavLink to={"/signin"} id="contact_element">
                <ArrowLeftOnRectangleIcon className="w-8 h-8" />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Theme */}

        {/* hamburger */}
        <div className="md:hidden">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="text-lg md:text-2xl">
                  <Bars3Icon className="w-8 h-8" />
                </summary>
                <ul className="p-2 bg-base-100 text-base-content z-50">
                  <li className="text-lg md:text-2xl">
                    <NavLink to={"/projects"} id="contact_element">
                      <BookmarkIcon className="w-8 h-8" />
                      Projects
                    </NavLink>
                  </li>
                  <li className="text-lg md:text-2xl">
                    <NavLink to={"/about"} id="contact_element">
                      <InformationCircleIcon className="w-8 h-8" />
                      About
                    </NavLink>
                  </li>
                  <li className="text-lg md:text-2xl">
                    <NavLink to={"/contact"} id="contact_element">
                      <DevicePhoneMobileIcon className="w-8 h-8" />
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
