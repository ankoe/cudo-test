import Link from "next/link";
import { MdOutlineLogout, MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

export default function LayoutTopbar() {
  return (
    <div className="bg-[#f8f9fa] py-4 px-5 w-full flex justify-between">
      <div>
        <h2 className="text-xl font-bold">Dashboard Attendance</h2>
      </div>
      <div className="flex gap-5 items-center">
        <div className="hs-dropdown relative inline-flex">
          <button
            id="hs-dropdown-default"
            type="button"
            className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            --All Organization--
          </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full text-xs z-50"
            aria-labelledby="hs-dropdown-default"
          >
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              href="#"
            >
              --All Organization--
            </Link>
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              href="#"
            >
              Organization 1
            </Link>
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              href="#"
            >
              Organization 2
            </Link>
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              href="#"
            >
              Organization 3
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <span className="me-3 text-sm font-medium text-gray-500 ">
            <MdSunny />
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-500 ">
              <FaMoon />
            </span>
          </label>
        </div>

        <Link href="/">
          <MdOutlineLogout className="text-gray-500 text-lg" />
        </Link>
      </div>
    </div>
  );
}
