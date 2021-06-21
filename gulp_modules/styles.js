import pluginsObject from "./plugins.js";
import { paths, plugunsCssUsed, plugunsCss, mode } from "./variables.js";
import { getPlugunsList, makePlumber } from "./util.js";

const {
  sourcemaps,
  concat,
  browsersync,
  sass,
  autoprefixer,
  rename,
  cleancss,
  gcmq,
  gulpif,
  sassGlob,
  gulp: { src, dest },
} = pluginsObject;

const {
  project: { cssFile, cssMinFile },
  made: { cssFolder },
} = paths;

const getStyleFile = () => {
  return src(getPlugunsList(plugunsCss, plugunsCssUsed))
    .pipe(makePlumber("style"))
    .pipe(gulpif(mode === `development`, sourcemaps.init()))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(concat(cssFile))
    .pipe(
      autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })
    )
    .pipe(gulpif(mode === `development`, sourcemaps.write(".")))
    .pipe(gulpif(mode === `production`, gcmq()))
    .pipe(dest(cssFolder))
    .pipe(
      gulpif(
        mode === `production`,
        cleancss({
          level: { 1: { specialComments: 0 } },
        })
      )
    )
    .pipe(gulpif(mode === `production`, rename(cssMinFile)))
    .pipe(gulpif(mode === `production`, dest(cssFolder)))
    .pipe(gulpif(mode === `development`, browsersync.stream()));
};

export default getStyleFile;
