let phrases = [
    { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'посмотреть YouTube', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
    { text: 'читать про достопримечательности Новочеркасска', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'посмотреть новости с Элджеем и ужаснуться', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'прослушать старенькую кассету', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'проверить непрочитанное в социальных сетях', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function() {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);

    if (randomElement.text.length > 35) {
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '38px';
    }
});

for (let i = 0; i <= 2; i++) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
}