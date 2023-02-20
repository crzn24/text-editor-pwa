import { openDB } from 'idb'; //indexedDB package that cleans it up

const initdb = async () =>
// We are creating a new database named 'jate' which will be using version 1 of the database.
  openDB('jate', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

///// Change contactDb to jateDb

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented'); // IS THIS CORRECT FOR ERROR MESSAGES?

  console.log('Post to the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass in the content.
  const request = store.add(content); //took out {name: name, home_phone: home, cell_phone: cell, email: email} and PASSES in content

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);

  // TODO: SHOULD ERROR MESSAGE GO HERE?
}




// TODO: Add logic for a method that gets all the content from the database
// Export a function we will use to GET to the database.
export const getDb = async () => {
  console.error('getDb not implemented'); // IS THIS CORRECT FOR ERROR MESSAGES?

  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.get(1); // not getall 

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  if (result.value) {
    result.value
  };
  // return result ? result.value : error;
  // if (result.value { return result.value})
  // return result.value; // if result doesn't have a value you wouldn't want it to return anything and if it does have a value, then you want to return result.value

  // TODO: SHOULD ERROR MESSAGE GO HERE?
};


// Start the database.
initdb();
