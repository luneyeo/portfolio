AOS.init();


// 헤더 마우스오버
const gnb = document.querySelector('.header--container')

gnb.addEventListener('mouseover', e => {
  gnb.classList.add('show')
})
gnb.addEventListener('mouseout', e => {
  gnb.classList.remove('show')
})




// 서브메뉴 토글
const submenu = document.querySelector('.submenu')
const submenuBtn = document.querySelector('.submenu-btn')
const submenuCont = document.querySelector('.submenu--container')
const submenuItems = document.querySelectorAll('.submenu--container .title')

submenuBtn.addEventListener('click', function(){
  submenuBtn.classList.toggle('on')
  submenuCont.classList.toggle('on')
})

submenuItems.forEach( function(item, index) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    this.parentNode.classList.toggle('on');
    submenuItems.forEach(function(item2, index2){
      if( index !== index2 ) {
        item2.parentNode.classList.remove('on');
      }
    })
  })
})



// 제품 슬라이드
swiper = new Swiper(".swiper-inner", {
  navigation : {
    prevEl : '.swiper-button-prev',
    nextEl : '.swiper-button-next',
  },
  loop : true,
  loopAdditionalSlides : 1,
  spaceBetween: 60,
  speed : 500,
  autoplay:{
    delay: 2000,
  },
  allowTouchMove: false, // 드래그 방지
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동
	},

  // 반응형 설정
  breakpoints : {
    1200 : {
      autoplay : false
    },
  }
});