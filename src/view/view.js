define(['backbone', 'jquery','../presenter/presenter','text!../template/template.html'], function(Backbone, $, Presenter,template) {
    "use strict";
    return Backbone.View.extend({
        initialize: function(selector) {
            this.selector = $(selector);
            new Presenter (this);
        },
        showText: function(text){
            $(this.selector).html(template);
            $(this.selector).append('Text passed from presenter'+text);
        }
    })
})