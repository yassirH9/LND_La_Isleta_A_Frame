var ruta_data = [{
        imgid: "img0",
        titleid: "title0",
        subtitleid: "subtitle0",
        src: "assets/img/about/1.jpg",
        title: "Plaza de la puntilla",
        subtitle: "Este emplazamiento de la ruta aporta una gran vista de toda la playa de las canteras hasta el centro comercial de las arenas, además cuenta con una estatua dedicada a Juan Casalla Saavedra alias \"El Chacalote\" y una escultura de Cesar Manrique \"Escultura de viento\"."
    },
    {
        imgid: "img1",
        titleid: "title1",
        subtitleid: "subtitle1",
        src: "assets/img/about/2.jpg",
        title: "Real Club Victoria",
        subtitle: "El siguiente emplazamiento de la ruta el Real Club Victoria, fundado a principios del siglo 20 por Pepe Gonçalves en 1910."
    },
    {
        imgid: "img2",
        titleid: "title2",
        subtitleid: "subtitle2",
        src: "assets/img/about/3.jpg",
        title: "Mercado del puerto",
        subtitle: "El mercado del puerto es una estructura de hierro forjado ensamblada e inaugurada en 1891, este funciono como mercado de abasto hasta la actualidad y fue remodelado en 1994."
    },
    {
        imgid: "img3",
        titleid: "title3",
        subtitleid: "subtitle3",
        src: "assets/img/about/4.jpg",
        title: "Parroquia de Nuestra Sra De La Luz",
        subtitle: "La parroquia de Nuestra Sra De La Luz ubicada en el emplazamiento de la antigua ermita de la luz fue construida alrededor de 1900 y formando parte de la historia de la isleta."
    },
    {
        imgid: "img4",
        titleid: "title4",
        subtitleid: "subtitle4",
        src: "assets/img/about/5.jpg",
        title: "Castillo de la luz",
        subtitle: "El Castillo de La Luz fue construido en el año 1494. Una de sus características principales es que se levantó como la primera edificación de carácter defensivo de la ciudad después la conquista de Gran Canaria"
    },
    {
        imgid: "img5",
        titleid: "title5",
        subtitleid: "subtitle5",
        src: "assets/img/about/6.jpg",
        title: "Antigua fabrica de hielo",
        subtitle: "La antigua fabrica de hielo de la isleta un emplazamiento el cual esta siendo remodelado a día de hoy."
    },
    {
        imgid: "img6",
        titleid: "title6",
        subtitleid: "subtitle6",
        src: "assets/img/about/7.jpg",
        title: "Monumento a los marineros",
        subtitle: "Situado en la entrada a la zona portuaria de las palmas se encuentra el monumento a los marineros creada por Pedro Barral en 1956."
    }

];
var galery = [{
        id: "imgGL1",
        idint: "inGL1",
        txtid: "txtGL1",
        src: "assets/img/portfolio/1.jpg",
        txt: "Antigua entrada al puerto de la luz"
    },
    {
        id: "imgGL2",
        idint: "inGL2",
        txtid: "txtGL2",
        src: "assets/img/portfolio/2.jpg",
        txt: "Ermita de la luz"
    },
    {
        id: "imgGL3",
        idint: "inGL3",
        txtid: "txtGL3",
        src: "assets/img/portfolio/3.jpg",
        txt: "Edificación de la nueva iglesia de la luz"
    },
    {
        id: "imgGL4",
        idint: "inGL4",
        txtid: "txtGL4",
        src: "assets/img/portfolio/4.jpg",
        txt: "Playa de las canteras"
    },
    {
        id: "imgGL5",
        idint: "inGL5",
        txtid: "txtGL5",
        src: "assets/img/portfolio/5.jpg",
        txt: "Vista aérea de la isleta"
    },
    {
        id: "imgGL6",
        idint: "inGL6",
        txtid: "txtGL6",
        src: "assets/img/portfolio/6.jpg",
        txt: "La isleta edificada imagen aérea"
    },
    {
        id: "imgGL7",
        idint: "inGL7",
        txtid: "txtGL7",
        src: "assets/img/portfolio/7.jpg",
        txt: "La puntilla"
    },
    {
        id: "imgGL8",
        idint: "inGL8",
        txtid: "txtGL8",
        src: "assets/img/portfolio/8.jpg",
        txt: "Antigua piscina de la isleta"
    },
    {
        id: "imgGL9",
        idint: "inGL9",
        txtid: "txtGL9",
        src: "assets/img/portfolio/9.jpg",
        txt: "El istmo de la isleta"
    },
    {
        id: "imgGL10",
        idint: "inGL10",
        txtid: "txtGL10",
        src: "assets/img/portfolio/10.jpg",
        txt: "Salinas de la isleta"
    }

];
window.onload = LoadEv;
console.log("inicio ruta_data");

function LoadEv() {
    for (var i = 0; i < ruta_data.length; i++) {
        var img = document.getElementById(ruta_data[i].imgid);
        var title = document.getElementById(ruta_data[i].titleid);
        var subtitle = document.getElementById(ruta_data[i].subtitleid);

        img.src = ruta_data[i].src;
        title.innerText = ruta_data[i].title;
        subtitle.innerText = ruta_data[i].subtitle;
        console.log("ruta_data_dis");
    }
    for (var i = 0; i < galery.length; i++) {
        var img = document.getElementById(galery[i].id);
        var txt = document.getElementById(galery[i].txtid)
        var ini = document.getElementById(galery[i].idint);
        ini.src = galery[i].src;
        img.src = galery[i].src;
        txt.innerText = galery[i].txt;
        console.log("galery_dis" + i);
    }
}