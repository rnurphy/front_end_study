console.log(1);
console.log(2);
console.log(3);

// setTimeout(() => { 
//     console.log(4);
//     setTimeout(() => { 
//         console.log(5);
//     }, 2000);
// }, 3000);

// console.log(5);

// // Promise 자체는 비동기
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("1번");
//     }, 2000);
//     resolve("3번");     // resolve는 then호출
// }).then((result) => {
//     console.log(result);
// });

// console.log("2번");

console.log("프로그램 시작");

const p = new Promise((resolve, reject) => {
    console.log("여기서");
    console.log("여기까지");
    if(0 === 0) {
        resolve();
    }else {
        reject(new Error("오류"));
    }
});

p.then(() => {
    console.log("3초 뒤에 출력");
}).catch((error) => {
    console.log(error);
}).finally(() => {

});


console.log("여기가 먼저");