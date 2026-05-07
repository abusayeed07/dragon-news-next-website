"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import userImg from "../../assets/user.png";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={pathName === "/" ? "bg-red-600 text-white" : ""}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={pathName === "/about" ? "bg-red-600 text-white" : ""}
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={pathName === "/career" ? "bg-red-600 text-white" : ""}
          href="/career"
        >
          Career
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar px-4 mt-8 container mx-auto">
      {/* Left side - Mobile menu button with dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>

      {/* Center - Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right side - Avatar dropdown */}
      <div className="navbar-end flex gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                src={userImg}
                height={200}
                width={200}
                alt="user Image"
              ></Image>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <Link href="/login"><button className="btn bg-gray-700 text-white px-8">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
