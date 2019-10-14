define(['backbone', 'jquery','../presenter/presenter'], function(Backbone, $, Presenter) {
    "use strict";
    return Backbone.View.extend({
        initialize: function(selector) {
            this.selector = $(selector);
            new Presenter (this);
        },
        showText: function(text){
            $(this.selector).html(text);
        }
    })
})