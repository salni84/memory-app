let symbols = ["jungs1.jpg", "jungs3.jpg", "jungs12.jpg", "jungs5.jpg", "jungs13.jpg", "jungs7.jpg", "jungs8.jpg", "jungs9.jpg", "jungs10.jpg", "jungs11.jpg"];


let farben = ["blue", "red", "yellow", "black", "green", "transparent"]


function gameStart () {

    let gameSymbols = symbols.slice(0, document.getElementById("size").value)

    let value = document.getElementById("size").value

    let cardSymbols  = gameSymbols.concat(...gameSymbols)  // array anhängen damit die anzahl verdoppelt wird.

    let umgedeckt = "umgedeckt"
    let selectedCard1 = umgedeckt
    let selectedCard2 = umgedeckt
    let versuche = 0
    let fehler = 0

    document.getElementById("game").innerText = ""

    document.getElementById("counter").innerText = versuche++
    document.getElementById("fails").innerText = fehler++

    cardSymbols.sort(function cb() {return 0.5 - Math.random()})


    for (let x of cardSymbols) {                              // Schlaufe um die DIV's zu erstellen

        const card = document.createElement("div")   // Erstellt einzelnes DIV-Element
        card.classList.add("card")                           // Hängt card der Klasse "card" an.


        card.addEventListener("click", function () {


            if (selectedCard1 === umgedeckt) {
                selectedCard1 = card
                card.style.backgroundImage = "url('')"
                card.innerHTML = "<img src="+x+" width = 50px>"

            } else {
                if (selectedCard2 === umgedeckt) {
                    selectedCard2 = card
                    card.style.backgroundImage = "url('')"
                    card.innerHTML = "<img src="+x+" width = 50px>"


                    if (selectedCard2.innerHTML === selectedCard1.innerHTML) {

                        document.getElementById("counter").innerText = versuche++
                        selectedCard1 = umgedeckt
                        selectedCard2 = umgedeckt


                        document.getElementById("game").style.backgroundColor = farben[1]
                        setTimeout(function () {
                            document.getElementById("game").style.backgroundColor = "transparent"
                        }, 1000)

                        setTimeout(function () {
                            document.getElementById("match").style.color = "black"
                        }, 1000)
                        document.getElementById("match").style.color = "yellow"


                    } else {
                        setTimeout(function () {
                            document.getElementById("fails").innerText = fehler++

                            selectedCard1.innerText = ""
                            selectedCard2.innerText = ""
                            selectedCard1.style.backgroundImage = "url('html.png')"
                            selectedCard2.style.backgroundImage = "url('html.png')"
                            selectedCard1 = umgedeckt
                            selectedCard2 = umgedeckt


                        }, 1000)
                    }
                }
            }
        });


        document.getElementById("game").appendChild(card);
        document.querySelector("main").style.width = value*60 + "px"

    }
}

document.getElementById("start").addEventListener('click', gameStart )

farben.sort(function cb() { return 0.5 - Math.random()})


gameStart()








