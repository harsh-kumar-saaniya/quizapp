
var allQuestions = [
    {
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },

    {
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },

    {
        question: "How we write comments in Javscript",
        answer: "//This is comment",
        options: [
            "//This is comment",
            "/*Engine Mail*/",
            "#Electric Mail",
            "None of these"
        ]
    },
    {
        question: "Javascript is: ",
        answer: "Object Oriented Programming language",
        options: [
            "Static functionality based language",
            "Hyper text Markup language",
            "Object Oriented Programming language",
            "None of these"
        ]
    },

    {
        question: "What is the full form of DOM",
        answer: "Document object model",
        options: [
            "Document of Object",
            "Document object module",
            "Document object model",
            "None of these"
        ]
    },

    {
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]


    }
];



        
window.onload = questionDisplyer(0)

function questionDisplyer(e) {


    var question = document.getElementById("question");
    question.innerHTML = allQuestions[e].question
    // for options
    var option = document.getElementsByClassName("option");
    for (var i = 0; i < option.length; i++) {
        option[i].innerHTML = allQuestions[e].options[i]

    }

}



var questionCounter = 0;

function next(e) {
    questionCounter++
    if (questionCounter == 5) {
        this.window.location.href = "result.html"
    }

    scoreCounter()
    questionDisplyer(questionCounter)
    questionUpdater()
    activeClassRemover();
}


// function for updating the question number
var x = 1;
function questionUpdater() {
    x++
    var updater = document.getElementById("updater");
    updater.innerHTML = "Question" + " " + x + "/6";

}


function activeClassinputer(e) {
    activeClassRemover()
    e.classList.add("active");

}

function activeClassRemover() {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
    }
}



var minute = 5;
var second = 60;

function timer() {
    second--
    var timer = document.getElementById("timer");

    if (second == 0) {
        second = 60;
        minute--

    }

    if (minute == -1 || second == -1) {
        alert("Time up!!!");
        window.location.href = "result.html";
    }


    timer.innerHTML = "0" + minute + ":" + second;

    if (second < 10) {
        timer.innerHTML = "0" + minute + ":" + "0" + second;

    }


}


setInterval(timer, 1000);


var score = 0;


function scoreCounter() {

    var active = document.querySelector("li.option.active").innerHTML

    for (var i = 0; i < allQuestions.length; i++) {
        if (allQuestions[i].answer == active) {
            score += 10;

            sessionStorage.setItem("score", score);
            // console.log(score)
        }


    }

    // console.log(active)
}



