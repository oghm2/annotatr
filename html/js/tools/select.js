/*global $:false, jQuery:false */

var select = {
    loaded : function() {},
    selected: function() {
        console.log("select!");
    },
    deselected: function() {
        console.log("!select");
    },
    click: function() {
        this.state.selected_item = this.state.highlighted_item;
    },
    mousemove: function(event) {
        var new_highlighted_item = undefined;
        var hr = paper.project.hitTest(event.point);

        if (hr) {
            new_highlighted_item = hr.item;
        } else {
            new_highlighted_item = this.state.selected_item;
        }

        if (this.state.highlighted_item != new_highlighted_item) {
            if (this.state.highlighted_item)
                this.state.highlighted_item.selected = false;
            this.state.highlighted_item = new_highlighted_item;
            if (this.state.highlighted_item)
                this.state.highlighted_item.selected = true;
        }
    },
    state: {
        selected_item: undefined,
        highlighted_item: undefined,
    },
};

tools.select = select;

