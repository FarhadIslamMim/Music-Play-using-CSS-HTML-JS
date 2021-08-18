
for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {

        var text = this.innerHTML;
        console.log(text);

        AudioPlay(text);

    });
}

function AudioPlay(text) {
    switch (text) {
        case "A": new Audio("music/a.mp3");
            Audio.paly();
            break;

        case "B": new Audio("music/b.mp3");
            Audio.paly();
            break;

        case "C": new Audio("music/c.mp3");
            Audio.paly();
            break;
    }
}
