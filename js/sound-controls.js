AFRAME.registerComponent('sound-controls', {

    init: function() {
        const el = this.el;
        el.addEventListener("mouseenter", function() {
            var img = document.querySelector("#mute");
            var sound = document.querySelector("#speaker");
            var control = sound.getAttribute("controlvar");
            if (control == "1") {
                img.setAttribute("src", "#soff")
                sound.components.sound.pauseSound();
                console.log("pause");
                sound.setAttribute("controlvar", "0");
            } else {
                img.setAttribute("src", "#son")
                sound.components.sound.playSound();
                console.log("Play");
                sound.setAttribute("controlvar", "1");
            }


        });
    }
});
/*
var img = document.querySelector("#mute");
            var sound = document.querySelector("#speaker");
            img.setAttribute("src", "#soff")
            sound.components.sound.stopSound();
*/