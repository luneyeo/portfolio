// 시작
const loading = document.querySelector('.loading')
const headerFadeIn = document.querySelector('.header--inner')
const keywordFadeIn = document.querySelector('.about--inner .about--keyword')

function hidden() {
  loading.classList.add('hidden')
  document.documentElement.classList.remove('fixed')
}
function fadeInTitle (){headerFadeIn.classList.add('fade-in')}
function fadeInKeyword (){keywordFadeIn.classList.add('fade-in')}

setTimeout(hidden, 3500)
setTimeout(fadeInTitle, 3700)
setTimeout(fadeInKeyword, 4000)




// header 색상변경
gsap.registerPlugin(ScrollTrigger);

// 토글버튼 색상 변경
const toggleBtn = document.querySelector('.toggle')
window.document.addEventListener('scroll', function (e) {
  if(window.scrollY >= 40 ) {
    toggleBtn.classList.add('is-scroll')
  } else {
    toggleBtn.classList.remove('is-scroll')
  }
})




// 모바일 toggle 메뉴
const menuMobile = document.querySelector('.header--items.mo')
const menuToggleBtn = document.querySelector('.toggle')
const menuItems = document.querySelector('.toggle-menu')

menuToggleBtn.addEventListener('click', function(){
  menuMobile.classList.toggle('show')
  this.classList.toggle('show')
})

menuItems.addEventListener('click', function(){
  menuMobile.classList.remove('show')
  menuToggleBtn.classList.remove('show')
})


// Resume fade-in
ScrollTrigger.create({
  trigger: '#resume',
  // markers : true,
  start : 'top 70%',
  end : ()=> "+=" + document.querySelector("body").offsetHeight,
  toggleClass: { targets: '.resume-area', className: 'fade-in'}
})

// Portfoilo fade-in
ScrollTrigger.create({
  trigger: '#portfolio',
  // markers : true,
  start : 'top 70%',
  end : ()=> "+=" + document.querySelector("body").offsetHeight,
  toggleClass: { targets: '.portfolio-area', className: 'fade-in'}
})









// 포트폴리오 메뉴 탭
const tabList = document.querySelectorAll('.portfolio-menuTab li');
const tabContents = document.querySelectorAll('.portfolio--inner .portfolio--container .portfolio-list .item');
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
    document.querySelector(activeCont).style.display = 'grid';
  });
};


// 작업 중 알림창
function message() {
  alert("작업 중입니다! 조금만 기다려주세요 :)")
  // onclick="javascript:message()"
}






// 디자인 작업물 모달창
const designModalOpenBtn = document.querySelectorAll('#d .list-btn')
const designModalCloseBtn = document.querySelectorAll('.design--modal .icon-close span.material-symbols-outlined')
const designModalEls = document.querySelectorAll('.design--modal')
const shadowBg = document.querySelector('.modal-bg')


for(let i = 0; i < designModalOpenBtn.length; i++){
  designModalOpenBtn[i].addEventListener('click', function(e) {
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block'
    shadowBg.classList.add('active')
    document.body.style.overflowY = 'hidden'
  })
}

for(let j = 0; j < designModalOpenBtn.length; j++){
  designModalCloseBtn[j].addEventListener('click', function(e){
    this.parentNode.parentNode.style.display = 'none';
    shadowBg.classList.remove('active')
    document.body.style.overflowY = 'unset'
  })
}




// Top button
let fixButton = document.getElementById("fixed_button");
fixButton.classList.add("fixed_button_hidden")

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



// Top button 색상변경
ScrollTrigger.create({
  trigger: '.speech-bubble',
  // markers : true,
  start : 'top 50%',
  end : 'bottom 0%',
  toggleClass: { targets: '.fixed_button', className: 'is-scroll'}
})









