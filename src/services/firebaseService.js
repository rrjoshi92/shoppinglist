import firebase from '../firebase/config'

const collection = firebase.collection('items');

const getItems = (callback) => {
    collection.onSnapshot((snapshot)=>{
        let items = [];
        snapshot.docs.forEach((item) => {
            items.push({ id: item.id, ...item.data() })
        });
        items.sort((a, b) => a.timestamp - b.timestamp)
        callback(items);
    });
}

const addItem = (item)=>{
    item["timestamp"] = Date.now();
    return collection.add(item);
}

const updateItem = (id, item) =>{
    collection.doc(id).update(item);
}

const deleteItem = (id) => {
    collection.doc(id).delete();
}

export { getItems, addItem, updateItem, deleteItem }