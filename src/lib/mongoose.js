import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log('✅ MongoDB: Используется кэшированное подключение');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('🔌 MongoDB: Подключение к базе...');
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => {
      console.log('✅ MongoDB: Подключение успешно установлено');
      return mongoose;
    }).catch((err) => {
      console.error('❌ MongoDB: Ошибка подключения:', err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
