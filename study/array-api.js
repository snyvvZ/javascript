// 1. 주어진 배열을 string으로 변환하기
{
  const fruits = ["사과", "바나나", "오렌지"];
  const result = fruits.join(", ");
  console.log(result);
}

// 2. 주어진 문자열을 배열로 만들기
{
  const fruits = "사과, 키위, 바나나, 체리";
  const result = fruits.split(",", 2 /* optional */);
  console.log(result);
}

// 3. 배열의 순서를 거꾸로 만들기
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열 자체를 변화시킴
}

// 4. 주어진 배열에서 첫번째와 두번째 요소를 제외한 새로운 배열을 만들기
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2);
  // console.log(result);
  // console.log(array);
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

// Student Class
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 5. 점수가 90점인 학생을 찾기
{
  // const result = students.find(function (student) {
  // return student.score === 90;
  // });
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// 6. 학생들 중 수업에 등록한 학생들만 골라서 배열로 만들기
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 7. 학생들의 점수만 가져오기
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// 8. 학생들 중 50점 이하의 학생이 있는지 확인하기
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // 하나라도 만족 할 경우

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // 모든 조건 만족
}

// 9. 학생들의 평균 점수 구하기
{
  // reduce: 누적된 값을 전달
  /*
  const result = students.reduce((prev, curr) => {
    console.log("--------");
    console.log(prev);
    console.log(curr);
    return curr;
  });
  */

  const result = students.reduce((prev, curr) => {
    console.log("--------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// 10. 50점 이상 학생들의 점수를 string으로 변환하기
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// 11. 학생들의 점수를 낮은 순서로 정렬하기
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
