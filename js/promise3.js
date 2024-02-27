main();

function main() {
    let promises = [
        new Promise((resolve, reject) => { 
            setTimeout(() => resolve(1), 3000);
            resolve(4); 
        }).then((result) => {
            promises = [...promises, result];
        }).then(() => {
            console.log(promises);
        }),
        new Promise((resolve, reject) => { setTimeout(() => resolve(2), 2000) }),
        new Promise((resolve, reject) => { setTimeout(() => resolve(3), 1000) })
    ];

    

    // Promise.all(promises).then(result => console.log(result));

}
