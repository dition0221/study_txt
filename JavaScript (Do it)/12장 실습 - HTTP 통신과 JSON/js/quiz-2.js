const inputNumber = document.querySelector("#user-number"); // 입력 칸
const button = document.querySelector("#container > button"); // [입력] 버튼

/* [입력] 버튼을 클릭 시 */
button.addEventListener("click", () => {
    let n = inputNumber.value;
    try {
        // [Error] 미 입력 or 숫자가 아닐 시
        if(n === "" || isNaN(n)) {
            throw "숫자를 입력하세요.";
        }
        // [Error] 10보다 클 시
        if (n >= 10) {
            throw "10보다 작은 수를 입력하세요."
        }
        // 10보다 작을 시
        if (n <= 10) {
            document.querySelector("#result").innerHTML = `${n}`;
        }
    } catch(err) {
        alert(err);
    } finally {
        inputNumber.value = "";
    }
});