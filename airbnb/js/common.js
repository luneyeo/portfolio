import language from '../data/language.js'
import currency from '../data/currency.js'










// 프로필 메뉴 모달창
const profileBtn = document.querySelector('.profile')
const profileMenu = document.querySelector('.profile-menu')
let isHideMenu = true;

function hideMenu() {
  profileMenu.style.display = 'none',
  profileBtn.classList.remove('active')
}
function showMenu() {
  profileMenu.style.display = 'block',
  profileBtn.classList.add('active')
}

profileBtn.addEventListener('click', function(event) {
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
profileMenu.addEventListener('click', function(event) {
  event.stopPropagation()
})

// 윈도우 영역 클릭 했을때 메뉴 화면 사라지기
window.addEventListener('click', function() {
  hideMenu()
})


// 지원 및 참고자료 모달창 
const supportBtn = document.querySelector('.support')
const supportCon = document.querySelector('.support-modal')
const closeBtn = document.querySelector('.icon-close')
const shadowBody = document.querySelector('.modal-bg .shadow')

const open = () => {
  supportCon.classList.remove('hidden')
  supportCon.classList.add('show')
  shadowBody.classList.add('active')
  document.documentElement.classList.add('fixed')

}

const close = () => {
  supportCon.classList.add('hidden')
  supportCon.classList.remove('show')
  shadowBody.classList.remove('active')
  document.documentElement.classList.remove('fixed')
}


supportBtn.addEventListener('click', open )
closeBtn.addEventListener('click', close )

// 버튼 영역 클릭 했을 때 전파 끊기
supportCon.addEventListener('click', function(event) {
  event.stopPropagation()
})

supportBtn.addEventListener('click', function(event) {
  event.stopPropagation()
})

// 윈도우 영역 클릭 했을때 메뉴 화면 사라지기
window.addEventListener('click', function() {
  close()
})








// 언어, 통화 모달창
const langTabList = document.querySelectorAll('.cont-wrap .tab-list div')
const langTabCont = document.querySelectorAll('.cont-wrap .cont-list .tab-cont')
let activeCont = '';

for(let i = 0; i < langTabList.length; i++){

  langTabList[i].querySelector('.tab').addEventListener('click', function(e) {
    e.preventDefault();
    for(let j = 0; j < langTabList.length; j++) {
      langTabList[j].classList.remove('active')
      langTabCont[j].style.display = 'none';
    }
    this.parentNode.classList.add('active');

    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';

  })
}


// language list 
const langEl = document.querySelector('#lang--tab-cont .choose-lang .tab-cont-list')

language.forEach(langList => {
  const tabEl = document.createElement('li')
  tabEl.classList.add('abc')

  tabEl.innerHTML = /* html */ `
    <a href="javascript:;" class='a'>
      <span>${langList.language}</span>
      <span>${langList.region}</span>
    </a>
  `
  langEl.append(tabEl)
  langEl.firstElementChild.classList.add('active')
})





// 통화
const curEl = document.querySelector('#money--tab-cont .choose-currency .tab-cont-list')

currency.forEach(curList => {
  const tabEl = document.createElement('li')
  tabEl.classList.add('cur-el')

  tabEl.innerHTML = /* html */ `
    <a href="javascript:;" class='a'>
      <span>${curList.region}</span>
      <span>${curList.mark}</span>
    </a>
  `
  curEl.append(tabEl)
  curEl.firstElementChild.classList.add('active')
})









// language 버튼 클릭시 active 추가
const langConts = document.querySelectorAll('.choose-lang .tab-cont-list li')
for(let i = 0; i < langConts.length; i++) {
  langConts[i].querySelector('.a').addEventListener('click', function(e) {
    for(let j = 0; j < langConts.length; j++) {
      langConts[j].classList.remove('active')
    }
    this.parentNode.classList.add('active')
  })
}

// recommend 버튼 클릭시 active 추가
const recommendConts = document.querySelectorAll('.recommend-lang .tab-cont-list li')
for(let i = 0; i < recommendConts.length; i++) {
  recommendConts[i].querySelector('.a').addEventListener('click', function(e) {
    for(let j = 0; j < recommendConts.length; j++) {
      recommendConts[j].classList.remove('active')
    }
    this.parentNode.classList.add('active')
  })
}

// currency 버튼 클릭시 active 추가
const currencyConts = document.querySelectorAll('.choose-currency .tab-cont-list li')
for(let i = 0; i < currencyConts.length; i++) {
  currencyConts[i].querySelector('.a').addEventListener('click', function(e) {
    for(let j = 0; j < currencyConts.length; j++) {
      currencyConts[j].classList.remove('active')
    }
    this.parentNode.classList.add('active')
  })
}




// 언어, 통화 모달창
const langBtn = document.querySelectorAll('.lang-btn')
const langCon = document.querySelector('.lang-modal')
const closeLangBtn = document.querySelector('.icon-wrap .icon-close')

const openLang = () => {
  langCon.classList.remove('hidden')
  langCon.classList.add('show')
  shadowBody.classList.add('active')
  document.documentElement.classList.add('fixed')
}

const closeLang = () => {
  langCon.classList.add('hidden')
  langCon.classList.remove('show')
  shadowBody.classList.remove('active')
  document.documentElement.classList.remove('fixed')
}


[].forEach.call(langBtn, function(btn) {
  btn.addEventListener('click', openLang, false)
})

closeLangBtn.addEventListener('click', closeLang)


// 버튼 영역 클릭 했을 때 전파 끊기
langCon.addEventListener('click', function(event) {
  event.stopPropagation()
})

langBtn.forEach.call(langBtn, function(e) {
  e.addEventListener('click', function(event) {
    event.stopPropagation()
  })
})


// 윈도우 영역 클릭 했을때 메뉴 화면 사라지기
window.addEventListener('click', function() {
  closeLang()
})






// 올해 년도 입력
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();
