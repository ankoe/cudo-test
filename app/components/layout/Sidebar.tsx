"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHouse } from "react-icons/fa6";

export default function LayoutSidebar() {
  const [menu, setMenu] = useState([
    { url: "/" },
    { url: "/" },
    { url: "/" },
    { url: "/" },
    { url: "/" },
    { url: "/" },
  ]);

  return (
    <div className="bg-red-800 w-20 h-screen">
      <div className="pt-28">
        {menu.map((item, index) => (
          <Link
            href={item.url}
            className="hover:bg-red-500 w-full p-2 block rounded-md"
            key={index}
          >
            <div className="bg-gray-100 p-2 rounded-md w-10 h-10 text-center flex justify-center items-center">
              <FaHouse />
              <span className="hidden">Dashboard</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
