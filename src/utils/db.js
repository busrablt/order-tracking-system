"use strict";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

class DB {
  constructor() {
    const {
      VUE_APP_API_KEY: apiKey,
      VUE_APP_AUTH_DOMAIN: authDomain,
      VUE_APP_PROJECT_ID: projectId,
      VUE_APP_STORAGE_BUCKET: storageBucket,
      VUE_APP_MESSAGING_SENDER_ID: messagingSenderId,
      VUE_APP_APP_ID: appId,
      VUE_APP_MEASUREMENT_ID: measurementId,
    } = process.env;

    const firebaseConfig = {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId,
    };
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }
  async read(collectionName) {
    const querySnapshot = await getDocs(collection(this.db, collectionName));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  }
  async create(collectionName, data) {
    const docRef = await addDoc(collection(this.db, collectionName), data);
    return docRef.id;
  }
  async createWithId(collectionName, id, data) {
    const docRef = doc(this.db, collectionName, id);
    await setDoc(docRef, data);
    return id;
  }
  async update(collectionName, id, data) {
    const docRef = doc(this.db, collectionName, id);
    await updateDoc(docRef, data, { merge: true });
  }
}

export default new DB();
