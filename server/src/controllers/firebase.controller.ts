import {
  type CollectionReference,
  type Firestore,
  type WithFieldValue,
  addDoc,
  collection,
  getDocs
} from 'firebase/firestore';

import db from '../firebase';
import { type AppCollectionsData, type AppCollectionsNames } from '../models/database';
import { type Post } from '../models/posts/post';

class FirebaseController {
  constructor(private readonly db: Firestore) {}

  getCollection = async (collectionName: AppCollectionsNames) => {
    const col = this.getCollectionRef(collectionName);
    const snapshot = await getDocs(col);
    const docs = snapshot.docs;

    const data = docs.map((doc) => doc.data());
    return data;
  };

  createDocument = async <T extends Post>(collectionName: AppCollectionsNames, data: WithFieldValue<T>) => {
    const col = this.getCollectionRef(collectionName);
    return await addDoc(col, data);
  };

  private getCollectionRef(collectionName: AppCollectionsNames) {
    return collection(this.db, collectionName) as CollectionReference<AppCollectionsData[AppCollectionsNames]>;
  }
}

const firebaseController = new FirebaseController(db);
export default firebaseController;
