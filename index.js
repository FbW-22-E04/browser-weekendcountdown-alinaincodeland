


const form = document.querySelector('form');
const p = document.querySelector('p');
const input = document.querySelector('input');
const button = document.querySelector('button');


form.addEventListener("submit", (event) => {

    //preventing page reload
    event.preventDefault();

    let todayShort = new Date(Date.now());
    const todayLong = todayShort.toLocaleDateString("en-EN", { weekday: "long" });
    const daysLeft = 5 - todayShort.getDay();

    p.textContent = `Hello ${input.value}. Today is ${todayLong}. Only ${daysLeft} day(s) until weekend!`;

    // clear up input after pressing submit
    input.value = '';
});

