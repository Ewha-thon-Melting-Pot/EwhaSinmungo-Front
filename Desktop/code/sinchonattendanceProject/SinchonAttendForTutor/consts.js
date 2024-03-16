
var THIS_WEEK; // 날짜 가져와서 업데이트

const today = new Date();
var todayDate = Number(
  (today.getMonth() + 1).toString() +
  today.getDate().toString().padStart(2, "0")
);

if (todayDate == 222) {
  THIS_WEEK = 10;
} else if (todayDate == 219) {
  THIS_WEEK = 9;
} else if (todayDate == 215) {
  THIS_WEEK = 8;
} else if (todayDate == 213) {
  THIS_WEEK = 7;
} else if (todayDate == 208) {
  THIS_WEEK = 6;
} else if (todayDate == 205) {
  THIS_WEEK = 5;
} else if (todayDate == 201) {
  THIS_WEEK = 4;
} else if (todayDate == 129) {
  THIS_WEEK = 3;
} else if (todayDate == 125) {
  THIS_WEEK = 2;
} else if (todayDate == 122) {
  THIS_WEEK = 1;
} else {
  THIS_WEEK = 0;
}

const ROADING = "로딩중입니다..";

export {
  THIS_WEEK,
  ROADING,
};
