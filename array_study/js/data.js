// // spread 연산

// let array = [1, 2, 3, 4];
// array.push(5);
// array = [...array, 5, 6, ...array];

// console.log(array);

// let obj = {
//     name: "김준일",
//     age: 31
// }

// let obj2 = {
//     ...obj,
//     name: "김준이",
//     name: "김준삼",
// }

// console.log(obj)
// console.log(obj2)

// // 비구조할당
// let obj = {
//     id: 1,
//     name: "김준일",
//     age: 31
// }

// let {id, name, age} = obj;

let dataList = [];

window.onload = () => {
    getDataList();

    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            const inputValue = addInput.value;

            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;

            const dataObj = {
                id: lastId + 1,
                content: inputValue
            }

            fetch("http://localhost:8080/data_array/data/addition", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataObj)
            });

            dataList = [...dataList, dataObj];

            addInput.value = "";

            getDataList();
        }
    }
}

function ContentData({ id, content }) {
    return `
        <li>
            <span>${id}번 </span>
            <span>${content}</span>
            <input type="text" class="edit-input" value="${content}">
            <button onclick="editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
    `;
}

function getDataList() {
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = "";

    for(let dataObj of dataList) {
        contentList.innerHTML += ContentData(dataObj);
    }
}

function removeData(id) {
    // const findId = (dataObj) => dataObj.id !== id;
    const findId = function (dataObj) {
        return dataObj.id !== id;
    }

    // dataList = dataList.filter((dataObj) => dataObj.id !== id);
    dataList = dataList.filter(findId);

    getDataList();
}

function editData(id) {
    let findIndex = -1;

    for(let i = 0; i < dataList.length; i++) {
        if(dataList[i].id === id) {
            findIndex = i;
            break;
        }    
    }

    let findObj = dataList.filter((dataObj) => dataObj.id === id)[0];
    
    findIndex = dataList.indexOf(findObj);

    const editInput = document.querySelectorAll(".edit-input");

    dataList[findIndex].content = editInput[findIndex].value;

    getDataList();
}