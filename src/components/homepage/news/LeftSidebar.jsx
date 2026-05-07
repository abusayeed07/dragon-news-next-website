import Link from "next/link";
import React from "react";
import groupImg1 from "../../../assets/group-1.png"
import groupImg2 from "../../../assets/group-2.png"
import groupImg3 from "../../../assets/group-3.png"
import {
  FaFire,
  FaNewspaper,
  FaGlobe,
  FaFutbol,
  FaFilm,
  FaPalette,
  FaMusic,
  FaThLarge,
} from "react-icons/fa";
import Image from "next/image";


const LeftSidebar = ({ categories, activeId }) => {
  // Icon mapping for each category
  const getIcon = (categoryName) => {
    const iconMap = {
      "Breaking News": <FaFire className="text-red-500" />,
      "Regular News": <FaNewspaper />,
      "International News": <FaGlobe />,
      Sports: <FaFutbol />,
      Entertainment: <FaFilm />,
      Culture: <FaMusic />,
      Arts: <FaPalette />,
      "All News": <FaThLarge />,
    };
    return iconMap[categoryName] || <FaNewspaper />;
  };

  return (
    <div className="col-span-3">
      <div className="text-gray-700 font-bold p-4 mb-5 border-l-4 border-cyan-500 bg-linear-to-r from-gray-50 to-white rounded-r-lg">
        All Categories
      </div>

      <ul className="flex flex-col gap-2">
        {categories.news_category?.map((category) => {
          const isActive = activeId === category.category_id;
          return (
            <li key={category.category_id}>
              <Link
                href={`/category/${category.category_id}`}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-md"
                    : "bg-base-100 text-gray-600 hover:bg-cyan-50 hover:text-cyan-600 hover:shadow-sm"
                }`}
              >
                <span
                  className={`text-lg ${isActive ? "text-white" : "text-gray-400 group-hover:text-cyan-500"}`}
                >
                  {getIcon(category.category_name)}
                </span>
                <span className="flex-1 font-medium">
                  {category.category_name}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="space-y-8 mt-3">
                <Image
                  src={groupImg1}
                  height={400}
                  width={400}
                  alt="Swimming image"
                ></Image>
                <Image
                  src={groupImg2}
                  height={400}
                  width={400}
                  alt="Swimming image"
                ></Image>
                <Image
                  src={groupImg3}
                  height={400}
                  width={400}
                  alt="Swimming image"
                ></Image>
              </div>
    </div>
  );
};

export default LeftSidebar;
