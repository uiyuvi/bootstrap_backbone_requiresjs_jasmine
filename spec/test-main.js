var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\.spec.js$/.test(file)) {
      tests.push(file);
    }
  }
}


requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

    paths: {
        "backbone": "../lib/backbone",
        "src": "../../src",
        "text": "../lib/text",
        "jquery": '../lib/jquery',
        "underscore": "../lib/underscore",
        'jasmine': "../lib/jasmine",
        'jasmine-html': "../lib/jasmine-html",
        'jasmine-boot': '../lib/jasmine-boot',
        "spec": "specs",
	},
	shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jasmine-html': {
            deps : ['jasmine']
        },
        'jasmine-boot': {
            deps : ['jasmine', 'jasmine-html']
        }
	},

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});