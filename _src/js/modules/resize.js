let resizeTimeout;

const actualResizeHandler = () => {
  //
};

const resizeThrottler = () => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      actualResizeHandler();
    }, 1000);
  }
};

const addEventResize = () => {
  return window.addEventListener("resize", resizeThrottler, false);
};

export default addEventResize;
