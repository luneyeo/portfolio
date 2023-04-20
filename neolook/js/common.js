

// Fixed Top Button
let fixButton = document.querySelector(".fixed_button");

fixButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

document.addEventListener('scroll', function (event) {
  if (window.scrollY === 0) {
    fixButton.classList.remove("fixed_button_active")
  } else {
    fixButton.classList.add("fixed_button_active")
  }

})




// 사이드 메뉴바
const subMenu = document.querySelector('.menu_toggle');
const subMenuBtn = document.querySelector('.topMenu');
let isHideMenu = true;

function hideMenu() {
  subMenu.classList.remove('show')
  subMenuBtn.classList.remove('on')
}
function showMenu() {
  subMenu.classList.add('show');
  subMenuBtn.classList.add('on')
}

subMenuBtn.addEventListener('click', function(event) {
  event.stopPropagation()
  isHideMenu = !isHideMenu
  if(isHideMenu) {
    // 숨김처리
    hideMenu()
  } else {
    // 보임 처리
    showMenu()
  }
})

// 메뉴 영역 클릭했을때 전파끊기
subMenu.addEventListener('click', function(event) {event.stopPropagation()})

// 윈도우 영역 클릭 했을때 메뉴 화면 사라지기
window.addEventListener('click', function() {hideMenu()})






