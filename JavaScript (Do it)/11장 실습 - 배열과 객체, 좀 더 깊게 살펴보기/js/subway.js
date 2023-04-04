function* train() {
    yield "판교";
    yield "이매";
    yield "삼동";
    yield "경기광주";
    yield "초월";
    yield "곤지암";
    yield "신둔도예촌";
    yield "이천";
    yield "부발";
    yield "세종대왕릉";
    yield "여주";
}

let gyeonggnag = train();  // 경강선

const button = document.querySelector("button");
const result = document.querySelector("#result");

/* [다음 역] 버튼 클릭 시 */
button.addEventListener("click", () => {
    let current = gyeonggnag.next();
    if (current.done !== true) {
        result.innerHTML = current.value;
    } else {
        result.innerHTML = `종점!`;
        button.setAttribute("disabled", "deisabled");
    }
});