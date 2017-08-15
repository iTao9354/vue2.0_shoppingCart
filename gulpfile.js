/*
* @Author: Administrator
* @Date:   2017-08-15 23:24:48
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-15 23:33:16
*/
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("js/cart1.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("js/cart.js")); //转换成 ES5 存放的路径
});