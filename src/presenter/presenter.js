define(['backbone'], function(Backbone) {
    "use strict";
    return Backbone.View.extend({
        initialize: function(view) {
            view.showText("Hello");
        }
    })
})