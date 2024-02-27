main();

function main() {
    p1(3, "data1").then((result) => console.log(result));

    setTimeout(() => {
        p2("data2").then((result) => {
            console.log(result)
        });
    }, 4000); 

    p2("data3").then(result => p3(result, 100).then(result => console.log(result)));

    p4("data4");

}

function p1(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time * 1000);
    });
}

// async는 resolve() 호출 불가, 리턴을 해줘야함
async function p2(data) {
    return data;
}

async function p3(data, value) {
    return {
        [data]: value
    }
}

// async 내에서만 await을 쓸 수 있다.
async function p4(data) {
    // await을 안 달면 프로미스를 반환
    // then(result)를 축약한 과정이라고 보면 됨
    const r1 = await p2(data);
    const r2 = await p3(r1, 200);

    // const r2 = await p3( await p2(data), 200);

    console.log(r2);
}