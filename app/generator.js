const generatorBtn = document.querySelector('.generatorGet__btn');
const greeting = [{
    title: "С Днем Рождения поздравляю", wish: "Счастья и здоровья я тебе желаю!", img: "./css/images/birthday_cake.JPG"
}, {title: "С Днем Рождения ", wish: "Счастья и здоровья я тебе желаю!", img: "./css/images/happy_birthday.PNG"}, {
    title: "Поздравляю, крепко обнимаю,",
    wish: "осуществления заветных желаний",
    img: "./css/images/holiday_balloons.JPG"
}];

function destroy(modal) {
    if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
        modal.removeEventListener("click", listener);
    }
}

function randomGreeting(options) {
    let addTitle = []
    let addWish = []
    let addImg = []
    options.forEach((element) => {
        title = element.title
        wish = element.wish
        img = element.img
        addTitle.push(title)
        addWish.push(wish)
        addImg.push(img)
    });
    randomTitle = addTitle[Math.floor(Math.random() * 3)]
    randomWish = addWish[Math.floor(Math.random() * 3)]
    randomImg = addImg[Math.floor(Math.random() * 3)]
    return {
        title: `${randomTitle}`, wish: `${randomWish}`, img: `${randomImg}`
    }
}

function createModal() {
    const generator = document.querySelector('.generator');
    const gen = document.querySelector(".generator__inner");
    let random = randomGreeting(greeting);
    destroy(gen);
    generator.insertAdjacentHTML("afterbegin", `<div class="generator__inner">
        <div class="generator__congratulations">
            <h2 class="generator__title">${random.title || "title"}</h2>
            <div class="generator_wish">
                <p class="generator_wish-1 generator_wish">${random.wish || "wish"}</p>
                <p class="generator_wish-2 generator_wish"></p>
                <p class="generator_wish-3 generator_wish"></p>
            </div>
            <div class="generator__images">
                <img class="generator__images-img" src="${random.img || "img"}">
            </div>
        </div>`);
    return generator
}

function greetingGet() {
    if (clickingEvent) {
        createModal();
    }
}

const options = {once: false, capture: false, pasive: false};

const listener = (event) => {
    const generatorBtn = document.querySelector('.generatorGet__btn');
    if (event.currentTarget.closest(".generatorGet__btn")) {
        createModal();
    }
        setTimeout(function () {
            destroy(document.querySelector(".generator__inner"));
        }, 5000);
}

const clickingEvent = generatorBtn.addEventListener("click", listener, options);




