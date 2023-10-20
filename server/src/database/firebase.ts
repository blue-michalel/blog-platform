import {
  type CollectionReference,
  type Firestore,
  type WithFieldValue,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs
} from 'firebase/firestore';

import { PermissionDenied } from '../errors/PermissionDenied';
import { type AppCollectionsData, type AppCollectionsNames } from '../models/database';
import db from './config';

class FirebaseDataBase {
  constructor(private readonly db: Firestore) {}

  getCollection = async (collectionName: AppCollectionsNames, fields?: string[]) => {
    const col = this.getCollectionRef(collectionName);
    const snapshot = await getDocs(col);
    const docs = snapshot.docs;

    const data = docs.map((doc) => {
      if (fields != null) {
        const data = fields.reduce<Record<string, unknown>>((acc, key) => {
          acc[key] = doc.get(key);
          return acc;
        }, {});

        return {
          ...data,
          id: doc.id
        };
      }

      return {
        ...(doc.data() as Record<string, unknown>),
        id: doc.id
      };
    });

    return data;
  };

  getDocument = async (collectionName: AppCollectionsNames, id: string) => {
    const element = doc(this.db, collectionName, id);
    const snap = getDoc(element);

    return (await snap).data();
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
