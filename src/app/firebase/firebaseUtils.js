import { Timestamp } from "@firebase/firestore";
import { doc, setDoc, addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const collections = {
    USERS: 'users',
    REFERRALS: 'referrals'
}

export const convertDateToFirebaseTimestamp = (date) => {
    return Timestamp.fromDate(date);
}

export const convertTimestampToDate = (timestamp) => {
    const dateObject = timestamp.toDate();

    // Format the date to "ddth MMM yyyy"
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
    return formattedDate;
}

export const checkIfCurrentMonth = (timestamp) => {
    const dateObject = timestamp.toDate();
    const currentDate = new Date();
    return dateObject.getMonth() === currentDate.getMonth();
}

export async function addData(c, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, c, id), data, {
            merge: true,
        });
    } catch (e) {
        console.error(e);
        error = e;
    }

    return { result, error };
}

export async function addDocument(c, data) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, c), data);
    } catch (e) {
        console.error(e);
        error = e;
    }

    return { result, error };
}

export async function setDocument(collectionName, docId, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, collectionName, docId), data, {merge: true});
    } catch (e) {
        console.error(e);
        error = e;
    }

    return { result, error };
}

export async function getDocument(c, id) {
    let docRef = doc(db, c, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        console.error(e);
        error = e;
    }

    return { result, error };
}

export async function getDocumentsWhere(c, column, operator, value) {
    let result = null;
    let error = null;

    try {
        const referralsRef = collection(db, c);
        const q = query(referralsRef, where(column, operator, value));
        result = await getDocs(q);
    } catch (e) {
        console.error(e);
        error = e;
    }

    return { result, error };
}

export async function documentExistsWhere(c, column, operator, value) {
    const q = await getDocumentsWhere(c, column, operator, value);
    return !q?.result?.hasError && q?.result?.size > 0;
}

// TODO cleanup this BS once the platform work is done. Combine this with the above method to have a single call
export async function getDocumentsWhere2(c, column, operator, value, column2, operator2, value2) {
    let result = null;
    let error = null;

    try {
        const referralsRef = collection(db, c);
        const q = query(referralsRef, where(column, operator, value), where(column2, operator2, value2));
        result = await getDocs(q);
    } catch (e) {
        console.error(e);
        error = e;
    }

    return { result, error };
}

export async function documentExistsWhere2(c, column, operator, value, column2, operator2, value2) {
    const q = await getDocumentsWhere2(c, column, operator, value, column2, operator2, value2);
    return !q?.result?.hasError && q?.result?.size > 0;
}