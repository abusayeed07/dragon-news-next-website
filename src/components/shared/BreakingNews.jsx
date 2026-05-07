import React from "react";
import Marquee from "react-fast-marquee";
import breakingNewsData from '../../app/data/breakingNews.json'

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center bg-base-200 gap-5 container mx-auto px-3 py-3">
      <button className="btn bg-red-500 text-white hover:bg-red-600 border-none">Latest</button>
      <Marquee 
        pauseOnHover={true}
        speed={50}
        gradient={false}
        className="flex-1"
      >
        <div className="flex gap-8">
          {breakingNewsData.map((news) => (
            <div key={news.id} className="flex items-center gap-3">
              <span className="text-yellow-500">⭐</span>
              <span className="text-gray-700 font-medium hover:text-red-500 cursor-pointer transition-colors">
                {news.title}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;