// const { values } = import("cypress/types/lodash")

// function changeBackgroundColor(e) {
//   // ここに背景色を変える処理を書く。
//   const check = document.getElementById("check")
//   const text = document.getElementById("text")
//   console.log(check.checked)
//   if(check.checked){
//     text.style.backgroundColor ="red"
//   }
//   else text.style.backgroundColor = ""
// }

function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const text = document.getElementById("text");
  const button = document.getElementById("check");
  if (button.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "white";
  }
}