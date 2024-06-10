"use client";
import React, { useEffect, useState } from "react";
import CategorizeNavigation from "@/components/CategorizeNavigation";
import CategoryRatioCard02 from "@/components/NewsCard/CategoryRatioCard02";
import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/lottie/loading.json";

interface Article {
  urlToImage: string;
  title: string;
  content: string;
  publishedAt?: string;
}

// 画像URLをチェックし、無効な場合にデフォルト画像を返す関数
const checkImageUrl = (url: string) => {
  if (!url || url === "이미지 없음") {
    return "/default-image.jpg"; // デフォルト画像のパス
  }
  return url;
};

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticleData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/CategoryNewsAricle${selectedCategory ? `?category=${selectedCategory}` : ""}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          const formattedData = data.map((item: any) => ({
            urlToImage: checkImageUrl(item.urlToImage), // 画像URLをチェック
            title: item.title,
            content: item.content,
            publishedAt: item.publishedAt,
          }));
          setArticles(formattedData);
        } else {
          console.error("Invalid data structure: ", data);
        }
      } catch (error) {
        console.error("Failed to fetch articles: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [selectedCategory]);

  const categories = ["경제", "정치", "사회", "생활", "세계", "IT", "기타"];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="flex flex-row items-start">
        <CategorizeNavigation categories={categories} onSelect={handleCategorySelect} />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Lottie loop animationData={lottieJson} play style={{ width: 200, height: 200 }} />
        </div>
      ) : (
        <CategoryRatioCard02 articles={articles} />
      )}
    </div>
  );
}
