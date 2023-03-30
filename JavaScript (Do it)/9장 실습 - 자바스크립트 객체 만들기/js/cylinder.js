/* 원기둥 객체(생성자 함수) */
// function Cylinder (cylinderDiameter, cylinderHeight) {
//     this.diameter = cylinderDiameter;  // 지름
//     this.height = cylinderHeight;  // 높이

//     this.getVolume = function() {
//         let radius = this.diameter / 2;  // 반지름
//         return (Math.PI * radius * radius * this.height).toFixed(2);  // 부피
//     }
// }

class Cylinder {
    constructor(cylinderDiameter, cylinderHeight) {
        this.diameter = cylinderDiameter;
        this.height = cylinderHeight;
    }
    
    getVolume() {
        let radius = this.diameter / 2;
        return (Math.PI * radius * radius * this.height).toFixed(2);  // 부피
    };
}

const button = document.querySelector("button");  // [계산하기] 버튼
const result = document.querySelector("#result");  // 결과 창

button.addEventListener("click", (e) => {
    e.preventDefault();
    const diameter = document.querySelector("#cyl-diameter").value;
    const height = document.querySelector("#cyl-height").value;

    if (diameter === "" || height === "") {
        result.innerText = `지름값과 높이값을 입력하세요.`;
    } else {
        let cylinder = new Cylinder(parseInt(diameter), parseInt(height));  // 인스턴스 생성
        result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
    }
});