import { THIS_WEEK } from "./consts.js";

//파이어베이스 초기 세팅
var firebaseConfig = {
  apiKey: "AIzaSyDPiIf3b-npnhE1yUe6zh71rH0Ao8LKeTo",
  authDomain: "sinchonattendance.firebaseapp.com",
  databaseURL: "https://sinchonattendance-default-rtdb.firebaseio.com",
  projectId: "sinchonattendance",
  storageBucket: "sinchonattendance.appspot.com",
  messagingSenderId: "502890463273",
  appId: "1:502890463273:web:8da140c037f1f532e09c38",
  measurementId: "G-ND0CDPHZ3Z",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


var txt = document.getElementById("txt");
const secret = db.collection("secret");

function whatIsWord(word) {
  if (word == "reset") {
    secret.doc(String(THIS_WEEK)).update({ secretCode: null });
    secret.doc(String(THIS_WEEK)).update({ startTime: 0 });
    txt.textContent = "리셋됨";
  }
  else {
    secret.doc(String(THIS_WEEK)).update({ secretCode: word });

    var today = new Date();
    var time = ('0' + today.getHours()).slice(-2) + ('0' + today.getMinutes()).slice(-2) + ('0' + today.getSeconds()).slice(-2);
    var showtime = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);

    secret.doc(String(THIS_WEEK)).update({ startTime: Number(time) });

    txt.textContent = showtime + "부터 " + "'" + word + "'로 세팅";
  }
}

var thisWeekWord;
var startTime;
secret.get().then((data) => {
  data.forEach((doc) => {
    if (doc.id == THIS_WEEK) {
      var secretArray = doc.data();
      thisWeekWord = secretArray["secretCode"];
      startTime = secretArray["startTime"];
    }
  });
});

//강사진이 설정한 출석코드, 입력시간 가져오기
function alreadyWord() {

  if (thisWeekWord != null &&
    thisWeekWord != "" &&
    typeof thisWeekWord != "undefined") {
    txt.textContent = startTime + "부터 " + "'" + thisWeekWord + "'로 세팅되어 있음";
  }
}

export { whatIsWord, alreadyWord };
