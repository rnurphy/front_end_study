async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/insert_and_select/data/list");  // 기본값 get 요청이라 옵션 필요없음
        if(!response.ok) {
            throw await response.json();
        }
        const responseData = await response.json();

        const studentList = document.querySelector(".student-list");
        studentList.innerHTML = ``;
        for(let student of responseData.data) {
            studentList.innerHTML += `
                <li>studentId: ${student.studentId} / name: ${student.name} / age: ${student.age}</li>
            `;
        }


    } catch (error) {
        console.log(error);
    }
}