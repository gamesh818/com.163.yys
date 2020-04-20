$(function(){
    // 游戏全目录下滑列表  滑动显示隐藏
    $('.top-nav-left').on('mouseenter',function(){
        $('.top-nav-select').stop().delay(300).slideDown(500)
    })
    $('.top-nav-select').on('mouseleave',function(){
        $('.top-nav-select').stop().delay(300).slideUp(500)
    })
    // 点击二维码收起按钮 二维码向左移动
    var flag = 0
    $('.left-erwei').on('click',function(){
        console.log(flag)
       if(flag == 0){
        $('.click-shou').css({
            transform: "rotate(0deg)"
        })
        $('.left-erwei').animate({
            left:-150
        },500)
        $('.click-but > a').html('展<br>开')
        flag++
       }else if(flag == 1){
        $('.click-shou').css({
            transform: "rotate(180deg)"
        })
        $('.left-erwei').animate({
            left:0
        },500)
        $('.click-but > a').html('收<br>起')
        flag--
       }
    })
    

























})
