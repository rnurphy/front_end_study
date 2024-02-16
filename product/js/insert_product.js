async function handleAddclick() {
    const inputData = document.querySelectorAll(".product-inputs");
    const data = {
        name: inputData[0].value,
        price: parseInt(inputData[1].value),
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

        const responseData = await response.json();
        console.log(responseData);
        alert(`${responseData.successCount}건의 상품 추가 완료`);
    } catch(error) {
        alert(error?.errorMessage);
    }
}

