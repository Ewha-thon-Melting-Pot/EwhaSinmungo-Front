import {

  ROADING,
} from "./consts.js";

import { whatIsWord, alreadyWord } from "./firebaseData.js";

var form = document.getElementById("form");
var input = document.getElementById("msg");
var txt = document.getElementById("txt");


window.onload = function() {
  alreadyWord();

  // 폼 제출 부분
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    var msg = input.value;
    if (msg) {
      txt.textContent = ROADING;
      form.reset();
      whatIsWord(msg);
    }
  });
};
