AFRAME.registerComponent('vid-controls', {
    init: function() {
        let el = this.el;
        let video = document.querySelector("#vid1");
        let img = document.querySelector("#imgcont");
        let control = 1;
        console.log("control");
        el.addEventListener("mouseenter", function() {
            setTimeout(() => {
                if (control == 1) {
                    video.play();
                    img.setAttribute("src", "#play");
                    console.log("play");
                    control = control - 1;
                } else {
                    video.pause();
                    img.setAttribute("src", "#pause");
                    control = control + 1;
                }
            }, 1200);
        });
    }
});