AFRAME.registerComponent('change-camera-position-home', {
    init: function() {
        const el = this.el;

        el.addEventListener("mouseenter", function() {
            setTimeout(() => {
                console.log("pasa por aquí")
                const myCamera = document.getElementById("my-camera");
                myCamera.setAttribute("position", "0 1.6 0");
                //ampliar atributo sphere a evento mouseenter disminuit al evento mouseleave
                //añadir delay al teleport
                var sound = document.querySelector("#speaker");
                var control = sound.getAttribute("controlvar");
                if (control == "1") {
                    img.setAttribute("src", "#soff")
                    console.log("pause");
                    sound.setAttribute("controlvar", "0");
                } else {
                    img.setAttribute("src", "#son")
                    console.log("Play");
                    sound.setAttribute("controlvar", "1");
                }
            }, 1200);
        });

    }
});