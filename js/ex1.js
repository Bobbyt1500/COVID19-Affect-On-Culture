var ex1_questions = [
    {title: "Chloe Hoecker (a watcher of the Sure Sure video streams) felt connected with the rest of the crowd, even though they were virtual.",
    answers: ["True", "False"],
    correct: "0"},
    {title: "Tonina Saputo (a live musician) felt like she was acting during her virtual performance as she had to pretend the audience was there.",
    answers: ["True", "False"],
    correct: "0",    
    },
    {title: 'In addition to the Los Angles Food Bank, Sure Sure\'s "Home Home Tour" supported which other charity to help the performing arts through the COVID-19 Pandemic?',
    answers: ["Cleveland Play House", "National Independent Venue Association"],
    correct: "1"
    }
]
var ex1_cur = 0;
var ex1_cor = 0;

function resetEX1() {
    $("button.ex1btn").show()
    $("#ex1score").show()
    $("#ex1reset").hide()

    ex1_cur = 0
    ex1_cor = 0

    setEX1()
}


function setEX1() {
    $("#ex1question").text(ex1_questions[ex1_cur]["title"])
    $("#ex1score").text("Score: " + ex1_cor + '/' + ex1_cur)

    $("button.ex1btn").removeClass("btn-danger")
    $("button.ex1btn").removeClass("btn-success")
    $("button.ex1btn").addClass("btn-primary")
    $("button.ex1btn").blur()

    for (var i = 0; i < ex1_questions[ex1_cur]["answers"].length; i++) {
        $("#ex1" + i).text(ex1_questions[ex1_cur]["answers"][i])
    }
}

function endEX1() {
    $("button.ex1btn").hide()
    $("#ex1score").hide()
    $("#ex1question").text("Final Score: " + ex1_cor + '/' + ex1_cur )
    $("#ex1reset").show()
}

$("button.ex1btn").click(function() {
    var id = this.id

    $("button.ex1btn").removeClass("btn-primary")
    $("button.ex1btn").addClass("btn-danger")

    $("#ex1" + ex1_questions[ex1_cur]["correct"]).removeClass("btn-danger")
    $("#ex1" + ex1_questions[ex1_cur]["correct"]).addClass("btn-success")

    if (id.slice(-1) == ex1_questions[ex1_cur]["correct"]) {
        ex1_cor++
    }
    ex1_cur++

    if (ex1_cur != ex1_questions.length) {
        setTimeout(setEX1, 3000)
    } else {
        setTimeout(endEX1, 3000)
    }
    
})

$(document).ready(function() {
    $("#ex1reset").hide()
    setEX1()
})