import { THIS_WEEK } from "./consts.js";

//파이어베이스 초기 세팅
var firebaseConfig = {
  apiKey: "AIzaSyC2csBRWTvcDJY02-v182SdOFohVgnh170",
  authDomain: "sinchonattendanceadvanced.firebaseapp.com",
  projectId: "sinchonattendanceadvanced",
  storageBucket: "sinchonattendanceadvanced.appspot.com",
  messagingSenderId: "458774138568",
  appId: "1:458774138568:web:ee7151c3c3aef58a489ffd",
  measurementId: "G-70V4V9HH7Z",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const attendance = db.collection("attendance");

// 데이터 확인 테스트 / 저장
var attendanceArray;

attendance.get().then((data) => {
  data.forEach((doc) => {
    if (doc.id == THIS_WEEK) {
      //console.log(doc.data());
      attendanceArray = doc.data();
    }
  });
});

//핸들 해당 주차에 있는지 체크
function IsStudent(handle) {
  if (
    typeof attendanceArray[handle] == "undefined" ||
    attendanceArray[handle] == null
  ) {
    return false;
  }
  return true;
}

//핸들 해당 주차 출석 여부 반환
function IsStudentHere(handle) {
  return attendanceArray[handle]; // true, false
}

//핸들 출석으로 업데이트
function studentIsHere(handle) {
  attendance.doc(String(THIS_WEEK)).update({ [handle]: true });
}

var thisWeekWord;
var startTime;
//강사진이 설정한 출석코드, 입력시간 가져오기
function whatIsWord() {
  const secret = db.collection("secret");
  secret.get().then((data) => {
    data.forEach((doc) => {
      if (doc.id == THIS_WEEK) {
        var secretArray = doc.data();
        thisWeekWord = secretArray["secretCode"];
        startTime = secretArray["startTime"];
      }
    });
  });
}

export { IsStudent, IsStudentHere, studentIsHere, whatIsWord, db };
