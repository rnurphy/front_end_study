main();

function main() {
    let promises = [];
    let result = [];


    // resolve 매개변수는 하나만 받을 수 있다.
    // 여러개를 보내고 싶으면 배열형태의 비구조할당으로 보내기
    new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(1);
            promises = [...promises, 1];
        }, 3000);
    }).then(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => { 
                resolve(2);
                promises = [...promises, 2];
            }, 2000);
        }).then(() => {
            new Promise((resolve, reject) => {
                setTimeout(() => { 
                    resolve(3);
                    promises = [...promises, 3];
                }, 1000);
            }).then(() => {
                console.log(promises);
            });
        });
    });

    new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(1);
        }, 3000);
    }).then(num => {
        result = [...result, num];
        new Promise((resolve, reject) => {
            setTimeout(() => { 
                resolve(2);
            }, 2000);
        }).then(num => {
            result = [...result, num];
            new Promise((resolve, reject) => {
                setTimeout(() => { 
                    resolve(3);
                }, 1000);
            }).then(num => {
                result = [...result, num];
                return result;
            }).then(r => console.log(r));
        });
    });

}
