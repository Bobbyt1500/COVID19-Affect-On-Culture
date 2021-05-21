var ex4_questions = [
    {title: "Virtual Workouts have become more _________ than ever.",
    answers: ["Challenging", "Popular", "Expensive"],
    correct: "1"},
    {title: "The ___________ room has become the most popular room to work out in at home",
    answers: ["Bed", "Dining", "Living"],
    correct: "2",    
    },
    {title: "Working out with others such as friends or remote groups helps maintain the _______________ fitness.",
    answers: ["Social and Community Aspects of", "Level of difficulty in", "Competitiveness of"],
    correct: "0"
    },
    {title: "Post-pandemic, virtual workouts are expected to _________________.",
    answers: ["Decrease in popularity as many return to regular fitness activities", "Continue to grow and increase in popularity", "Maintain the same level of popularity"],
    correct: "0"
    }
]
var ex4_cur = 0;
var ex4_cor = 0;

function resetex4() {
    $("button.ex4btn").show()
    $("#ex4score").show()
    $("#ex4reset").hide()

    ex4_cur = 0
    ex4_cor = 0

    setex4()
}

function endex4() {
    $("button.ex4btn").hide()
    $("#ex4score").hide()
    $("#ex4question").text("Final Score: " + ex4_cor + '/' + ex4_cur )
    $("#ex4reset").show()
}


function setex4() {
    $("#ex4question").text(ex4_questions[ex4_cur]["title"])
    $("#ex4score").text("Score: " + ex4_cor + '/' + ex4_cur)

    $("button.ex4btn").removeClass("btn-danger")
    $("button.ex4btn").removeClass("btn-success")
    $("button.ex4btn").addClass("btn-primary")
    $("button.ex4btn").blur()

    for (var i = 0; i < ex4_questions[ex4_cur]["answers"].length; i++) {
        $("#ex4" + i).text(ex4_questions[ex4_cur]["answers"][i])
    }
}

$("button.ex4btn").click(function() {
    var id = this.id

    $("button.ex4btn").removeClass("btn-primary")
    $("button.ex4btn").addClass("btn-danger")

    $("#ex4" + ex4_questions[ex4_cur]["correct"]).removeClass("btn-danger")
    $("#ex4" + ex4_questions[ex4_cur]["correct"]).addClass("btn-success")

    if (id.slice(-1) == ex4_questions[ex4_cur]["correct"]) {
        ex4_cor++
    }
    ex4_cur++

    if (ex4_cur != ex4_questions.length) {
        setTimeout(setex4, 3000)
    } else {
        setTimeout(endex4, 3000)
    }
})

$(document).ready(function() {
    $("#ex4reset").hide()
    setex4()
})