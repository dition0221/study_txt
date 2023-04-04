const result = document.querySelector("#result");
const button = document.querySelector("#container > button");

/* [클릭] 버튼 클릭 시 */
button.addEventListener("click", () => {
    const number = new Set();
    while(number.size < 6) {
        number.add(Math.floor(Math.random() * 45 + 1));
    }
    result.innerText = `${[...number]}`;
});