"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Header = () => {

  return (
    <div className="w-full bg-[#00283C] flex justify-around items-center gap-10 drop-shadow-xl">
      {/* logo */}
      <div className="text-xl p-5 text-white ">Job Portal</div>

      {/* Navbar titles */}
      <div className="flex gap-12 text-lg text-white justify-center items-center">
        <Link href="/about">About</Link>
        <Link href="/">Services</Link>
        <Link href="/contact">Contact us</Link>
      </div>
      {/* contact details */}
      <div className="flex flex-col gap-5 p-5">
        {/* {showContactDetails && ( */}
        <div className="flex gap-10 text-sm  ml-6 text-white">
          {/* <p>English</p> */}
          <p>7897897890</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
