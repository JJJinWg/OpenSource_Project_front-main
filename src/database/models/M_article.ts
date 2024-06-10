import mongoose from 'mongoose';

const NewsArticlesSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    category: { type: Number, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true }
  }
);

const NewsArticle_Economy = mongoose.models.NewsArticle_Economy || mongoose.model('NewsArticle_Economy', NewsArticlesSchema, 'Economy');
const NewsArticle_IT = mongoose.models.NewsArticle_IT || mongoose.model('NewsArticle_IT', NewsArticlesSchema, 'IT');
const NewsArticle_Other = mongoose.models.NewsArticle_Other || mongoose.model('NewsArticle_Other', NewsArticlesSchema, 'Others');
const NewsArticle_Society = mongoose.models.NewsArticle_Society || mongoose.model('NewsArticle_Society', NewsArticlesSchema, 'Society');
const NewsArticle_Life = mongoose.models.NewsArticle_Life || mongoose.model('NewsArticle_Life', NewsArticlesSchema, 'Lifestyle');
const NewsArticle_World = mongoose.models.NewsArticle_World || mongoose.model('NewsArticle_World', NewsArticlesSchema, 'World');
const NewsArticle_Politics = mongoose.models.NewsArticle_Politics || mongoose.model('NewsArticle_Politics', NewsArticlesSchema, 'Politics');

export { NewsArticle_Economy, NewsArticle_IT, NewsArticle_Other, NewsArticle_Society, NewsArticle_Life, NewsArticle_World, NewsArticle_Politics };
