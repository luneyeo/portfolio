
// jQuery로 탭 설정

$(function(){
    $('#btn_non_member').click(function(){
        $('.non_member_login').css({display:'block'});
        $('.member_login').css({display:'none'});
        $('#btn_non_member').css({backgroundColor:'var(--color-black)',color:'var(--color-white)'});
        $('#btn_member').css({backgroundColor:'var(--color-white)',color:'var(--color-black)'});
    });
    $('#btn_member').click(function(){
        $('.member_login').css({display:'block'});
        $('.non_member_login').css({display:'none'});
        $('#btn_member').css({backgroundColor:'var(--color-black)',color:'var(--color-white)'});
        $('#btn_non_member').css({backgroundColor:'var(--color-white)',color:'var(--color-black)'});
    })
});
