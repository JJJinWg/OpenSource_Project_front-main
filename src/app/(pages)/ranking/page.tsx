import React from "react";
import { NextPage } from "next";
import AspectRatioCard from "@/components/AspectRatioCard";

const RankingPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold">TOP100</h1>
      <AspectRatioCard />
    </div>
  );
};

export default RankingPage;
