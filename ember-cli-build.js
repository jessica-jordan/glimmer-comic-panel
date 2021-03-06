'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
// const resolve = require('rollup-plugin-node-resolve');
// const commonjs = require('rollup-plugin-commonjs');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
   /* rollup: {
      plugins: [
        resolve({ jsnext: true, module: true, main: false }),
        commonjs()
      ]
    } */
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // app.import('node_modules/web-animations-js/web-animations-next.min.js');

  return app.toTree();
};
