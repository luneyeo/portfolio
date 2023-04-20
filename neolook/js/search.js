

// 검색창 나타나기
let bar = document.getElementById("searchBox");
let searchBox = document.getElementById("searchBox_normal");
let fix = document.getElementById("searchBox_fix");
let searchBoxInput =fix.querySelector('input');


let testHeight = searchBox.clientHeight



window.onscroll = function () {
  myFunction()
  function myFunction() {
    if (window.scrollY >= document.getElementById("main_content").offsetTop) {
      searchBox.style.display = "none";
      fix.style.display = "flex";
    } else {
      searchBox.style.display = "block";
      fix.style.display = "none";
      searchBoxInput.value = ''
    }
  }
};

