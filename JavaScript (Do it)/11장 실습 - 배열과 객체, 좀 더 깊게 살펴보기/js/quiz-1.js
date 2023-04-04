/* 주어지는 클래스 */
class Lecture {
    constructor(hasTutor, lectID, members) {
        this.hasTutor = hasTutor;  // 강사가 있는지의 여부
        this.lectID = lectID;  // 강좌 ID
        this.members = members;  // 수강생
    }
}

let class1 = new Lecture(false, 'L001', ["Ahn", "Han", "Park"]);
let class2 = new Lecture(true, 'L002', ["Lee", "Choi", "Kim"]);

// 강사가 없으면, 이름 배열을 모두 학생으로 처리
// 강사가 있으면, 이름 배열에서 첫 번째 이름은 강사 이름으로, 나머지 이름은 학생으로 처리
function getStudents(classRoom) {
    let {hasTutor, lectID, members} = classRoom;
    let tutor, students;

    hasTutor ? [tutor, ...students] = members : [...students] = members;
    return students;
}

document.write(`강의 : ${class1.lectID}, 수강생 : ${getStudents(class1)}<br>`);
document.write(`강의 : ${class2.lectID}, 수강생 : ${getStudents(class2)}`);