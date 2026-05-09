"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import userImg from "../../assets/user.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "User");

  const pathName = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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

  // Logout function
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await authClient.signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoggingOut(false);
    }
  };

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
      <div className="navbar-end">
        {user ? (
          // Logged In - Show Avatar with Hello message
          <div className="flex items-center gap-4">
            {/* Hello Message */}
            <div className="hidden md:block text-right">
              <p className="text-xs text-gray-500">Welcome back,</p>
              <p className="text-sm font-semibold text-gray-700">
                Hello {user.name?.split(" ")[0] || "User"}
              </p>
            </div>
            
            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    src={user.image || user.img || userImg}
                    height={40}
                    width={40}
                    alt={user.name || "User"}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li className="menu-title border-b pb-2">
                  <div>
                    <p className="font-semibold">{user.name || "User"}</p>
                    <p className="text-xs text-gray-500 font-normal">{user.email}</p>
                  </div>
                </li>
                <li><Link href="/profile">👤 Profile</Link></li>
                <li><Link href="/settings">⚙️ Settings</Link></li>
                <li><Link href="/saved">🔖 Saved Articles</Link></li>
                <li className="border-t mt-1 pt-1">
                  <button 
                    onClick={handleLogout} 
                    className="text-red-600 hover:text-red-700"
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut ? "Logging out..." : "🚪 Logout"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          // Logged Out - Show Login Button
          <Link href="/login">
            <button className="btn bg-gray-700 text-white px-6 hover:bg-gray-600">
              🔑 Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;