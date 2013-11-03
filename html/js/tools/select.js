/*global $:false, jQuery:false */

function select_item(item) {
    if (item.closed)
        item.fillColor = new paper.Color(0,0,1,0.2);
}

function deselect_item(item) {
    if (item.closed)
        item.fillColor = new paper.Color(0,0,0,0);
}

function highlight_item(item) {
    item.selected = true;
}

function dehighlight_item(item) {
    item.selected = false;
}

var select = {
    loaded : function() {},
    selected: function() {
        console.log("select!");
    },
    deselected: function() {
        console.log("!select");
    },
    click: function() {
        if(this.state.selected_item)
            deselect_item(this.state.selected_item);
        this.state.selected_item = this.state.highlighted_item;
        if(this.state.selected_item)
            select_item(this.state.selected_item);
    },
    mousemove: function(event) {
        var new_highlighted_item = undefined;
        var hr = paper.project.hitTest(event.point);
        if (hr) {
            new_highlighted_item = hr.item;
        }

        if (this.state.highlighted_item != new_highlighted_item) {
            if (this.state.highlighted_item)
                dehighlight_item(this.state.highlighted_item)
            this.state.highlighted_item = new_highlighted_item;
            if (this.state.highlighted_item)
                highlight_item(this.state.highlighted_item)
        }
    },
    state: {
        selected_item: undefined,
        highlighted_item: undefined,
    },
};

tools.select = select;

