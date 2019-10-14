requirejs.config({
	paths: {
        "backbone": "../lib/backbone",
        "src": "../../src",
        "text": "../lib/text",
        "jquery": '../lib/jquery',
        "underscore": "../lib/underscore",
        'jasmine': "../lib/jasmine",
        'jasmine-html': "../lib/jasmine-html",
        'jasmine-boot': 'jasmine-boot',
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
	}
});
require(['jasmine-boot'], function () {
    require(['view/view.spec'], function(){
        window.onload();
    })
});
