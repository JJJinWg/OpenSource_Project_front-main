export type Article = {
    urlToImage?: string | null;
    title: string;
    content: string;
    publishedAt?: string;
    sentiment?: "negative" | "neutral" | "positive"; // 仮の感情分析結果
}

export type AspectRatioCardProps ={
    articles: Article[];
}
