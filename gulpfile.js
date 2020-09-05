const { src, dest, series } = require("gulp");
const del = require("del");
const tar = require("gulp-tar");
const gzip = require("gulp-gzip");
const package = require("./package.json");

var clean = function (cb) {
  return del(["dist/**"]);
};

var compress = function (cb) {
  return src(["src/**/*", "!node_modules/**"])
    .pipe(tar(`${package.name}-${package.version}.tar`))
    .pipe(gzip())
    .pipe(dest("dist"));
};

module.exports.default = series(clean, compress);