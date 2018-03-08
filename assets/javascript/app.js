setTimeout(function(){ window.location.href = "answers.html"; }, 30000);

var timeLeft = 30;
var elem = document.getElementById('display');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

