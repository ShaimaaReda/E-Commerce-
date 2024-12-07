import React from "react";
import {NavLink} from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <nav className="py-4 -top-0 -left-0 bg-gray-100">
        <div className="container container mx-auto  flex content-center items-center justify-between">
          <h1 className=" text-2xl font-extrabold">FreshCard</h1>
          <div className="">
            <ul className="flex  gap-3 item-center ms-auto">
              <li>
                <NavLink to="/Login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
