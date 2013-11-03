/*global $:false, jQuery:false */

var text = {
    text: '',
    textbox: undefined, 
    loaded : function() {},
    selected: function() {
            console.log("text!");
    },
    mousedown: function(event) {
        // If we're already writing text, finalise it
        //if (this.textbox) {
        //    this.path.selected = false;
        //}

        //this.start = event.point;
        this.text = '';
        this.textbox = new paper.PointText(event.point);
        this.textbox.justification = 'left';
        this.textbox.fillColor = 'black';
        this.textbox.content = this.text;

        paper.view.draw();
    },
    keydown: function(event) {
        if (event.which == 46 && this.state.selected_item) {
            this.state.selected_item.remove();
            this.state.selected_item = undefined;
            text.content = this.text;
            paper.view.draw();
        }
        if(this.textbox) {
            if(event.which == 8) {
                this.text = this.text.substring(0, this.text.length - 1);
            }
            else {
                var char = String.fromCharCode(event.keyCode);
                char = event.shiftKey ? String.toUpperCase(char) : String.toLowerCase(char);
                this.text = this.text + char;
            }
            this.textbox.content = this.text;
            paper.view.draw();
        }
    },
    mouseup: function(event) {
    },
};

tools.text = text;

