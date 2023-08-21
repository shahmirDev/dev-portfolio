"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { usePathname } from "next/navigation";

// TODO add a mobile friendly navbar

const Navbar = () => {
  //remove first character from the current path
  const activePath = usePathname() === "/" ? "Home" : usePathname().slice(1);
  const pages = ["Home", "Work", "Contact"];
  const [hovering, setHovering] = useState<string | null>(pages[0]);

  // testing path
  // console.log(`Path is ${activePath}`);

  return (
    <nav className="fixed w-full h-20 z-[100] ">
      <div className="flex justify-end items-center h-full px-20 gap-8">
        {pages.map((page) => (
          <motion.div
            whileHover={{ scale: 1.1, originY: 0 }}
            onHoverStart={() => {
              setHovering(page);
            }}
            className={`relative px-4 text-right text-xl font-medium
              text-white cursor-pointer`}
          >
            {page === hovering && (
              <motion.div
                layoutId="hover-page"
                className="absolute inset-0 bg-neutral-600"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", duration: 5 }}
              />
            )}
            <Link
              className="relative z-10 mix-blend-exclusion"
              href={`/${page}`}
            >
              {page}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
