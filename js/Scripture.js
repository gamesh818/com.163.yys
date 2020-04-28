// 一旦滚轮下滑 顶部导航更换样式

$(document).on('scroll',function(){
    let num= $(this).scrollTop()
    console.log(num)
    if(num>=55){
        $('.main-top-nav').addClass('xiala')
        $('.one-nav').fadeOut(500)
        $('.two-nav').fadeIn(500)
        $('.main-left-logo').fadeIn(500)
    }else{
        $('.main-top-nav').removeClass('xiala')
        $('.one-nav').fadeIn(500)
        $('.two-nav').fadeOut(500)
        $('.main-left-logo').fadeOut(500)
    }
})
