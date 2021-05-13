var ex2_questions = [
    {title: "Good communication and the use of technology is ___________ to maintaining company culture and values during the pandemic.",
    answers: ["Essential", "Detrimental", "Unimportant"],
    correct: "0"},
    {title: "________________ can help make employees feel connected even though they are apart.",
    answers: ["In-Person Events", "Video Conferencing Tools", "Email Tools"],
    correct: "1",    
    },
    {title: 'Video conferencing tools help decrease __________________ by allowing the user to share visuals such as slide shows, charts, imagery, or other data.',
    answers: ["Understanding", "Miscommunication", "Productivity"],
    correct: "1"
    },
    {title: 'Video conferencing tools allow for people located ____________ to engage and participate in meetings that would otherwise require expensive travel costs.',
    answers: ["In the office", "Close-by", "Far-away"],
    correct: "2"
    },
    {title: 'Working from home allows employees to have a __________ work/life balance and do more activities outside of work.',
    answers: ["Healthier", "Worse", "Inadequate"],
    correct: "0"
    }
]
var ex2_cur = 0;
var ex2_cor = 0;

function resetEX2() {
    $("button.ex2btn").show()
    $("#ex2score").show()
    $("#ex2reset").hide()

    ex2_cur = 0
    ex2_cor = 0

    setEX2()
}

function endEX2() {
    $("button.ex2btn").hide()
    $("#ex2score").hide()
    $("#ex2question").text("Final Score: " + ex2_cor + '/' + ex2_cur )
    $("#ex2reset").show()
}


function setEX2() {
    $("#ex2question").text(ex2_questions[ex2_cur]["title"])
    $("#ex2score").text("Score: " + ex2_cor + '/' + ex2_cur)

    $("button.ex2btn").removeClass("btn-danger")
    $("button.ex2btn").removeClass("btn-success")
    $("button.ex2btn").addClass("btn-primary")
    $("button.ex2btn").blur()

    for (var i = 0; i < ex2_questions[ex2_cur]["answers"].length; i++) {
        $("#ex2" + i).text(ex2_questions[ex2_cur]["answers"][i])
    }
}

$("button.ex2btn").click(function() {
    var id = this.id

    $("button.ex2btn").removeClass("btn-primary")
    $("button.ex2btn").addClass("btn-danger")

    $("#ex2" + ex2_questions[ex2_cur]["correct"]).removeClass("btn-danger")
    $("#ex2" + ex2_questions[ex2_cur]["correct"]).addClass("btn-success")

    if (id.slice(-1) == ex2_questions[ex2_cur]["correct"]) {
        ex2_cor++
    }
    ex2_cur++

    if (ex2_cur != ex2_questions.length) {
        setTimeout(setEX2, 3000)
    } else {
        setTimeout(endEX2, 3000)
    }
})

$(document).ready(function() {
    $("#ex2reset").hide()
    setEX2()
})