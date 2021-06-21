import gulp from "gulp";
import newer from "gulp-newer";
import imagemin from "gulp-imagemin";
import del from "del";
import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import replace from "gulp-replace";
import rename from "gulp-rename";
import svgstore from "gulp-svgstore";
import sourcemaps from "gulp-sourcemaps";
import sass from "gulp-sass";
import concat from "gulp-concat";
import browsersync from "browser-sync";
import autoprefixer from "gulp-autoprefixer";
import cleancss from "gulp-clean-css";
import gcmq from "gulp-group-css-media-queries";
import uglify from "gulp-uglify-es";
import minimist from "minimist";
import gulpif from "gulp-if";
import webpackStream from "webpack-stream";
import webp from "gulp-webp";
import pug from "gulp-pug";
import prettify from "gulp-html-prettify";
import babel from "gulp-babel";
import sassGlob from "gulp-sass-glob";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

const pluginsObject = {
  gulp,
  newer,
  imagemin,
  del,
  svgmin,
  cheerio,
  replace,
  rename,
  svgstore,
  sourcemaps,
  sass,
  concat,
  browsersync,
  autoprefixer,
  cleancss,
  gcmq,
  uglify,
  minimist,
  gulpif,
  webpackStream,
  webp,
  pug,
  prettify,
  babel,
  sassGlob,
  plumber,
  notify,
};

export default pluginsObject;
