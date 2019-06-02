# Gulp integration

_gulpfile.js_
```js
var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsproject = ts.createProject("tsconfig.json");

gulp.task("typescript", function(){
    return tsproject.src()
    .pipe(ts(tsProject))
    .pipe(gulp.dest(""));
});

gulp.task("watch", function(){
    gulp.watch("*.ts", ["typescript"]);
});

gulp.task("default", ["watch"]);
```

_package.json_
```js
{"Build":"gulp"}
```