```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

![Memory Representation](./MemoryRepresentation.png)

2. Answer the following with reason:

- `user == newUser;` // true as they contain the same memory location
- `user === newUser;` // true as they contain the same memory location
- `user.name === newUser.name;` // true as they both point to same object and value
- `user.name == newUser.name;` // true as they both point to same object and value
- `user.sibling == newUser.sibling;`  // true as they both point to same object and value
- `user.sibling === newUser.sibling;`  // true as they both point to same object and value
- `user.sibling == allBrothers;` // false as objects are in different memory locations
- `user.sibling === allBrothers;` // false as objects are in different memory locations
- `brothersCopy === allBrothers;` // false as objects are in different memory locations
- `brothersCopy == allBrothers;` // false as objects are in different memory locations
- `brothersCopy == user.sibling;` // true as objects are in same memory locations
- `brothersCopy === user.sibling;` // true as objects are in same memory locations
- `brothersCopy[0] === user.sibling[0];` // true as both the arrays are equal
- `brothersCopy[1] === user.sibling[1];` // true as both the arrays are equal
- `user.sibling[1] === newUser.sibling[1];` // true as they both point to same object and value
