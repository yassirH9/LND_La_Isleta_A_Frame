AFRAME.registerComponent('prueba', {
    schema: {
        plane: { type: 'string' }
    },

    init: function() {
        var el = this.el;
        var data = this.data;
        el.addEventListener("mouseenter", function() {
            for (var i = 0; i < 4; i++) {
                const planein = document.getElementById("plane1");
                const planein2 = document.getElementById("plane2");
                planein.setAttribute("visible", "false");
                planein2.setAttribute("visible", "false");
                const planein3 = document.getElementById("plane3");
                const planein4 = document.getElementById("plane4");
                planein.setAttribute("visible", "false");
                planein2.setAttribute("visible", "false");
            }
        });
        el.addEventListener("mouseenter", function() {
            const planeon = document.querySelector(data.plane);
            planeon.setAttribute("visible", "true");
        });
    }
});