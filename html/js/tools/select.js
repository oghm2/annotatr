/*global $:false, jQuery:false */

var select = {
    loaded : function() {},
    selected: function() {
        console.log("select!");
    },
    mousemove: function(event) {
        paper.project.activeLayer.selected = false;
        var hr = paper.project.hitTest(getMousePoint(canvas, event));
        if (hr)
            hr.item.selected = true;
   },
};

tools.select = select;

