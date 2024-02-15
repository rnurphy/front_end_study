// promise를 함수로 정의할 때 쓰는 것이 async
// async의 끝에는 resolve()를 암묵적으로 호출하는 것으로 봄
async function fx1() {
    console.log("fx1 비동기 호출");
    // throw new Error();
    return 10;  // resolve의 의미를 가지는 리턴, 해당 리턴은 then에서 받을 수 있음
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + "출력");
}

async function fx3() {
    let arg = 0;
    let fx1Result = await fx1();    // 비동기를 동기로 바꿔주는 await
    arg = fx1Result;
    await fx2(arg);
}

async function handleSubmitClick2() {
    // fx1().then((result) => {
    //     console.log("then 호출");
    //     console.log(result);
    // }).catch(() => {
    //     console.log("오류 생성");
    // })

    // console.log("동기 실행");
    await fx3();
}

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        reject();
    });
    
    p1.then(() => {
        console.log("p1 then 실행");
        return 10;
    }).then((num) => {
        console.log(num);
    }).then(() => {
        console.log("세번째 then");
    }).catch(() => {
        console.log("오류");
    });

    p1.catch(() => {
        console.log("오류");
    });

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행");
}
