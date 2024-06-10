import mongoose from 'mongoose';

const NewsArticlesSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    number: { type: Number, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true }
  },
  {
    collection: 'news_articles'
  }
);

const NewsArticle = mongoose.models.NewsArticle || mongoose.model('NewsArticle', NewsArticlesSchema);

export default NewsArticle;