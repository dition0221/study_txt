const raffle = document.querySelector("#raffle");  // [추첨] 버튼

/* [추첨] 버튼 클릭 시 */
raffle.addEventListener("click", (e) => {
    e.preventDefault();
    const seed = document.querySelector("#seed");  // 전체 인원 수
    const total = document.querySelector("#total");  // 뽑을 인원 수
    const result = document.querySelector("#result");  // 결과 창
    let array = new Array;
    
    for(let i = 0; i < total.value; i++) {
        array[i] = " " + Math.floor((Math.random() * seed.value) + 1) + "번";
    }
    
    result.innerText = `당첨자 : ${array}`;
    result.classList.add("show");
});

const clear = document.querySelector("#clear");  // [지우기] 버튼

/* [지우기] 버튼 클릭 시 */
clear.addEventListener("click", () => {
    location.reload();  // 새로고침
});