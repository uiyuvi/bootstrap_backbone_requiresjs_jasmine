define(["../../src/presenter/presenter"], function(View) {
    describe("view", function() {
        it('should behave...', () => {
            var view = new View({showText: function(){}});
            expect(view).toBeDefined();
        });
        it('should call view with text...', () => {
            var view = new View({showText: function(){

            }});
            spyOn(view.view,'showText');
            
            view.showTextInView('Hello');

            expect(view.view.showText).toHaveBeenCalledWith('Hello');
        });
    })
})