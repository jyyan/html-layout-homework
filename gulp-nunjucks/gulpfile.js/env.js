/*
* credit: https://github.com/gonsakon/gulpDemo3
* */
const srcPath = './src';
const distPath = './dist';
const nodePath = './node_modules';

let env = {
  string: 'env',
  default: {
    env: 'dev',
  },
  copyFile: {
    src: [
      `${srcPath}/!(views)/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/style/**/*.scss`,
      `!${srcPath}/assets/style/**/*.sass`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/views/**/*.html`,  // scan & rebuild all page
      `!${srcPath}/views/_layouts/*.html`,  // filter
      `!${srcPath}/views/_includes/*.html`  // filter
    ],
    watch: [
      `${srcPath}/views/**/*.html`,  // scan all html & layout, include
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/style/**/*.scss`,
      `${srcPath}/assets/style/**/*.sass`,
    ],
    concat: 'all.css',
    path: `${distPath}/assets/style`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.min.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  img: {
    src: [
      `${srcPath}/assets/images/**/*`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.env = env;
