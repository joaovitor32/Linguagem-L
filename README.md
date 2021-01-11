<h3>How To Use</h3>

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher, installed on your computer. From your command line:
  
  ```bash
# Clone this repository
$ git https://github.com/joaovitor32/mathematics-expression-solver

# Go into the repository
$ cd mathematics-expression-solver

# Install dependencies
$ npm install

# Run the app
$ node index.js

```
 **Using npm**

   npm i mathematics-expression-solver
    
## Usage

```js
import {Solve_Expression} from 'mathematics-expression-solver';

 let result = Solve_Expression("1+2")

```
```js
import {Add_Function,Solve_Expression} from 'mathematics-expression-solver';

 Add_Function('function tien(a,b){ a^2 + b^2 }')
 let result = Solve_Expression("1 tien 2")

```

<h3>To run tests</h3>

   ```bash

npm run test

```

