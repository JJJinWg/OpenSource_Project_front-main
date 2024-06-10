"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

// ArticleDataのデータ構造を反映した型定義
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

const AspectRatioCard: React.FC = () => {
  // Article型の配列として状態を管理
  const [ArticleData, setArticleData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await fetch("/api/ArticleData");
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
          setArticleData(formattedData);
        } else {
          console.error("Invalid data structure: ", data);
        }
      } catch (error) {
        console.error("Failed to fetch articles: ", error);
      }
    };

    fetchArticleData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-5 overflow-y-auto h-screen">
      {ArticleData.map((article, index) => (
        <AlertDialog key={index}>
          <AlertDialogTrigger asChild>
            <div className="border border-gray-300 rounded-md">
              <div className="w-full h-15">
                <AspectRatio ratio={20 / 9}>
                  <Image
                    src={article.urlToImage}
                    alt="Article Image"
                    className="rounded-md object-cover"
                    layout="fill"
                  />
                </AspectRatio>
                <div className="p-2 h-full">
                  <div
                    className="font-bold text-lg mt-1 overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {article.title}
                  </div>
                </div>
              </div>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AspectRatio ratio={20 / 9}>
                <Image
                  src={article.urlToImage}
                  alt="Article Image"
                  className="rounded-md object-cover"
                  layout="fill"
                />
              </AspectRatio>
              <AlertDialogTitle>{article.title}</AlertDialogTitle>
              <div>{article.publishedAt}</div>
            </AlertDialogHeader>
            <AlertDialogDescription className="max-h-48 overflow-y-auto">
              {article.content}
            </AlertDialogDescription>
            <AlertDialogFooter>
              <div className="flex justify-center">
                <AlertDialogCancel>
                  <X />
                </AlertDialogCancel>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </div>
  );
};

export default AspectRatioCard;
