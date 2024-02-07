window.onload = () => {
    const day = ["일", "월", "화", "수", "목", "금", "토"];
    let now = new Date();
    console.log(now.getFullYear());
    console.log(now.getMonth() + 1); 
    console.log(now.getDate());
    console.log(day[now.getDay()]);
}

window.onkeyup = (e) => {
    if(e.keyCode === 27) {
        handleCancelClick();
    }
}

function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    submitButton.onclick = handleAddTodoSubmit;
    
    modal.classList.add("modal-show");
}

function handleEditTodoModalOpen(todoId) {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "수정하기";
    todoInput.value = "";
    submitButton.onclick = handleEditTodoSubmit;
    
    modal.classList.add("modal-show");
}

function convertDateKor(currentDate) {
    const dayKor = ["일", "월", "화", "수", "목", "금", "토"];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day = dayKor[currentDate.getDay()];

    return `${year}년 ${month}월 ${date}일(${day})`;
}

function handleAddTodoSubmit() {
    const modal = document.querySelector(".root-modal");
    const todoInput = modal.querySelector(".todo-input");
    modal.classList.remove("modal-show");

    let todoObject = {
        todoId: 1,
        content: todoInput.value,
        date: convertDateKor(new Date())
    }

    console.log(todoObject);
}

function handleEditTodoSubmit() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}