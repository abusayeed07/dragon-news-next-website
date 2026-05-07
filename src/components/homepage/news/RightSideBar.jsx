"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import swimmingImg from "../../../assets/swimming.png";
import classImg from "../../../assets/class.png";
import playGroundImg from "../../../assets/playground.png";
import bgImg from '../../../assets/bg.png'

const RightSideBar = () => {
  return (
    <div className="col-span-3 space-y-8">
      {/* Login with section */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-gray-600 font-bold mb-4 pb-2 border-b-2 border-cyan-500 inline-block">
          Login With
        </h2>

        <div className="space-y-3 mt-4">
          <a
            href={"https://accounts.google.com"}
            target="_blank"
            className="w-full px-4 py-2 text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors rounded-lg flex items-center justify-center gap-2"
          >
            <FaGoogle /> Google
          </a>

          <a
            href={"https://github.com/login/oauth/authorize?"}
            target="_blank"
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors rounded-lg flex items-center justify-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      {/* Find Us On section */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-gray-600 font-bold mb-4 pb-2 border-b-2 border-cyan-500 inline-block">
          Find Us On
        </h2>

        <div className="flex flex-col space-y-3 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-2 text-blue-700 border border-blue-700 hover:bg-blue-50 rounded-lg flex items-center justify-center gap-2"
          >
            <FaFacebookF /> Facebook
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-2 text-sky-500 border border-sky-500 hover:bg-sky-50 rounded-lg flex items-center justify-center gap-2"
          >
            <FaTwitter /> Twitter
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-2 text-pink-600 border border-pink-600 hover:bg-pink-50 rounded-lg flex items-center justify-center gap-2"
          >
            <IoLogoInstagram /> Instagram
          </a>
        </div>
      </div>

      {/* Q-Zone section */}
      <div className="bg-base-200 rounded-lg shadow-sm p-4">
        <h2 className="text-gray-600 font-bold mb-4 pb-2 border-b-2 border-cyan-500 inline-block">
          Q-Zone
        </h2>
        <div className="space-y-8">
          <Image
            src={swimmingImg}
            height={400}
            width={400}
            alt="Swimming image"
          ></Image>
          <Image
            src={classImg}
            height={400}
            width={400}
            alt="Swimming image"
          ></Image>
          <Image
            src={playGroundImg}
            height={400}
            width={400}
            alt="Swimming image"
          ></Image>
        </div>
      </div>

      <div className="mb-12">
        <Image src={bgImg} width={350} height={700} alt="BG Image"></Image>
      </div>
    </div>
  );
};

export default RightSideBar;
