This is an implementation of a `dig` function, which takes an object and a path, and returns the value at that path.

Paths are delimited by periods (`.`).

#### A simplistic example:

```js
const fruits = {
  fruits: {
    apple: {
      colors: ["red", "green"],
      large: false
    },
    melon: {
      colors: ["yellow", "green"],
      large: true
    }
  }
}

dig('fruits.apple.large', fruits) // false
dig('fruits.melon.large', fruits) // true
dig('fruits.pear.large', fruits) // undefined
```

#### Usage:

```bash
node activity-2/index.js
```
