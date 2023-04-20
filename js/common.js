// AOS 플러그인
// AOS.init();




// 올해 년도 입력
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();


// 스크롤 트리거
// const trigger = new ScrollTrigger.default({
//   trigger : { 
//     once: true,
//     offset : {
//       viewport : {
//         x : 0,
//         y : .15
//       }
//     },
//     // toggle: {
//     //   class: {
//     //     in: 'show',
//     //     out: 'hide'
//     //   }
//     // }
//   }
// })

// trigger.add('[data-trigger]')