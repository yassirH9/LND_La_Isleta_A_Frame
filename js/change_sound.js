AFRAME.registerComponent('change-sound', {
    schema: {
        src: { type: 'string' }
    },
    init: function() {
        var el = this.el;
        var data = this.data;
        el.addEventListener("mouseenter", function() {
            var speaker = document.querySelector("#speaker");
            speaker.setAttribute("src", data.src);
        });

    }
});