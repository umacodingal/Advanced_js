var num;
var stop = true
var t;
var random = Math.random() * 100
random = Math.floor(random)
function change() {
    var random = Math.random() * 100
    random = Math.floor(random)
    num.innerHTML = random
}

function stopstart() {
    if (random % 2 == 1 && stop == true) {
        stop = false
        t = setInterval(change, 100)
    }
    else {
        clearInterval(t)
        stop = true
    }
}
window.onload = function () {
    num = document.getElementById("num")
    stopstart()
}