"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Header = () => {
  //   const [showContactDetails, setShowContactDetails] = useState(true);
  //   const [lastScrollY, setLastScrollY] = useState(0);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const currentScrollY = window.scrollY;

  //       // Show shadow if scrolled down
  //       setShowShadow(currentScrollY > 0);

  //       // Show/hide contact details based on scroll direction
  //       if (currentScrollY > lastScrollY) {
  //         // Scrolling down
  //         setShowContactDetails(false);
  //       } else {
  //         // Scrolling up
  //         setShowContactDetails(true);
  //       }

  //       // Update last scroll position
  //       setLastScrollY(currentScrollY);
  //     };

  //     // Attach scroll event listener
  //     window.addEventListener("scroll", handleScroll);

  //     // Cleanup event listener on component unmount
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [lastScrollY]);

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
        {/* )} */}
        {/* <div className="flex gap-10">
               <button className="text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black">Find a Job</button>
               <button className="bg-yellow-400 px-10 py-5 rounded-full font-bold hover:bg-white">Hire Talent</button>
           </div> */}
      </div>
    </div>
  );
};

export default Header;
