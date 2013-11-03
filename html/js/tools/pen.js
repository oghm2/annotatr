/*global $:false, jQuery:false */

var pen = {
    path: undefined,
    loaded : function() {},
    selected: function() {
            console.log("pen!");
    },
    mousedown: function(event) {
        // If we produced a drawnpath before, deselect it:
        if (this.path) {
            this.path.selected = false;
        }

        this.path = new paper.Path({
            segments: [event.point],
            strokeColor: 'red',
            strokeWidth: 3,
            fullySelected: false
        });
        this.path.active = true;
        paper.view.draw();
    },
    mousemove: function(event) {
        if (this.path && this.path.active) {
            this.path.add(event.point);
            paper.view.draw();
        }
    },
    mouseup: function(event) {
        var segmentCount = this.path.segments.length;
        this.path.active = false;

        // When the mouse is released, simplify it:
        var b = this.path.bounds;
        var p1 = this.path.firstSegment.point;
        var p2 = this.path.lastSegment.point;
        if ((b.width + b.height)/7 > p1.getDistance(p2)
                && this.path.segments.length > 2) {
            this.path.add(p1);
            this.path.closed = true;
            this.path.fillColor = new paper.Color(0,0,0,0);
        }
        this.path.simplify(10);
        paper.view.draw();
    },
};

tools.pen = pen;

