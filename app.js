function doubleDigiter(digit) {
    if (digit.length == 1) {
        return "0" + digit;
    } else {
        return digit;
    }
}

window.setInterval(() => {
    let time = "",
        date = new Date();
    let hours = "",
        minutes = "",
        seconds = "";
    hours = doubleDigiter(String(date.getHours()));
    minutes = doubleDigiter(String(date.getMinutes()));
    seconds = doubleDigiter(String(date.getSeconds()));
    time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("display").innerHTML = time;
}, 999);
