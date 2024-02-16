async function handleSearchclick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");  // 기본값 get 요청이라 옵션 필요없음
        // if(!response.ok) {
        //     throw await response.json();
        // }
        const responseData = await response.json();

        console.log(responseData);

        const productList = document.querySelector(".product-list");
        productList.innerHTML = ``;

        for(let product of responseData) {
            productList.innerHTML += ProductInfoTr(product);
        }
    } catch (error) {
        console.log(error);
    }
}

function ProductInfoTr({ productId, name, price, size }) {
    return `
        <tr>
            <td>${productId}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${size}</td>
        </tr>
    `
}