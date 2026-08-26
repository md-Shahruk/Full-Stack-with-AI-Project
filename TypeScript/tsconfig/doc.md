# tsconfig.json

## What is tsconfig.json?
- What files to compile
- How to compile them
- What rules to enforce 
- Where to put the output


```json
   {
    "compilerOptions": {
        // How TypeScript should behave
        
    },
    "include": [
        // Which files to compile
    ],
    "exclude": [
        // Which files to ignore
    ]
  }
```

### 1. target - JS version

```json
   {
    "compilerOptioons":{
        target: "ES2020"
    }
   }

    ES5 — Very old browsers (IE11)

    ES2015 — Modern browsers (Chrome, Firefox, Edge)

    ES2020 — Very modern browsers

    ESNext — Latest JavaScript features
```

### 2. module - Module System

```json
   {
    "compilerOptioons":{
        module: "commonJs" //Node.js style
        module: "ESNext" // Modern brower style
    }
   }

    
    import { User } from './models/User.js';

    // With module: "commonjs" 
    // Outputs:
    // const User = require('./models/User');

    // With module: "ESNext" 
    // Outputs:
    // import { User } from './models/User';
   
```

### 3. esModuleInterop - Module Compatibility
- Helps typescript work with different module system
```json
   {
    "compilerOptions": {
        "esModuleInterop": true  // always set true
     }
    }

    // esModuleInterop: false
    import express = require('express');  

    // esModuleInterop: true
    import express from 'express';  // modern style 
```

### 4. paths - Import Aliases

```json

   {
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
        "@/*": ["src/*"],
        "@models/*": ["src/models/*"],
        "@utils/*": ["src/utils/*"]
        }
     }
    }
```