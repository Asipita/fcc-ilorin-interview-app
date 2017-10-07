var numb = (Number($("#qno").text()) - 1) * 10;

// var x = [];

$('#showNextQuestion').on('click', () => {

    if ($(":checked + label").text() === $(".hide").text()) {

        incrementScore();

        $(".rightOrWrong").html(`
            <span class="green-text">RIGHT!</span><br>
            <span class="green-text">moving on to the next question</span>
        `)


    } else {
        $(".rightOrWrong").html(`
            <span class="red-text">WRONG!</span><br>
            <span class="red-text">the next question is coming up</span>
        `)
    }
})

var incrementScore = () => {
    $.ajax({
        url: '/scorer',
        method: 'POST',
        data: {
            factor: Number(1)
        }
    })
}

$('.progress').html(`
<div class="determinate" style="width: ${numb}%"></div>`)

// $('#lastpagescore').html(`
//     your score was ${correct}  out of 100%, hence you
//     ${passState}
// `)