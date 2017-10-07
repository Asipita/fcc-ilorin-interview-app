var numb = (Number($("#qno").text()) - 1) * 10;

var correct = 0;

$('#showNextQuestion').on('click', () => {

        if ($(":checked + label").text() === $(".hide").text()) {
            $(".rightOrWrong").html(`
            <span class="green-text">RIGHT!</span><br>
            <span class="green-text">moving on to the next question</span>
        `)

            increaseMan(1)
                // console.log(correct)
                // correctanswer *= 10;

        } else {
            $(".rightOrWrong").html(`
            <span class="red-text">WRONG!</span><br>
            <span class="red-text">the next question is coming up</span>
        `)
        }
    })
    // console.log(correct)

// if (correct > 5) {
//     var passState = 'pass'
// } else {
//     var passState = 'fail'
// }

var increaseMan = (n) => {
    correct = correct + n;
}

$('.progress').html(`
<div class="determinate" style="width: ${numb}%"></div>`)

$('#lastpagescore').html(`
    your score was ${correct}  out of 100%, hence you
    ${passState}
`)