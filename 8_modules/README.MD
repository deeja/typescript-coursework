# Modules
## Loaders
### [systemjs](https://github.com/systemjs/systemjs)
Supports:
- NodeJS
- Browser

Loads:
- ES6 modules
- AMD
- CommonJS
- Global scripts

Supports RequireJS style load maps, paths, scripts and bundles. 

_index.html_
```html
<script src="system.js"></script> 
<script>
SystemJS.config({ 
    baseURL: '/',
    packages: {
        '/':{
            "defaultExtension":"js" // as we are using typescript and don't include the JS extension
        }
    }
});

SystemJS.import('app.js');
</script>
```

#### Specific imports
```ts
import {PI, caculateCircumference} from './math/circle'; // no TS file extensions
import {calculateRectangle} from '/math/rectangle';
```

#### Wildcard import
```ts
import * as Circle from './math/circle';
```
#### 

#### Default export import
Exporting file:
```ts
export default calculateRectangleArea(width: number, height: number): number { return width * height; }
```
Importing file:
```ts
import Rectangle from './math/rectangle'
```

#### Absolute paths
Using the `@angular/core` style imports
```ts
import {Component} from '@angular/core';
```


