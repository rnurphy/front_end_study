async function handleAddclick() {
    const inputData = document.querySelectorAll(".product-inputs");
    const data = {
        name: inputData[0].value,
        price: inputData[1].value,
        size: inputData[2].value
    }
    const jsonData = JSON.stringify(data);

    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }

    try {
        const response = await fetch("http://localhost:8080/product/product", option);

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

