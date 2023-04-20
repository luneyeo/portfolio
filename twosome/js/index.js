
// top 버튼
const fixButton = document.querySelector('.top_button')

fixButton.onclick = function (e) {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

window.document.addEventListener('scroll', function (e) {
  if (window.scrollY === 0) {
    fixButton.classList.remove('active')
  } else {
    fixButton.classList.add('active')
  }
})



// 스크롤 트리거
// 스크롤시 헤더영역 글씨색 변경
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.menuStory',
  start : 'top 5%',
  end: () => `+=${document.querySelector("main").offsetHeight}`,
  toggleClass: { targets: '.hInner', className: 'is-scroll'}
})





// 기업단체구매 버튼 스크롤시 위치 이동
let groupButton = window.document.getElementById("groupButton");
window.document.addEventListener('scroll', function (event) {
  if (window.scrollY === 0) {
    groupButton.style.bottom = '38px'
  } else {
    groupButton.style.bottom = '90px'
  }
})




// 메뉴스토리 탭
const tabList = document.querySelectorAll('.menuStory_cont .menuStory_tab .tab li');
const tabContents = document.querySelectorAll(' .menu_contents .contents');
let activeCont = '';

for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();

    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('is_on');
      tabContents[j].style.display = 'none';
    }

    this.parentNode.classList.add('is_on');

    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
};




// jquery
// gnb에 mouseover 됐을 때
$(function () {
  $('.hInner')
  .mouseover(function () {
    $('.hInner').css('height', '460px')
    $('.hInner').css('background-color', 'var(--color-white)')
    $('.gnb .menu.depth_01 > li > a').css('color', 'var(--color-black)')

    // logo 변경
    $('.logo a').css('background-image', 'url(img/logo_black.svg)')

    // more 변경
    $('.allmenu_open').css('background-image', 'url(img/ico_24_allmenu_black.svg)');
  })
  .mouseout(function () {
    // javascript 코드 실행 흐름
    $('.hInner').css('height', '100px')
    $('.hInner').css("background-color", "")
    $('.gnb .menu.depth_01 > li > a').css('color', 'var(--color-white)')
    $('.logo a').css('background-image', 'url(img/logo_white.svg)')
    $('.allmenu_open').css('background-image', 'url(img/ico_24_allmenu_white.svg)');
  });




  // franchise_button에 mouseover 됐을 때
  $('.franchise_button .ico_arrow_left')
  .mouseover(function () {
    $(this).css({
      'color': 'var(--color-white)'
    })
    $('.ico_arrow_left .img').css(
      'background-image', 'url(img/ico_arrow_right.svg)')
    $('.ico_arrow_left .bg').stop().animate({ width: '100%' }, 300)
  })

  // mouseout 됐을 때
  .mouseout(function () {
    $(this).css({
      'color': 'var(--color-black)'
    })
    $('.ico_arrow .img').css(
      'background-image', 'url(img/ico_arrow_right_black.svg)')
    $('.ico_arrow_left .bg').stop().animate({ width: '0px' }, 300)
  })


  // franchise_button에 mouseover 됐을 때
  $('.franchise_button .ico_arrow_right')
  .mouseover(function () {
    $(this).css({
      'color': 'var(--color-white)'
    })
    $('.ico_arrow_right .img').css(
      'background-image', 'url(img/ico_arrow_right.svg)')
    $('.ico_arrow_right .bg').stop().animate({ width: '100%' }, 300)
  })

  // mouseout 됐을 때
  .mouseout(function () {
    $(this).css({
      'color': 'var(--color-black)'
    })
    $('.ico_arrow .img').css(
      'background-image', 'url(img/ico_arrow_right_black.svg)')
    $('.ico_arrow_right .bg').stop().animate({ width: '0px' }, 300)
  })

})



// 올메뉴(사이드메뉴)
const allMenuShowBtn = document.querySelector('.allmenu_open')
const allMenuHideBtn = document.querySelector('.allmenu_close')
const allMenu = document.querySelector('.allmenu')
let isHideAllMenu = true;


function showAllMenu() {
  allMenu.classList.add('show')
  allMenu.classList.remove('hidden')
  document.documentElement.classList.add('fixed')
}

function hideAllMenu() {
  allMenu.classList.add('hidden')
  allMenu.classList.remove('show')
  document.documentElement.classList.remove('fixed')
}


allMenuShowBtn.addEventListener('click', function(event){
  event.stopPropagation()
  isHideAllMenu = !isHideAllMenu
  if(isHideAllMenu) {
    hideAllMenu()
  } else {
    showAllMenu()
  }
})
allMenuHideBtn.addEventListener('click', function(event){
  event.stopPropagation()
  isHideAllMenu = !isHideAllMenu
  if(isHideAllMenu) {
    showAllMenu()
  } else {
    hideAllMenu()
  }
})
allMenu.addEventListener('click', function(event){
  event.stopPropagation()
})









// Swiper
new Swiper(".first-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".second-swiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


new Swiper(".third-swiper", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



