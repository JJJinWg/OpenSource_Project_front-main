import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/database/dbConnect';
import NewsArticle from '@/database/models/articleModel';

/**
 * @description news_articles コレクションの全データを取得
 */
export async function GET(req: NextRequest) {
  await dbConnect();
  console.log('Database connected');

  try {
    const articles = await NewsArticle.find({});
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ message: 'Error fetching articles' }, { status: 500 });
  }
}
