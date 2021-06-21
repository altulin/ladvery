import pluginsObject from "./plugins.js";
import { paths } from "./variables.js";

const { del } = pluginsObject;
const {
  distFolder,
  made: { imgFiles },
} = paths;

const clean = () => {
  return del(distFolder, { force: true }); // Удаляем всю папку продакшн
};

const cleanImg = () => {
  return del(imgFiles, { force: true }); // Удаляем всё содержимое папки "img/" в каталоге /_src/
};

export { clean, cleanImg };
