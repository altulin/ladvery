import pluginsObject from "./plugins.js";
import { paths } from "./variables.js";

const { src, dest } = pluginsObject.gulp;
const {
  dist: {
    cssFile,
    cssMinFile,
    fontsFiles,
    jsFile,
    jsMinFile,
    images,
    htmlFiles,
    icoFiles,
    favFiles,
  },
  srcFolder,
  distFolder,
} = paths;

const getCopying = () => {
  return src(
    [
      cssFile,
      cssMinFile, // стили мин если надо
      fontsFiles,
      jsFile,
      jsMinFile, // скрипты мин если надо
      images,
      htmlFiles,
      icoFiles,
      favFiles,
    ],
    { base: srcFolder }
  ) // Параметр "base" сохраняет структуру проекта при копировании
    .pipe(dest(`${distFolder}/`)); // Выгружаем в папку с финальной сборкой
};

export default getCopying;
