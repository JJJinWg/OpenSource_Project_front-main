
// export default dbConnect;
import mongoose from 'mongoose';
const MONGODB_URI='mongodb+srv://theBuleocean:opensource418@newssun.ts97rhi.mongodb.net/news_database?retryWrites=true&w=majority'
// const MONGODB_URI =
//   'mongodb+srv://Jiseungmin:sj01080108%40%40@bus.blwsfug.mongodb.net/Bus?retryWrites=true&w=majority';
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function DbConnect() {
  await mongoose.connect(MONGODB_URI);
}

export default DbConnect;
