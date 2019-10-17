define(["../../src/view/view","jquery"], function(View,$) {
    describe("view", function() {
        $('body').append('<div id="app"/>');
        var view = new View("#app");
        it('should be defined', () => {
            expect(view).toBeDefined();
        });
        it('should show text loaded from external template', () => {
            view.showText(); 
            
            expect($('.external_template').html()).toBe('Template loaded from external directory');
        });
        it('should show text loaded passed from presenter', () => {
            view.showText('hello'); 
            
            expect($('.presenter').html()).toBe('Text passed from presenter hello');
        });
    })
})