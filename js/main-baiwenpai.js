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

// 点击音乐按钮 播放音乐 并且音乐图片跳动
let miuse = false
$('.miuse').on('click',function(){
    if(miuse == false){
        $('.miuse i strong').addClass('i-miuse')
        miuse = true
    }else{
        $('.miuse i strong').removeClass('i-miuse')
        miuse = false
    }
})
$('.miuse-but').on('click',function(){
    if(miuse == false){
        $('.miuse i strong').addClass('i-miuse')
        miuse = true
    }else{
        $('.miuse i strong').removeClass('i-miuse')
        miuse = false
    }
})



// box1 轮播图  box1按钮点击后按钮改变样式 对应轮播图出现

$('.box1-left-but span').on('click',function(){
    $(this).addClass('on')
    $(this).siblings().removeClass('on')
    let num = $(this).index()
    if(num == 0){
        $('.box1-left-lun').animate({
            left : -0
        },200)
    }
    if(num == 1){
        $('.box1-left-lun').animate({
            left : -695
        },200)
    }
    if(num == 2){
        $('.box1-left-lun').animate({
            left : -1390
        },200)
    }
    if(num == 3){
        $('.box1-left-lun').animate({
            left : -2085
        },200)
    }
})

// box1 tab切换 点击按钮更换下方ul 并且更换样式
$('.box1-right-but').on('click',function(){
    let num = $(this).index()
    $(this).find('span').addClass('on')
    $(this).siblings().find('span').removeClass('on')
    $('.box1-right-bottom ul').hide()
    $('.box1-right-bottom ul').eq(num).show()
})
