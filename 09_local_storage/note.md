# Local Storage in JavaScript

**Local Storage** is a type of web storage in JavaScript that allows you to store key-value pairs in a web browser. Data stored in local storage is persistent, meaning it does not expire even after the browser is closed or the device is restarted.

## Key Characteristics:
- Stored data is specific to the protocol (HTTP/HTTPS), domain, and port.
- Data is stored as strings.
- No expiration time: Data stays in local storage until deleted by the user or through code.
- Maximum storage limit is around 5-10MB depending on the browser.

## Common Local Storage Methods:
1. `localStorage.setItem(key, value)` – Stores the value with the specified key.
2. `localStorage.getItem(key)` – Retrieves the value associated with the specified key.
3. `localStorage.removeItem(key)` – Removes the key-value pair from local storage.
4. `localStorage.clear()` – Clears all stored data.
5. `localStorage.length` – Returns the number of items in local storage.
6. `localStorage.key(index)` – Returns the key at the specified index.

---

## Example 1: Setting and Getting Data

```javascript
// Storing data
localStorage.setItem('username', 'Surendra');

// Retrieving data
let user = localStorage.getItem('username');
console.log(user); // Output: 'Surendra'
```
## Example 2: Removing an Item

```js
// Removing the stored 'username'
localStorage.removeItem('username');

// Trying to retrieve it after removal
let user = localStorage.getItem('username');
console.log(user); // Output: null
```

## Example 3: Clear all data 

```js
localStorage.setItem('username', 'Surendra');
localStorage.setItem('email', 'surendra@example.com');

// Clearing all data from local storage
localStorage.clear();

// Trying to retrieve data after clearing
console.log(localStorage.getItem('username')); // Output: null
console.log(localStorage.getItem('email'));    // Output: null
```

## Example 4: Storing and Retrieving Objects

Local Storage only supports storing strings. To store objects, you must first convert them to a JSON string using `JSON.stringify()`, and to retrieve them, you need to parse the JSON string back to an object using `JSON.parse()`.

```js
// Storing an object
let user = { name: 'Surendra', age: 22 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieving the object
let retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser.name); // Output: 'Surendra'
console.log(retrievedUser.age);  // Output: 25

```

## Example 5: Iterating Over Local Storage Items

```js
// Adding some data
localStorage.setItem('username', 'Surendra');
localStorage.setItem('email', 'surendra@example.com');

// Looping through localStorage items
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

// Output:
// username: Surendra
// email: surendra@example.com
```

## Use cases :

- Storing user preferences or settings.
- Caching data for offline use.
- Storing non-sensitive user session information.

Local storage is an essential tool for client-side data persistence, but be mindful not to store sensitive data like passwords or tokens. Use it for data that needs to persist between sessions but isn't critical to security.