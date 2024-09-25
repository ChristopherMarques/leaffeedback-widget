import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "./serviceAccount.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
