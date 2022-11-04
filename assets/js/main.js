function gameCreate(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/img/teams/${player1}.svg" alt="${player1}">
        <strong>${hour}</strong>
        <img src="./assets/img/teams/${player2}.svg" alt="${player2}">
    </li>
    `
}

let delay = -0.3;
function cardCreate(data, dia, jogos) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${data} <span>${dia}</span></h2>
            <ul>
                ${jogos}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML =
    cardCreate('24/11', 'quinta',
        gameCreate('brasil', '16:00', 'serbia') + gameCreate('brasil', '16:00', 'serbia')
    )
    +
    cardCreate('28/11', 'segunda',
        gameCreate('switzerland', '19:00', 'brasil') + gameCreate('portugal', '16:00', 'uruguay')
    )
    +
    cardCreate('02/12', 'sexta',
        gameCreate('brasil', '17:00', 'cameroon') + gameCreate('brasil', '17:00', 'cameroon')
    )
    +
    cardCreate('02/12', 'sexta',
        gameCreate('brasil', '17:00', 'cameroon') + gameCreate('brasil', '17:00', 'cameroon')
    )
    +
    cardCreate('02/12', 'sexta',
        gameCreate('brasil', '17:00', 'cameroon') + gameCreate('brasil', '17:00', 'cameroon')
    )

$(".colors").find("div").each(function() {
    $(this).on("click", function() {
        var color = $(this).attr("class");
        var select = $(this).attr("select", true);
        var cards = $('#cards').html(); 
        var header = $(this).attr("data-header") ? $(this).attr("data-header") + '.svg' : 'header.svg';

        $(".colors").find("div").removeAttr("select");
        $(this).attr("select", true);
        $("body").removeAttr("class").addClass(color);
        $("#cards").html(cards);
        $("header img").attr("src", './assets/img/'+header).attr("style", "width: 9rem;");

        localStorage.setItem('color', `${color}`);
        localStorage.setItem('header', `${header}`);

    })
});

$(document).ready(function() {
    var color = localStorage.getItem('color');
    var header = localStorage.getItem('header');
    var headImg = header ? header + '.svg' : 'header.svg';

    $(".colors").find("div[class='yellow']").attr("select", true);
    $("body").removeAttr("class").addClass(color);
    $("header img").attr("src", './assets/img/'+headImg).attr("style", "width: 9rem;");

    if(color == color) {
        $(".colors").find("div").removeAttr("select");
        $(".colors").find("div[class='"+color+"']").attr("select", true)
    }
})