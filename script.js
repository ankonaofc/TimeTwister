let [sec, min, hr] = [0, 0, 0];
let displayTime = document.getElementById("timer");
let t = null;
let n = document.getElementById("str");

function stopwatch() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hr++;
        }
    }
    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function start() {
    if (t != null) {
        clearInterval(t);
    }
    t = setInterval(stopwatch, 1000);
    n.name = "pause-circle-outline";
}

function stop() {
    clearInterval(t);
    n.name = "play-circle-outline";
}

function reset() {
    clearInterval(t);
    [sec, min, hr] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    n.name = "play-circle-outline";
}