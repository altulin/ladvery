import pluginsObject from "./plugins.js";

const projectName = `empty`; // название проекта
const distFolder = `${projectName}_dist`; // Папка продакшн
const srcFolder = `_src`; // Папка разработки

const mode = pluginsObject.minimist(process.argv.slice(2))._[0];
const assemblyWebpack = true; // webpack true or false
const assemblyBabel = false; // babel true or false

const plugunsJsUsed = [`mmenu_js`, `myJsLibs`, `myJsFile`];
const plugunsCssUsed = [
  `normalize_css`,
  `mmenu_css`,
  `swiper_css`,
  `myCssLibs`,
  `myCssFile`,
];

const plugunsJs = new Map([
  [`jquery_js`, `node_modules/jquery/dist/jquery.min.js`],
  [`jquery_modal_js`, `node_modules/jquery-modal/jquery.modal.min.js`],
  [`glightbox_js`, `node_modules/glightbox/dist/js/glightbox.min.js`],
  [`mmenu_js`, `node_modules/mmenu-light/dist/mmenu-light.js`],
  [`slick_js`, `node_modules/slick-carousel/slick/slick.min.js`],
  [`inputmask_js`, `node_modules/inputmask/dist/jquery.inputmask.min.js`],
  [
    `jquery_formstyler_js`,
    `node_modules/jquery-form-styler/dist/jquery.formstyler.min.js`,
  ],
  [
    `responsive-tabs_js`,
    `node_modules/responsive-tabs/js/jquery.responsiveTabs.min.js`,
  ],
  [`myJsFile`, `${srcFolder}/js/main.js`], // мой файл js
  [`myJsLibs`, `${srcFolder}/js/libs/**/*.js`], // мои библиотеки js
  [`swiper_js`, `node_modules/swiper/swiper-bundle.min.js`],
  [`micromodal_js`, `node_modules/micromodal/dist/micromodal.min.js`],
]);

const plugunsCss = new Map([
  [`normalize_css`, `node_modules/normalize.css/normalize.css`],
  [`jquery_modal_css`, `node_modules/jquery-modal/jquery.modal.min.css`],
  [`glightbox_js`, `node_modules/glightbox/dist/css/glightbox.min.css`],
  [`mmenu_css`, `node_modules/mmenu-light/dist/mmenu-light.css`],
  [
    `jquery_formstyler_css`,
    `node_modules/jquery-form-styler/dist/jquery.formstyler.css`,
  ],
  [
    `jquery_formstyler_theme_css`,
    `node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css`,
  ],
  [`slick_css`, `node_modules/slick-carousel/slick/slick.css`],
  [
    `responsive-tabs_css`,
    `node_modules/responsive-tabs/css/responsive-tabs.css`,
  ],
  [`myCssFile`, `${srcFolder}/sass/style.scss`], // мой файл css
  [`myCssLibs`, `${srcFolder}/css/libs/**/*.css`], // мои библиотеки css
  [`swiper_css`, `node_modules/swiper/swiper-bundle.min.css`],
]);

const paths = {
  dist: {
    cssFile: `${srcFolder}/css/style.css`,
    cssMinFile: `${srcFolder}/css/style.min.css`,
    fontsFiles: `${srcFolder}/fonts/*.{woff,woff2}`,
    fontsFolder: `${srcFolder}/fonts/`,
    jsFile: `${srcFolder}/js/script.js`,
    jsMinFile: `${srcFolder}/js/script.min.js`,
    images: `${srcFolder}/img/**/*`,
    htmlFiles: `${srcFolder}/*.html`,
    icoFiles: `${srcFolder}/*.ico`,
    favFiles: `${srcFolder}/fav/*`,
  },
  project: {
    spriteFiles: `${srcFolder}/_img/sprite/*.svg`,
    spriteFolder: `${srcFolder}/_img/sprite/`,
    spriteFile: `sprite.svg`,
    entryJs: `${srcFolder}/js/main.js`,
    jsFile: `script.js`,
    jsMinFile: `script.min.js`,
    jsFiles: `${srcFolder}/js/**/*.js`,
    cssFile: `style.css`,
    cssMinFile: `style.min.css`,
    rasterImg: `${srcFolder}/_img/*.{png,jpg}`,
    vectorImg: `${srcFolder}/_img/svg/*.svg`,
    webpImg: `${srcFolder}/_img/webp/*.{png,jpg}`,
    pugFiles: `${srcFolder}/pug/pages/*.pug`,
    pugFolder: `${srcFolder}/pug/`,
    sassFiles: `${srcFolder}/sass/**/*.{sass,scss}`,
  },
  made: {
    spriteFolder: `${srcFolder}/img/sprite.svg`,
    imgFolder: `${srcFolder}/img/`,
    imgFiles: `${srcFolder}/img/**/*`,
    jsFolder: `${srcFolder}/js/`,
    cssFolder: `${srcFolder}/css/`,
    svgFolder: `${srcFolder}/img/svg/`,
    webpFolder: `${srcFolder}/img/webp/`,
    sassFile: `${srcFolder}/sass/style.scss`,
  },
  distFolder,
  srcFolder,
};

export {
  mode,
  assemblyWebpack,
  plugunsJsUsed,
  plugunsCssUsed,
  plugunsJs,
  plugunsCss,
  paths,
  assemblyBabel,
};
