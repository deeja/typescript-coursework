# Third Party Library import options

## Import without compiler integration
```
declare var $:any
```
This sets the `$` to a type of any, and anything can be called against it, whether it is valid or not.

## Import with compiler intergration

### DefinitelyTyped
We can use the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) Definition files to provide intellisense and compiler integration.
```
npm install --save-dev @types/jquery
```
