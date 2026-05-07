import { getNewsDetailsById } from "@/lib/dataFetching";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoIosStar, IoLogoInstagram } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import swimmingImg from "../../../../assets/swimming.png";
import classImg from "../../../../assets/class.png";
import playGroundImg from "../../../../assets/playground.png";
import bgImg from "../../../../assets/bg.png";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  console.log(id, "params");
  const news = await getNewsDetailsById(id)
  console.log(news, "news");

  return {
    title: news.title,
    description: news.details,
  }
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log("News ID:", id);

  const news = await getNewsDetailsById(id);
  console.log("News:", news);

  if (!news) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">
        {/* Main Content - 8 columns */}
        <div className="col-span-12 lg:col-span-8">
          {/* Newspaper Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-2 font-serif">
            Dragon News
          </h1>

          {/* Decorative Line */}
          <div className="border-t-2 border-gray-300 my-4"></div>

          {/* Featured Image */}
          {news.image_url && (
            <div className="relative w-full h-96 mb-6">
              <Image
                src={news.image_url}
                alt={news.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}

          {/* Article Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {news.title}
          </h2>

          {/* News Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line text-justify">
              {news.details}
            </div>
          </div>

          {/* Back to Category Link */}
          <button className=" btn bg-pink-700 mt-5">
            <Link
              href={`/category/${news.category_id}`}
              className="text-white hover:text-blue-800 text-sm"
            >
              ← All news in this category
            </Link>
          </button>
        </div>

        {/* Right Sidebar */}
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
      </div>
    </div>
  );
};

export default NewsDetailsPage;
