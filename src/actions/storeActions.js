import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { toast } from "react-toastify";

export const addUser = async (user) => {
  const useRef = await addDoc(collection(db, "user"), user);
  return useRef;
};
