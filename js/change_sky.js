AFRAME.registerComponent('change-sky', {
    schema: {
        src: { type: 'string' }
    },
    init: function() {
        var el = this.el;
        var data = this.data;
        el.addEventListener("mouseenter", function() {
            var mysky = document.querySelector("#my-sky");
            mysky.setAttribute("src", data.src);
        });

    }
});