async function handleSearchclick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");  // 기본값 get 요청이라 옵션 필요없음
        if(!response.ok) {
            throw await response.json();
        }
        const responseData = await response.json();
        console.log(typeof(responseData));
        console.log(responseData.data);

        const productList = document.querySelector(".product-list");
        productList.innerHTML = ``;
        for(let product of responseData.data) {
            productList.innerHTML += `
                <tr>
                    <td>${product.productId}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.size}</td>
                </tr>
            `;
        }
    } catch (error) {
        console.log(error);
    }
}