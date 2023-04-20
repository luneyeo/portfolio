
const tabList = document.querySelectorAll('.exh_sub_tit .ing_tab li');
const tabContents = document.querySelectorAll('.cont .ing_list');
const tabListPre = document.querySelectorAll('.exh_sub_tit .pre_tab li');
const tabContentsPre = document.querySelectorAll('.cont .pre_list');
let activeCont = '';

// 진행중인 전시회 탭
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

// 전시 예정인 전시회 탭
for (var i = 0; i < tabList.length; i++) {
  tabListPre[i].querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();

    for (var j = 0; j < tabListPre.length; j++) {
      tabListPre[j].classList.remove('is_on');
      tabContentsPre[j].style.display = 'none';
    }

    this.parentNode.classList.add('is_on');
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'grid';

  });
};












// <!-- Initialize Swiper -->
new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  }
});





// 메인배너
const swiperPc = document.querySelector('.swiper-wrapper.pc')

if(window.innerWidth < 1000) {
  console.log('hello')
}
