define(['backbone', 'jquery','../presenter/presenter','text!../template/template.html'], function(Backbone, $, Presenter,template) {
    "use strict";
    return Backbone.View.extend({
        initialize: function(selector) {
            this.el = $(selector);
            new Presenter (this);
        },
        showText: function(text){
            $(this.el).html(template);
            this.el.find('.presenter').html('Text passed from presenter '+text);
        }
    })
})