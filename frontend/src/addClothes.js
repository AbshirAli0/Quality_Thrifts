const { db } = require('./firebase');
const { collection, addDoc, getDocs } = require('firebase/firestore');

export async function addItem(brand, price, size) {
    try {
        const docRef = await addDoc(collection(db, 'items'), {
            brand,
            price,
            size,
        });
        console.log('Item added with ID: ', docRef.id);
    } catch (e) {
        console.log('Error adding document:', e);
    }
}

export async function fetchItems() {
    const itemsCollection = collection(db, 'items');
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return itemsList;
}
 