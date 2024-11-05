import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";
const Nav = () => {
  return (
    <>
      <nav className="max-w-full bg-white">
        <div className="my-auto p-6">
          <ul className="flex justify-between items-center list-none">
            <li>
              <img src={Logo} alt="Apple"></img>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                Store
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                Mac
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                ipad
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                iphone
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                watch
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                Airpods
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                Tv & Home
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                Entertainment
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                Accessories
              </a>
            </li>
            <li>
              <a className="list-none text-xl hidden lg:flex" href="#">
                Support
              </a>
            </li>
            <li>
              <img className="hover:scale-150" src={Search} alt="search"></img>
            </li>
            <li>
              <img className="hover:scale-150" src={Store} alt="store   "></img>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
