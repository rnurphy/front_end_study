async function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };
    console.log(data);
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    const dataObj = JSON.parse(jsonData);
    console.log(dataObj);

    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }
    
    // const p = fetch("http://localhost:8080/insert_and_select/data/addition", option);

    // p.then((response) => {
    //     response.json()
    //     .then((json) => {
    //         console.log(json.data);  // parse 하지 않아도 js객체로 바껴서 나온다
    //     }).catch(() => {
    //         console.log(error);
    //     });
    // });
    // 비동기 처리가 정상적으로 처리되었을때 실행할 함수가 then

    // await을 쓸꺼면 try-catch 달아줘야 한다.
    try {
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option);

        if(!response.ok) {
            throw await response.json();
        }

        console.log(response);

        const json = await response.json();

        console.log(json);
    
        console.log("test");
    } catch(error) {
        alert(error.errorMessage);
    }
}