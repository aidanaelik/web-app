function checkAnswer(answer) {
    let result = document.getElementById("result");
    if (answer === 'A') {
        result.innerHTML = "Дұрыс жауап!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Қате! Дұрыс жауап: <html>";
        result.style.color = "red";
    }
}
