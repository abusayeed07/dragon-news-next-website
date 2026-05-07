import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Dragon News - Home | Latest Breaking News & Updates",
  description: "Get the latest breaking news, international headlines, sports scores, entertainment news, and in-depth analysis from Dragon News.",
  openGraph: {
    title: "Dragon News - Breaking News & Latest Updates",
    description: "Your trusted source for news from around the world.",
  },
};

const default_category_id = "01";

const HomePage = async () => {
  redirect(`/category/${default_category_id}`);
};

export default HomePage;
