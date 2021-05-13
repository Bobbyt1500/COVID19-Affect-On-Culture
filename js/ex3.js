var ex3_questions = [
    {title: "Liza Granade felt like her virtual school work ______________.",
    answers: ["Was too challenging", "Took too much time", "Was too easy"],
    correct: "2"},
    {title: "Amanda Hecht a special education teacher felt like the _______________ was not the same teaching virtually.",
    answers: ["Student's focus", "Amount of hours worked", "Time between classes"],
    correct: "0",    
    },
    {title: 'Schools indirectly teach valuable life skills such as _________________ that will be missed without kids seeing their friends.',
    answers: ["How to act around others", "How to prepare meals", "How to stay organized"],
    correct: "0"
    },
    {title: 'Some students such as Spencer Blosfield don\'t want to return to in-person school as they are worried about the safety and find it ___________________.',
    answers: ["Difficult to find transportation to in-person school", "Easier to learn in their own home", "Difficult to complete written work"],
    correct: "1"
    }
]
var ex3_cur = 0;
var ex3_cor = 0;

function resetEX3() {
    $("button.ex3btn").show()
    $("#ex3score").show()
    $("#ex3reset").hide()

    ex3_cur = 0
    ex3_cor = 0

    setEX3()
}

function endEX3() {
    $("button.ex3btn").hide()
    $("#ex3score").hide()
    $("#ex3question").text("Final Score: " + ex3_cor + '/' + ex3_cur )
    $("#ex3reset").show()
}


function setEX3() {
    $("#ex3question").text(ex3_questions[ex3_cur]["title"])
    $("#ex3score").text("Score: " + ex3_cor + '/' + ex3_cur)

    $("button.ex3btn").removeClass("btn-danger")
    $("button.ex3btn").removeClass("btn-success")
    $("button.ex3btn").addClass("btn-primary")
    $("button.ex3btn").blur()

    for (var i = 0; i < ex3_questions[ex3_cur]["answers"].length; i++) {
        $("#ex3" + i).text(ex3_questions[ex3_cur]["answers"][i])
    }
}

$("button.ex3btn").click(function() {
    var id = this.id

    $("button.ex3btn").removeClass("btn-primary")
    $("button.ex3btn").addClass("btn-danger")

    $("#ex3" + ex3_questions[ex3_cur]["correct"]).removeClass("btn-danger")
    $("#ex3" + ex3_questions[ex3_cur]["correct"]).addClass("btn-success")

    if (id.slice(-1) == ex3_questions[ex3_cur]["correct"]) {
        ex3_cor++
    }
    ex3_cur++

    if (ex3_cur != ex3_questions.length) {
        setTimeout(setEX3, 3000)
    } else {
        setTimeout(endEX3, 3000)
    }
})

$(document).ready(function() {
    $("#ex3reset").hide()
    setEX3()
})