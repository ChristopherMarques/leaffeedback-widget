// import mongoose from "mongoose";

// declare global {
//   // eslint-disable-next-line no-var
//   var mongoose:
//     | {
//         conn: mongoose.Connection | null;
//         promise: Promise<mongoose.Connection> | null;
//       }
//     | undefined;
// }

// const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (!cached) {
//     throw new Error("Conexão com o MongoDB não inicializada");
//   }

//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
//       return mongoose.connection;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
