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

