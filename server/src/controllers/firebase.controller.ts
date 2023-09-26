import { type CollectionReference, type Firestore, collection, getDocs } from 'firebase/firestore';

import db from '../firebase';
import { type AppCollectionsData, type AppCollectionsNames } from '../models/database';

class FirebaseController {
  constructor(private readonly db: Firestore) {}

  getCollection = async <CName extends AppCollectionsNames>(collectionName: CName) => {
    const col = collection(this.db, collectionName) as CollectionReference<AppCollectionsData[CName]>;
    const snapshot = await getDocs(col);
    const docs = snapshot.docs;

    const data = docs.map((doc) => doc.data());
    return data;
  };
}

const firebaseController = new FirebaseController(db);
export default firebaseController;
