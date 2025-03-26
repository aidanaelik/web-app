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

// ✅ Викторина нәтижесін тексеру
function checkQuiz() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value === "b") score++;
    if (q2 && q2.value === "a") score++;

    document.getElementById("result").innerText = "Сіздің нәтижеңіз: " + score + " / 2";
}

// ✅ Кездейсоқ дәйексөз шығару
const quotes = [
    '"Жасанды интеллект – болашақтың қозғаушы күші." – (Аноним)',
    '"ЖИ – бұл адамзаттың ең үлкен жетістіктерінің бірі." – (Илон Маск)',
    '"2050 жылға қарай ЖИ адам деңгейіндегі ойлауды меңгеруі мүмкін." – (Рэй Курцвейл)',
    '"ЖИ-ді басқарудың дұрыс жолын табу – XXI ғасырдың басты мәселесі." – (Стивен Хокинг)',
    '"Жасанды интеллект – адамзаттың болашағын өзгертетін технология." – (Сундар Пичай)'
];

function updateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// ✅ 5 секунд сайын жаңа дәйексөз көрсету
setInterval(updateQuote, 5000);
