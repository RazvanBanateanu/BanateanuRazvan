import React from "react";
import Link from "next/link";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <>
      <div className="w-[100vw] h-20 bg-emerald-800 sticky top-0 z-50">
        <nav className="px-4 flex justify-between items-center h-20">
          <h1 className=" text-2xl font-bold text-[#ffebcd] ml-5" >B.R.</h1>
          <ul className="hidden md:flex gap-x-6 text-white mr-5">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/mystack">
                <p>My Stack</p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <p>Projects</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
        <Modal />
      </div>
    </>
  );
};

export default Navbar;