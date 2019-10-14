define(['./view/view'], function(View) {
    'use strict';
    return function(selector) {        
        return new View(selector);
    };
});