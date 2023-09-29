import {
  type CollectionReference,
  type Firestore,
  type WithFieldValue,
  addDoc,
  collection,
  getDocs
} from 'firebase/firestore';

import { PermissionDenied } from '../errors/PermissionDenied';
import { type AppCollectionsData, type AppCollectionsNames } from '../models/database';
import db from './config';

class FirebaseDataBase {
  constructor(private readonly db: Firestore) {}

  getCollection = async (collectionName: AppCollectionsNames) => {
    const col = this.getCollectionRef(collectionName);
    const snapshot = await getDocs(col);
    const docs = snapshot.docs;

    const data = docs.map((doc) => doc.data());
    return data;
  };

  createDocument = async <T>(collectionName: AppCollectionsNames, data: WithFieldValue<T>) => {
    const col = this.getCollectionRef(collectionName);
    try {
      return await addDoc(col, data);
    } catch (error) {
      throw new PermissionDenied('Forbidden');
    }
  };

  private getCollectionRef(collectionName: AppCollectionsNames) {
    return collection(this.db, collectionName) as CollectionReference<AppCollectionsData[AppCollectionsNames]>;
  }
}

const firebaseDataBase = new FirebaseDataBase(db);
export default firebaseDataBase;
