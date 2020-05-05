$(function(){
    // 游戏全目录下滑列表  滑动显示隐藏
    $('.top-nav-left').on('mouseenter',function(){
        $('.top-nav-select').stop().delay(300).slideDown(500)
    })
    $('.top-nav-select').on('mouseleave',function(){
        $('.top-nav-select').stop().delay(300).slideUp(500)
    })

})

// 当页面滚动到一定程度时 二级导航变为fixed定位
$(document).on('scroll',function(){
    let num = $("html").scrollTop()
    if(num >=55){
        $(".erji-nav").css({
            position: "fixed",
            top:0
        })
    }else{
        $(".erji-nav").css({
            position: "relative"
        })
    }
})