This is a promise wrapper around the `https.get` function

NB that this is a simplistic example, in that it currently always performs a GET request and always expects a JSON response.

#### A simplistic example:

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(json => console.log(json))
  .catch(error => console.error(error))
```

#### Usage:
```bash
node activity-3/index.js
```
