import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/database/dbConnect';
import { NewsArticle_Economy, NewsArticle_IT, NewsArticle_Other, NewsArticle_Society, NewsArticle_Life, NewsArticle_World, NewsArticle_Politics } from '@/database/models/M_article';
import NewsArticle from '@/database/models/articleModel';

/**
 * /api/CategoryNewsArticle
 * @description 지정된 카테고리에 따라 해당 컬렉션에서 전체 데이터를 가져와 JSON 형식으로 반환한다.
 * @param {NextRequest} req - 요청 객체. 카테고리를 포함한 쿼리 파라미터를 포함한다.
 * @returns {NextResponse} 카테고리를 기반으로 가져온 기사 데이터를 포함한 응답. 카테고리가 유효하지 않은 경우 오류 메시지를 포함한 응답을 반환한다.
 */
export async function GET(req: NextRequest) {
  await dbConnect();
  console.log('NewDatabase connected');

  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  let model;

  if (!category) {
    model = NewsArticle_Economy;
    console.log('Default NewsArticle');
  } else {
    switch (category) {
      case '경제':
        model = NewsArticle_Economy;
        console.log('Economy');
        break;
      case '정치':
        model = NewsArticle_Politics;
        console.log('Government');
        break;
      case '사회':
        model = NewsArticle_Society;
        console.log('Social');
        break;
      case '생활':
        model = NewsArticle_Life;
        console.log('Life');
        break;
      case '세계':
        model = NewsArticle_World;
        console.log('Worlds');
        break;
      case 'IT':
        model = NewsArticle_IT;
        console.log('IT');
        break;
      case '기타':
        model = NewsArticle_Other;
        console.log('Other');
        break;
      default:
        return NextResponse.json({ message: 'Invalid category' }, { status: 400 });
    }
  }

  try {
    const articles = await model.find({});
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ message: 'Error fetching articles' }, { status: 500 });
  }
}
