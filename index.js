var input = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var input3 = document.querySelector('#input3');
var result = document.querySelector('#result');




// function updateResult(n, m) {

//    n = +input1.value;
//    m = +input2.value;

//     if(Number.isInteger(n/m)) {
//         console.log('cel')
//     }else {
//         console.log('no cel')
//     }
    
// }


// function updateResult(n, m) {

    
//    n = +input1.value;
//    m = +input2.value;

//    let chunk = Math.trunc(n / m)
    
//    let x = chunk * m;
//    let d = n - x
//     console.log(d)
    
// }


// function updateResult(n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0) {
//     let result;
//     let sec;
//     let thrd;
//     let final;
//     let d;

//     result =  n1 > n2 ? n1 : n2;
//     sec =  n3 > n4 ? n3 : n4;
//     thrd =  n4 > n5 ? n4 : n5;
//     final = result > sec ? result : sec;
//     d = final > thrd ? final : thrd;

//     console.log(d)
// }



// function updateResult(n, n2, bool) {

//     if (n === undefined || n2 === undefined) return;

//        for(let i = n; i < n2; i++) {
//         if(bool) {
//             if(i % 2 == 0 ) {
//                 console.log(i)
//             }
//         }else {
//             if(i % 2 > 0 ) {
//                 console.log(i)
//             }
//         }
//        } 
// }

// updateResult(1, 10, true)



// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

// function findPerfect(n) {
    
//     let d = 0;
//     for(let i = 1; i < n; i++){
//         if(n % i == 0) {
//             d += i
//         }
//     }
//     if(n === d) {
//         return n;
//     }
    
// }


// function updateResult(max,min) {
//     max = +input2.value;
//     min = +input.value;

//     for(let i = min; i < max; i++) {
        
//         let result =  findPerfect(i)
//         if(result !== undefined){
//             console.log(result)
//         }
        
//     }
// }



// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были


// function updateResult(h,m,s) {
//     h = +input.value || '00';
//     m = +input2.value || '00';
//     s = +input3.value || '00';

//     h > 24 ? h = 24 : h;
//     m > 60 ? m = 60 : m;
//     s > 60 ? s = 60 : s;

//     h < 0 ? h = '00' : h
//     m < 0 ? m = '00' : m
//     s < 0 ? s = '00' : s

//     result.innerText = `${h}:${m}:${s}`
// }



// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// function updateResult(h,m,s) {

//     h = +input.value || 0;
//     m = +input2.value || 0;
//     s = +input3.value || 0;
    
//     let hm = h * 3600;
//     let mm = m * 60;

//     result.innerText = hm + mm + s
    
// } 




// Написать функцию, которая принимает количество секунд, переводит их в часы, 
// минуты и секунды и возвращает в виде строки «чч:мм:сс».


// function updateResult(s) {
//     s = +input.value;
//     let h = 0;
//     let m = 0;
//     for(let i = 60; i <= s;) {
//         s -= 60;
//         m += 1
//     }
//     for(let i = 60; i <= m;) {
//         m -= 60;
//         h += 1;
//     }

//     result.innerText = `${h}:${m}:${s}`
//     console.log(h)
//     console.log(m)
//     console.log(s)
// }


// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, 
// и возвращает результат в виде строки «чч:мм:сс».



// function makeSeconds(h,m,s) {

//     let hm = h * 3600;
//     let mm = m * 60;
    
//     // result.innerText = hm + mm + s
//     return hm + mm + s
// } 


// function secondsChange(s) {
//         let h = 0;
//         let m = 0;
//         for(let i = 60; i <= s;) {
//             s -= 60;
//             m += 1
//         }
//         for(let i = 60; i <= m;) {
//             m -= 60;
//             h += 1;
//         }
    
//         result.innerText = `${h}:${m}:${s}`
//     }


// function updateResult(date1, date2) {

//     date1 = input.value.split(':').map(i => i = parseInt(i));
//     date2 = input2.value.split(':').map(i => i = parseInt(i));
//     console.log(date2.reduce((a,b) => a + b, 0))
//     console.log(date1.reduce((a,b) => a + b, 0))
//     if((date2.reduce((a,b) => a + b, 0)) > (date1.reduce((a,b) => a + b, 0))) {
//         result.innerText = "Wrong enter time"
//         return
//     }
//     let seconds1 = makeSeconds(date1[0], date1[1], date1[2]);
//     let seconds2 = makeSeconds(date2[0], date2[1], date2[2])

//     let dif = seconds1 - seconds2;
//     if(dif < 0) {
//         result.innerText = "Wrong enter time"
//     }
//     secondsChange(dif)

// }

// makeSeconds(1,30,30)


// Написать функцию, которая принимает 2 числа и возвращает -1, 
// если первое меньше, чем второе; 1 – если первое больше, 
// чем второе; и 0 – если числа равны.

// function updateResult() {
//     const n = +input.value;
//     const m = +input2.value;
//     let x;
//     n < m ? x = '-1' : x = '1';
//     n == m ? x = '0' : null;

//     let p = document.createElement('p');
//     p.innerText = x;
//     result.append(p);
// }

// Написать функцию, которая вычисляет факториал переданного ей числа.

// function updateResult(n) {
//     n = +input.value;
//     let f = 1;
//     for(let i = 1; i <= n; i++) {
//         f *= i;
//         console.log(f)
//     }
//     let p = document.createElement('p');
//     p.innerText = f;
//     result.append(p);
// }


// function updateResult() {
//     const result = document.getElementById('result');
//     const num1 = document.getElementById('input1');
//     const num2 = document.getElementById('input2');
//     const num3 = document.getElementById('input3');

//     const n = num1.value;
//     const m = num2.value;
//     const t = num3.value;
//     const z = n + m + t;
//     let p = document.createElement('p');
//     p.innerText = z;
//     result.append(p);  
// }



// function updateResult(n, n1) {
//     n = +input.value;
//     n1 = +input2.value;

//     if(n1 != 0) {
//         result.innerText = n * n1
//     }else {
//         n *= n
//         result.innerText = n
//     }

// }


// let arr = [1,2,3,4,5,6,7,8,9]

// function c(i) {
//     console.log(i)
// }

// arr.map(i => i += 1)

// arr.forEach(c)
// let obj = {
//     1: 'asd'
// }

// let obj1 = {
//     1: 'asd'
// }

// obj1 = obj
// console.log(obj === obj1)


// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
// и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


// let car = {
//     country: 'USA',
//     model: 'tesla',
//     year: 2020,
//     speed: 100
// }


// function showCar(c) {
//     for(key in c) {
//         let val = c[key];
//         console.log(key + " : " + val)
//     }
// }
// showCar(car)

function countTime(way) {
    let time = way / 60;
    let restHours = 0;
    
    for(let i = 1; i < time; i++) {
        if(i % 4 == 0) {
            restHours++
            console.log(time)
        }
        

    }
   time += restHours;
    console.log("time for this trip = " + time + " hours")
}


countTime(500)
console.log(16 % 4)