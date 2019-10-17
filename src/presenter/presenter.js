define(['backbone'], function(Backbone) {
    "use strict";
    return Backbone.View.extend({
        initialize: function(view) {
            this.view = view;
            this.showTextInView("Hello");
        },
        showTextInView: function(text) {
            this.view.showText(text);
        }
    })
})