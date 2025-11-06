let Qcontent = document.querySelector("h2")
let buttonStart = document.querySelector("#start")
let buttonRestart = document.querySelector("#restart")
let audioOne = document.querySelector("#audio1")
let audioCorrect = document.querySelector("#audioCorrect")
let audioError = document.querySelector("#audioerror")
let reponsesContainer = document.querySelector("#parent")
let scoreFinal = document.querySelector("#scorefinal")
let index = 0
let score = 0

let qOne = {
    question: "Question 1: Qu’est-ce qui est petit et marron ?",
    reponses: ["1:macron", "2:melon", "3:marron", "4:norram"],
    goodAnswer: "3"
}
let qTwo = {
    question: "Question N°2:Le gras c'est....?",
    reponses: ["1°:la mort", " 2°:Pas bon", " 3°:americain", "4°:la vie"],
    goodAnswer: "4"
}
let qThree = {
    question: "Question N°3:Les rousse...?",
    reponses: ["1°:Ca pue", "2°:La femme ta vie", "3°:Pas mon style", "4°:Une erreur de la nature"],
    goodAnswer: "2"
}
let qFour = {
    question: "Question N°4:La tartiflette...",
    reponses: ["1°:Le meilleur plat de l'univers", "2°:Un truc pas ouf", " 3°:Pas mauvais mais la raclette le tabasse", "4°:Je suis intolérent au lactose"],
    goodAnswer: "1"
}
let qFive = {
    question: "Question N°5: Qui est l'élève péféré de thomas ?",
    reponses: ["1°:Edouard", "2°:Guillaume", "3°:Fabien", "4°:Aucun il prefere la promo tau "],
    goodAnswer: "1"
}
let qSix = {
    question: "Question N°6: Quelle est la meilleure promo ?",
    reponses: ["1°:Promo Tau", "2°:Promo Psi"],
    goodAnswer: "2"
}
let tabQuizz = [qOne, qTwo, qThree, qFour, qFive, qSix]

function updateQuizz(index) {
    Qcontent.textContent = tabQuizz[index].question;
    buttonStart.style.display = "none"
    let divAnswer = document.createElement("div")
    divAnswer.setAttribute("class", "answers")
    reponsesContainer.appendChild(divAnswer)

    for (let j = 0; j < tabQuizz[index].reponses.length; j++) {

        let newDiv = document.createElement("div")
        let newAnsbtn = document.createElement("button")
        divAnswer.appendChild(newDiv)
        newDiv.appendChild(newAnsbtn)
        
        newAnsbtn.textContent = tabQuizz[index].reponses[j]

        newAnsbtn.addEventListener("click", function () {
            if (tabQuizz[index].goodAnswer == newAnsbtn.textContent[0]) {
                score++
                audioCorrect.cloneNode().play()
            } else {
                audioError.cloneNode().play()
            }

            index++

            if (index < tabQuizz.length) {
                divAnswer.remove()
                updateQuizz(index)
            } else {
                Qcontent.style.display = "none"
                scoreFinal.textContent = `Votre score est de ${score}`
                divAnswer.style.display = "none"
                buttonRestart.style.display = "block"
            }
        });
    }
}
document.getElementById("start").addEventListener("click", function () {
    audioOne.play()
    audioOne.loop = true

    if (index < tabQuizz.length) {
        updateQuizz(index)
    }

});

document.getElementById("restart").addEventListener("click", function () {
    location.reload()
});