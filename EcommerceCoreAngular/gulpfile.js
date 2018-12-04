/// <binding AfterBuild='default' />
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var merge = require('merge-stream'); 

gulp.task("minify", function myfunction() {
    console.log("Minify start...");
    return gulp.src("wwwroot/js/**/*.js")
        .pipe(uglify())
        .pipe(concat("gigucommerce.min.js"))
        .pipe(gulp.dest("wwwroot/dist"));
});

// node_modules
/*
    <link href="~/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="~/node_modules/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <script src="~/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="~/node_modules/jquery-validation/dist/jquery.validate.min.js"></script>
    <script src="~/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.min.js"></script>
 */
var nodeModules = {
    "bootstrap": {
        "dist/**/*": "" // js and css
    },
    "font-awesome": {
        "**/*": ""
    },
    "jquery": {
        "dist/*": ""
    },
    "jquery-validation": {
        "dist/*": ""
    },
    "jquery-validation-unobtrusive": {
        "dist/*": ""
    }
};

gulp.task("node_modules", function () {

    var streams = [];

    for (var module in nodeModules) {
        console.log("Prepping Scripts for: " + module);
        for (var itemProp in nodeModules[module]) {
            streams.push(gulp.src("node_modules/" + module + "/" + itemProp)
                .pipe(gulp.dest("wwwroot/lib/" + module + "/" + nodeModules[module][itemProp])));
        }
    }

    return merge(streams);

});

gulp.task("default", ["node_modules", "minify"]);
