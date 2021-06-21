import pluginsObject from "./plugins.js";
import { paths } from "./variables.js";

const { browsersync } = pluginsObject;
const { srcFolder, distFolder } = paths;

const browserSync = () => {
  browsersync.init({
    server: { baseDir: srcFolder }, // Указываем папку сервера
    notify: false, // Отключаем уведомления
    online: true, // Режим работы: true или false
    open: false,
    port: 3000,
  });
};

const browserSyncTest = () => {
  browsersync.init({
    server: { baseDir: distFolder }, // Указываем папку сервера
    notify: false, // Отключаем уведомления
    online: true, // Режим работы: true или false
    open: false,
    port: 3000,
  });
};

export { browserSync, browserSyncTest };
