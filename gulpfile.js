const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-minify-css");
const webserver = require("gulp-webserver");
const webpack = require("gulp-webpack");
const named = require("vinyl-named");
const uglify = require("gulp-uglify");
const rev = require("gulp-rev");
const collector = require("gulp-rev-collector");
const url = require("url");
const fs = require("fs");

var sassfile = ["./app/src/styles/**/*.scss"];
var jsfile = ["./app/src/scripts/**/*.js"];

gulp.task("sass",function(){
   gulp.src(sassfile)
       .pipe(sass())
       .pipe(minify())
       .pipe(gulp.dest("./app/prd/styles"))
});

gulp.task("webpackjs",function(){
   gulp.src("./app/src/scripts/app.js")
       .pipe(named())
       .pipe(webpack({
           output:{filename:"[name].js"},
           modules:{
               loaders:[{
                   test:/\.js$/,
                   loader:"imports?define=>false"
               }]
           }
       }))
       .pipe(uglify().on("error",function(e){
           console.log("\x07",e.lineNumber,e.message)
       }))
       .pipe(gulp.dest("./app/prd/scripts"))
});

gulp.task("watch",function(){
    gulp.watch(sassfile,["sass"]);
    gulp.watch(jsfile,["webpackjs"]);
});

gulp.task("webserver",function(){
    gulp.src("./")
        .pipe(webserver({
            port:4000,
            livereload:true,
            directoryListing:{
                enable:true,
                path:"./"
            },
            middleware:function(req,res,next){
                var urlObj = url.parse(req.url,true);
                switch(urlObj.pathname){
                    case '/api/getLivelist.php':
                        res.setHeader("Content-type","application/json");
                        fs.readFile('./mock/livelist.json','utf-8',function(err,data){
                            res.end("hello world");
                            res.end(data);
                        });
                        return;
                    case '/api/getLivelistmore.php':
                        res.setHeader("Content-type","application/json");
                        fs.readFile('./mock/livelist-more.json','utf-8',function(err,data){
                            res.end(data);
                        });
                        return;
                }
                next();
            }
        }))
});

//生产md5加密
gulp.task("rev",function(){
    gulp.src("./app/prd/scripts/app.js")
        .pipe(rev())
        .pipe(gulp.dest("./app/prd/scripts"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./app/rev/scripts"));
    gulp.src("./app/prd/styles/app.css")
        .pipe(rev())
        .pipe(gulp.dest("./app/prd/styles"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./app/rev/styles"))
});
//替换
gulp.task("html",function(){
    gulp.src(["./app/rev/**/*.json","./app/*.html"])
        .pipe(collector())
        .pipe(gulp.dest("./app"))
});

gulp.task("min",["rev","html"]);

gulp.task("default",["webserver","watch"]);