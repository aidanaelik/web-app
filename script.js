function showInfo(year) {
    let info = document.getElementById("info");
    let text = "";

    switch(year) {
        case '1950':
            text = "1950 жылдары Алан Тьюринг ЖИ негізін қалады.";
            break;
        case '1980':
            text = "1980 жылдары сараптамалық жүйелер танымал болды.";
            break;
        case '2000':
            text = "2000 жылдары машиналық оқыту қарқынды дамыды.";
            break;
        case '2020':
            text = "2020 жылдары терең нейрондық желілер жасалды.";
            break;
        default:
            text = "Кезең туралы мәлімет жоқ.";
    }

    info.innerHTML = text;
}

function checkQuiz() {
    let score = 0;
    
    if (document.querySelector('input[name="q1"]:checked')?.value === "b") {
        score++;
    }
    if (document.querySelector('input[name="q2"]:checked')?.value === "a") {
        score++;
    }
    
    let resultText = `Сіздің нәтижеңіз: ${score} / 2`;
    document.getElementById("result").innerText = resultText;
}

// ЖИ туралы кездейсоқ дәйексөздер
const quotes = [
    "\"Жасанды интеллект – болашақтың қозғаушы күші.\"",
    "\"2050 жылы роботтар біздің әр күнімізге әсер ететін болады.\"",
    "\"ЖИ адамзаттың ең мықты серігі бола алады.\"",
    "\"Жасанды интеллект – жаңа революцияның бастамасы.\""
];

function changeQuote() {
    let quoteBox = document.getElementById("quote");
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.innerHTML = quotes[randomIndex];
}

setInterval(changeQuote, 5000); // Әр 5 секунд сайын өзгерту
