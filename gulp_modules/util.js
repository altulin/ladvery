import pluginsObject from "./plugins.js";

const { plumber, notify } = pluginsObject;

const getPlugunsList = (array, arrayUsed) => {
  return arrayUsed.map((item) => {
    return array.get(item);
  });
};

const makePlumber = (name) => {
  return plumber({
    errorHandler: notify.onError(function (err) {
      return {
        title: name,
        message: err.message,
      };
    }),
  });
};

export { getPlugunsList, makePlumber };
