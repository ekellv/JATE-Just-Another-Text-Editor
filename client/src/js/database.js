import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
    console.log('PUT request to update the jateDB');
    // create connection to database and database version we want to use, which for us is just 1 since we currently only have one version
    const jateDb = await openDB('jate', 1);
    // create a transation with the specified database and data priveleges we need access to 
    const tx = jateDb.transaction('jate', 'readwrite');
    // open object store
    const store = tx.objectStore('jate');
    // get all the data from the database
    const request = store.put({ jate: content })
    // confirm request and return it
    const result = await request;
    console.log('jateDB updated!', result);
    return result;
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
    console.log('GET request for data from the jateDB database');
    // create connection to database and database version we want to use, which for us is just 1 since we currently only have one version
    const jateDb = await openDB('jate', 1);
    // create a transation with the specified database and data priveleges we need access to 
    const tx = jateDb.transaction('jate', 'readonly');
    // open object store
    const store = tx.objectStore('jate');
    // get all the data from the database
    const request = store.getAll();
    // confirm request and return it
    const result = await request;
    console.log('jateDB data returned!', result);
    return result;
};

initdb();
