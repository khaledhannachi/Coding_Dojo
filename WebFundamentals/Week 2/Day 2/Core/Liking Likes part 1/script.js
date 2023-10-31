var likes = 0;
var message = document.querySelector(".p1");
function likescount() {
  likes = likes + 1;
  message.innerText = likes + " like(s)";
}
