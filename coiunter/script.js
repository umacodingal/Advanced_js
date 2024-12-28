window.onload = function () {
    var sec = document.getElementById("seconds")
    var start = document.getElementById("start")
    var stop = document.getElementById("stop")
    var reset = document.getElementById("reset")
    var seconds = 0
    var miliseconds = 0
    var interval;
    start.onclick = function () {
        interval = setInterval(StartTimer, 10)
    }
    stop.onclick = function () {
        clearInterval(interval)
    }
    reset.onclick = function () {
        clearInterval(interval)
        seconds = "00"
        miliseconds = "00"
        sec.innerHTML = seconds

    }
    function StartTimer() {
        miliseconds = miliseconds + 1
        sec.innerHTML = (seconds < 10) ? "0" + seconds : seconds
        seconds = (miliseconds == 100) ? seconds + 1 : seconds
        miliseconds = (miliseconds == 100) ? 0 : miliseconds
    }
}
