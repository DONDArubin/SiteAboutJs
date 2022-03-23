//username
const btn1 = document.querySelector("#btn1");

//triangle area
const btn2 = document.querySelector("#btn2");

//zompare string
const btn3 = document.querySelector("#btn3");

//max min
const btn4 = document.querySelector("#btn4");

//test
const btnTestSubmit = document.querySelector("#test__js__submit");
const btnsRadioTest = document.querySelectorAll('.test__radio__btn');
const ans = document.querySelectorAll('[data-ans]');
const divAns = document.querySelectorAll('[data-wrapper]');

//timer
const hours = document.querySelector('.time__hour');
const minutes = document.querySelector('.time__minute');
const seconds = document.querySelector('.time__second');

const startTimerBtn = document.querySelector("#button__timer__start");
const pauseTimerBtn = document.querySelector("#button__timer__pause");
const stopTimerBtn = document.querySelector("#button__timer__stop");
const btnValuesTimer = document.querySelector("#button__timer__start__value");

let hour = 00;
let minute = 00;
let second = 00;
let interval;






//user info
const userInfoBtn = document.querySelector("#button__footer");
const page = document.querySelector("#show__info");

//date
const date = document.querySelector("#show__info__date");

//username-page
const userName = document.querySelector("#show__info__name");







//USERNAME
btn1.addEventListener("click", function hello() {
    let username = document.getElementById("name").value;
    if (username.replace(/ /g, '').length==0) alert ("Ошибка. Попробуйте ввести имя пользователя заново!", '');
        else if (username.replace(/ /g, '').length > 10) alert ("Слишком длинное имя пользователя!", '');
            else alert('Hello ' + username + '!');
    //USERNAME-PAGE
    if(username!=null) userName.innerHTML = `<div class="show__info__name" id="show__info__name"><br></br>${username}</div>`;
});

//TRIANGLE AREA
btn2.addEventListener("click", function area() {
    let a = document.getElementById("side").value;
    let h = document.getElementById("height").value;
    if(a<0||h<0) alert("Неправильно введены данные!")
        else alert('Площадь треугольника равна: ' + (a*h)/2);
});

//COMPARE STRING
btn3.addEventListener("click", function compare() {
    let str1 = document.getElementById("firststr").value.replace(/ /g, '');
    let str2 = document.getElementById("secstr").value.replace(/ /g, '');
    if(str1.length==0 || str2.length==0) alert("Неправильно введены данные!")
        else if(str1.length == str2.length) alert('Количество символов совпало!');
            else alert('Количество символов не совпало!');
});

//MAX MIN
btn4.addEventListener("click", function maxMin() {
    let minMaxValue = document.querySelector("#massiv").value;
    minMaxValue = minMaxValue.replace(/ /g, '');
    minMaxValue = minMaxValue.split(',');
    let max = Math.max.apply(null, minMaxValue);
    let min = Math.min.apply(null, minMaxValue);
    if(isNaN(max) || isNaN(min)) alert("Неправильно введены данные!");
    else alert('Max значение: ' + max + '\n' + 'Min значение: ' + min)
});

//TEST
btnTestSubmit.addEventListener("click", function test(e) {
    e.preventDefault()
    let count = 0;

    btnsRadioTest.forEach(item => {
        item.style = "border-inline-start: 5px solid red;";
    });

    ans.forEach(item => {
            if (item.checked) {
                count++;
            }
            divAns.forEach(itemAns => {
                if (item.checked && itemAns.getAttribute('data-wrapper') == "true") {
                    itemAns.style = "border-inline-start: 5px solid green;";
                }
            });
    });

    alert(`У вас ${count} правельных ответов`);
    count = 0;
});


//TIMER
btnValuesTimer.addEventListener("click", function values(){
    hour = prompt("Введите количество часов",00);
    minute = prompt("Введите количество минут",00);
    second = prompt("Введите количество секунд",00);
    if(hour>23 || minute>59 || second>59) alert("Неправильно введены данные!");
        else if(hour==null || minute==null || second==null){
                alert("Неправильно введены данные!");
                hours.innerText = "00";
                minutes.innerText = "00";
                seconds.innerText = "00";
            } else if(hour=="" || minute=="" || second==""){
                        alert("Неправильно введены данные!");
                        hours.innerText = "00";
                        minutes.innerText = "00";
                        seconds.innerText = "00";
                    }else{
                        hours.innerText = hour;
                        minutes.innerText = minute;
                        seconds.innerText = second;
                    }
});

startTimerBtn.addEventListener("click", ()=>{
    if(hour==0 && minute==0 && second==0){
        alert("Введите данные!");
    } else {
        clearInterval(interval);
    interval = setInterval(startTimer, 1000);
    }
});

pauseTimerBtn.addEventListener("click", ()=>{
    clearInterval(interval);
});

stopTimerBtn.addEventListener("click", ()=>{
    clearInterval(interval);
    hour = 00;
    minute = 00;
    second = 00;
    hours.textContent = "00";
    seconds.textContent = "00";
    minutes.textContent = "00";
});


function startTimer(){
    second--;

    //seconds
    if(second < 9){
        seconds.innerText = "0" + second;
    }
    if(second > 9){
        seconds.innerText = second;
    }
    if(second < 0){
        minute--;
        minutes.innerText = "0" + minute;
        second = 59;
        seconds.innerText = second;
    }

    //minutes
    if(minute < 9){
        minutes.innerText = "0" + minute;
    }
    if(minute > 9){
        minutes.innerText = minute;
    }
    if(minute < 0){
        hour--;
        hours.innerText = "0" + hour;
        minute = 59;
        minutes.innerText = minute;
    }

    //hours
    if(hour < 9){
        hours.innerText = "0" + hour;
    }
    if(hour > 9){
        hours.innerText = hour;
    }
    if(hour < 0){
        alert("Время вышло!");
        clearInterval(interval);
        hour = 00;
        minute = 00;
        second = 00;
        hours.textContent = "00";
        seconds.textContent = "00";
        minutes.textContent = "00";
    }
    
}


//USER INFO
userInfoBtn.addEventListener("click", () => {
    page.requestFullscreen();
    page.style.display = "block";
});

page.addEventListener("click", () => {
    document.exitFullscreen();
    page.style.display = "none";
});


//DATE
let data = new Date();
let data2 = data.toISOString().split('T')[0];
date.innerHTML = `<div class="show__info__date" id="show__info__date">${data2}</div>`;


