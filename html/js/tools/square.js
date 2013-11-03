/*global $:false, jQuery:false */

var square = {
    start : undefined,
    square : undefined,
    loaded : function() {},
    selected: function() {
            console.log("square!");
        },
    mousedown: function(event) {
        // If we produced a drawnpath before, deselect it:
        if (this.start) {
            //remove the display rectangle
            this.square.remove();
            //complete a rectangle
            var shape = new paper.Path.Rectangle(this.start, event.point);
            shape.strokeColor = 'black';
            this.start = undefined;
        }
        else {
            this.start = event.point;
            this.square = new paper.Path.Rectangle(this.start, event.point);
            this.square.strokeColor = 'black';
        }

        paper.view.draw();
    },
    mousemove: function(event) {
        if (this.start) {
            this.square.remove();
            this.square = new paper.Path.Rectangle(this.start, event.point);
            this.square.strokeColor = 'black';
            paper.view.draw();
        }
    },
    };

tools.square = square;

