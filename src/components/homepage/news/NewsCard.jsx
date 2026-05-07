"use client";

import React from "react";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { toast } from "react-toastify";

const NewsCard = ({ article }) => {
  if (!article) return null;

  return (
    <div className="border rounded-md overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="bg-slate-200 rounded-lg p-2">
          {/* Author info */}
          <div className="flex justify-between items-center bg-slate-200 p-4">
            <div className="flex gap-1 items-center">
              <Image
                src={article.author?.img}
                alt={article.author?.name}
                height={40}
                width={40}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold">{article.author?.name}</h2>
                <p className="text-xs">{article.author?.published_date.split(" ")[0] || "Recent"}</p>
              </div>
            </div>
            {/* Share & Bookmark Buttons */}
            <div className="flex gap-2 text-gray-500">
              <button
                className="hover:text-blue-600 transition-colors cursor-pointer"
                title="Save for later"
                onClick={() => {
                  localStorage.setItem(
                    `saved_${article._id}`,
                    JSON.stringify(article),
                  );
                  toast.success("Article saved!");
                }}
              >
                <CiBookmark size={20} />
              </button>
              <button
                className="hover:text-green-600 transition-colors cursor-pointer"
                title="Share"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Link copied!");
                  }
                }}
              >
                <CiShare2 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 mt-3">
          {article.title}
        </h3>

        {/* News Image */}
        <figure>
          <Image
            src={article.image_url}
            alt={article.title}
            width={300}
            height={300}
            className="w-full"
            onError={(e) => {
              // If image fails to load, use fallback
              e.target.src = FALLBACK_IMAGE;
            }}
          />
        </figure>

        {/* Description */}
        <div className="text-gray-500 text-sm mb-4 mt-4">
          {article.details?.slice(0, 330)}...
        </div>

        {/* Read More Link */}
        <Link
          href={`/news/${article._id}`}
          className="text-orange-600 hover:text-orange-800 text-sm font-medium inline-block mb-4"
        >
          Read More →
        </Link>

        {/* Divider */}
        <div className="divider my-3"></div>

        {/* Rating & Views */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <IoIosStar
                  key={star}
                  className={
                    star > Math.round(article.rating?.number || 0)
                      ? "text-gray-300"
                      : "text-yellow-400"
                  }
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {article.rating?.number || 0}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <MdRemoveRedEye size={18} />
            <span className="text-sm">{article.total_view || 0} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
