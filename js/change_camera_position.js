AFRAME.registerComponent('change-camera-position', {
    init: function() {
        const el = this.el;
        el.addEventListener("mouseenter", function() {
            setTimeout(() => {
                console.log("pasa por aquí")
                const myCamera = document.getElementById("my-camera");
                myCamera.setAttribute("position", "0 1.6 520");
                //ampliar atributo sphere a evento mouseenter disminuit al evento mouseleave
                //añadir delay al teleport
            }, 1200);
        });

    }
});