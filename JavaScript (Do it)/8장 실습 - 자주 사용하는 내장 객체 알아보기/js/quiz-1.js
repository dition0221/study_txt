// 입력 창
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const date = document.querySelector("#date");
const bttn = document.querySelector("#bttn");  // [계산] 버튼

// 결과 창
const current = document.querySelector("#current");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");

/* [계산] 버튼 클릭 시 */
bttn.addEventListener("click", () => {
    // 생일 객체
    const birthday = new Date(year.value, month.value-1, date.value);
    
    // 현재 시각
    let today = new Date();
    
    // 입력 창 초기화
    year.value = "";
    month.value = "";
    date.value = "";

    // 흐른 시간 계산
    let flowTime = today.getTime() - birthday.getTime();
    let flowDate = flowTime / (1000 * 60 * 60 * 24);  // 흐른 날짜[date]
    flowDate = flowDate.toFixed();
    let flowHours = flowTime / (1000 * 60 * 60);
    flowHours = flowHours.toFixed();  // 흐른 시간[hours]

    // 결과 창에 표시
    current.innerText = `${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;
    days.innerText = `날짜로는 ${flowDate} 일이 흐르고,`;
    hours.innerText = `시간으로는 ${flowHours} 시간이 흘렀습니다.`;
});