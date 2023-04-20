import house from '../data/house.js'



// Reservation 영역 클릭시
const header = document.querySelector('#header')
const reservationEl = header.querySelector('li.reservation')
const reservationBg = header.querySelector('.white-box')
const shadowBg = document.querySelector('.shadow')
const main = document.querySelector('#main')
const searchEl = document.querySelector('.hWrap .search')


function showReservation () {
  reservationEl.classList.add('active')
  reservationBg.classList.add('active')
  shadowBg.classList.add('active')
  searchEl.classList.add('active')

}

function hideReservation () {
  reservationEl.classList.remove('active')
  reservationBg.classList.remove('active')
  shadowBg.classList.remove('active')
  searchEl.classList.remove('active')
}


reservationEl.addEventListener('click', showReservation)
main.addEventListener('click', hideReservation)

// 메뉴 영역 클릭했을때 전파끊기

header.addEventListener('click', function(event) {
  event.stopPropagation()
})

reservationEl.addEventListener('click', function(event) {
  event.stopPropagation()
})

// 윈도우 영역 클릭 했을때 메뉴 화면 사라지기
window.addEventListener('click', function() {
  hideReservation()
})




// Search Bar Tab

const searchTabList = document.querySelectorAll('.search .search--tab .tab-list li')
const searchBar = document.querySelectorAll('.search .search--bar .tab-cont')
let activeCont = '';

for(let i = 0; i < searchTabList.length; i++) {
  searchTabList[i].querySelector('.tab').addEventListener('click', function(e) {
    e.preventDefault();

    for(let j = 0; j < searchTabList.length; j++) {
      searchTabList[j].classList.remove('is_on')
      searchBar[j].style.display = 'none';
    }

    this.parentNode.classList.add('is_on')

    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'flex';


  })
}









// House List
const itemsEl = document.querySelector('.contents')
house.forEach(houseList => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('house-list')

  itemEl.innerHTML = /* html */ `
    <div class="content--img">
      <div class="swiper house--img">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="${houseList.img01}" alt="">
          </div> 
          <div class="swiper-slide">
            <img src="${houseList.img02}" alt="">
          </div> 
          <div class="swiper-slide">
            <img src="${houseList.img03}" alt="">
          </div> 
        </div>
        <div class="swiper-button-prev slide-btn">
          <span class="material-symbols-outlined">chevron_left</span>
          <span class="blind">이전 사진 보기</span>
        </div>
        <div class="swiper-button-next slide-btn">
          <span class="material-symbols-outlined">chevron_right</span>
          <span class="blind">다음 사진 보기</span>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="content--info">
      <div class="content--info--left">
        <ul>
          <li>
            <span>${houseList.address}</span>
          </li>
          <li>
            <span>${houseList.category}</span>
          </li>
          <li>
            <span>${houseList.date}</span>
          </li>
          <li>
            <span>${houseList.pay}</span>
          </li>
        </ul>
      </div>
      <div class="content--info--right">
        <span>${houseList.star}</span>
      </div>
    </div>
  `

  itemsEl.append(itemEl)
})






// header tab 클릭 / mobile 
const headerMobile = document.querySelector('.header--top-m')
const tabModal = document.querySelector('#tab-modal')
const closeModal = tabModal.querySelector('.inner .tab .icon-close')

headerMobile.addEventListener('click', showModal)
closeModal.addEventListener('click', hideModal)

function showModal() {
  tabModal.style.display = 'block'
  document.documentElement.classList.add('fixed')
}
function hideModal() {
  tabModal.style.display = 'none'
  document.documentElement.classList.remove('fixed')
}

tabModal.addEventListener('click', function(event) {
  event.stopPropagation()
})



// Header tab
const tabBtnList = tabModal.querySelectorAll('.modal--tab li')
const tabBtnEl = tabModal.querySelectorAll('.tab-el ul.list')
let activeTab = '';


for(let i = 0; i < tabBtnList.length; i++) {
  tabBtnList[i].querySelector('.tab-btn').addEventListener('click', function(e) {
    e.preventDefault();

    for(let j = 0; j < tabBtnList.length; j++) {
      tabBtnList[j].classList.remove('active')
      tabBtnEl[j].style.display = 'none';
    }

    this.parentNode.classList.add('active')

    activeTab = this.getAttribute('href');
    document.querySelector(activeTab).style.display = 'block';
  })
}
























// Swiper

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView : 'auto',
  slidesPerGroup : 3,
  speed : 900

});

new Swiper(".house--img", {
  navigation : {
    nextEl : ".swiper-button-next",
    prevEl : ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView : 1,
  slidesPerGroup : 1,
  speed : 900
});

