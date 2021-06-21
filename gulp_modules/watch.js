import pluginsObject from "./plugins.js";
import { paths } from "./variables.js";
import makeImagesSvg from "./images-svg.js";
import makeImages from "./images.js";
import createSprite from "./sprite.js";
import getStyleFile from "./styles.js";
import getScriptFile from "./scripts.js";
import createWebp from "./images-webp.js";
import transformPug from "./pug.js";

const {
  gulp: { watch },
} = pluginsObject;

const {
  project: {
    sassFiles,
    pugFolder,
    rasterImg,
    webpImg,
    vectorImg,
    spriteFolder,
    jsFiles,
  },
  dist: { jsFile, jsMinFile },
} = paths;

const getWatchers = () => {
  watch([jsFiles, `!${jsFile}`, `!${jsMinFile}`], getScriptFile);
  watch(sassFiles, getStyleFile);
  watch(pugFolder, transformPug);
  watch(rasterImg, makeImages);
  watch(webpImg, createWebp);
  watch(vectorImg, makeImagesSvg);
  watch(spriteFolder, createSprite);
};

export default getWatchers;
