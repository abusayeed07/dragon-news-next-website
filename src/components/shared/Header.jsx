import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { format, compareAsc } from "date-fns";

const Header = () => {
  return (
    <div className="py-8 mx-auto text-center space-y-2">
      <div className="flex justify-center">
        <Image src={logo} width={300} height={200} alt="Logo" />
      </div>
      <p className="text-gray-500 ">Journalism Without Fear or Favour</p>
      <p className="text-gray-500 text-lg">{format(new Date(), "EEEE, MMM dd, yyy")}</p>
    </div>
  );
};

export default Header;
