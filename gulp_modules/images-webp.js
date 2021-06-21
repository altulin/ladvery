import pluginsObject from "./plugins.js";
import { paths } from "./variables.js";

const {
  newer,
  webp,
  gulp: { src, dest },
} = pluginsObject;

const {
  project: { webpImg },
  made: { webpFolder },
} = paths;

const createWebp = () => {
  return src(webpImg)
    .pipe(newer(webpFolder))
    .pipe(webp())
    .pipe(dest(webpFolder));
};

export default createWebp;
