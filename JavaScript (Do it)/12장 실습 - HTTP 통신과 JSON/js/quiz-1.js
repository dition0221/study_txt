/* 서버에서 JSON 자료 가져오기 */
const jsonUrl = "http://reqres.in/api/products/10";
let xhr = new XMLHttpRequest();
xhr.open("GET", jsonUrl);
xhr.send();


xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) { // 데이터를 성공적으로 가져오면
        let data1 = JSON.parse(xhr.responseText); // 파싱
        document.querySelector("#result").innerHTML = `
            <p>상품명 : ${data1.data.name}</p>
            <p>생산년도 : ${data1.data.year}</p>`;
    }
}