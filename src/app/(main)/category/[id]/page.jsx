import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import React from "react";
import { getCategories, getNewsByCategoriesId } from "@/lib/dataFetching";
import NewsCard from "@/components/homepage/news/NewsCard";

const NewsCategoriesPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoriesId(id);

  return (
    <div className="grid grid-cols-12 gap-5 pt-8 container mx-auto">
      <LeftSidebar categories={categories} activeId={id} />

      <div className="col-span-6">
        <h2 className="font-bold text-gray-700 mb-6 pb-2 border-b-2 border-gray-200">
          Dragon News Home
        </h2>

        {/* News Count */}
        <div className="bg-gray-100 rounded-md p-3 mb-5 text-gray-600 text-sm">
          {news?.length || 0} News Found
        </div>

        {/* ONLY THIS - NewsCard handles everything! */}
        <div className="space-y-6">
          {news?.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {(!news || news.length === 0) && (
          <div className="text-center py-12 bg-white rounded-lg border">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No News Found
            </h3>
            <p className="text-gray-500">No articles available at the moment.</p>
          </div>
        )}
      </div>

      <RightSideBar />
    </div>
  );
};

export default NewsCategoriesPage;