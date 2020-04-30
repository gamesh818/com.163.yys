

$(function(){
 // 鼠标移入按钮 对应图片显示 隐藏
let num = 0
$('.shiting-box >a').on('mouseenter',function(){
    // 显示鼠标移入的按钮 boder 和 隐藏箭头
    boder_show($(this))
    // 隐藏当前移入的按钮的兄弟元素 的boder 和 显示箭头
    boder_hide($(this).siblings())
    // 停止自动轮播
    clearInterval(timer)
    let index = $(this).index()-1
    num = index
    console.log(index)
    $('.shiting-img>img').eq(index).siblings().removeClass('img-show').addClass('img-hide')
    $('.shiting-img>img').eq(index).removeClass('img-hide').addClass('img-show')
})
$('.shiting-box >a').on('mouseleave',function(){
    timer = setInterval(function(){
        $('.shiting-img>img').eq(num).siblings().removeClass('img-show').addClass('img-hide')
        $('.shiting-img>img').eq(num).removeClass('img-hide').addClass('img-show')
        boder_show($(".shiting-box >a").eq(num))
        // 隐藏当前移入的按钮的兄弟元素 的boder 和 显示箭头
        boder_hide($(".shiting-box >a").eq(num).siblings())
        if(num>=2){
            num=0
        }else{
            num+=1
        }
    },3000)
})
// 自动轮播
let timer =null
timer = setInterval(function(){
    $('.shiting-img>img').eq(num).siblings().removeClass('img-show').addClass('img-hide')
    $('.shiting-img>img').eq(num).removeClass('img-hide').addClass('img-show')
    boder_show($(".shiting-box >a").eq(num))
    // 隐藏当前移入的按钮的兄弟元素 的boder 和 显示箭头
    boder_hide($(".shiting-box >a").eq(num).siblings())
    if(num>=2){
        num=0
    }else{
        num+=1
    }
},3000)




// 封装按钮旋转显示的函数
let boder_show = function(box){
    box.find('i').animate({
        opacity: 1
    },500)
    // 隐藏左右箭头
    box.find('.jiantou-left').animate({
        left:-70,
        opacity:0
    },500)
    box.find('.jiantou-right').animate({
        right:-60,
        opacity:0
    },500)
}
// 封装按钮旋转隐藏的函数
let boder_hide=function(box){
    box.find('i').animate({
        opacity: 0
    },500)
    // 隐藏左右箭头
    box.find('.jiantou-left').animate({
        left:-56,
        opacity:1
    },500)
    box.find('.jiantou-right').animate({
        right:-56,
        opacity:1
    },500)
}



// 进场动画


let go = function(){
    setTimeout(function(){
        $('.left-jiao-hei').addClass('jinchang')
        $('.right-jiao-hei').addClass('jinchang')
        $('.bottom-lind').addClass('touming')
    },1000)
    setTimeout(function(){
        $('.left-jiao-bai').addClass('jinchang')
        $('.right-jiao-bai').addClass('jinchang')
    },1400)
    setTimeout(function(){
        $('.logo').addClass('jinchang').addClass('touming')
        $('.title').addClass('jinchang').addClass('touming')
    },2000)
    setTimeout(function(){
        $('.shiting-box').addClass('touming')
    },2200)
    setTimeout(function(){
        $('.solid-left').addClass('jinchang')
        $('.solid-right').addClass('jinchang')
        $('.show').addClass('touming')
    },2400)
    setTimeout(function(){
        $('.yuan-1').addClass('touming')
        $('.yuan-2').addClass('touming')
        $('.yuan-3').addClass('touming')
        $('.yuan-4').addClass('touming')
    },2600)
}

go()



// 播放音乐


$('.yinyue').on('click',function(){
    music()
})
//  document.querySelector('#music').play()

function music(){
    var musicdd= document.querySelector('#music')
    if(musicdd.paused){
        console.log(123)
        musicdd.play()
        $('.top-in').addClass('top')
        $('.bottom-in').addClass('bottom')
    }else{
        musicdd.pause()
        $('.top-in').removeClass('top')
        $('.bottom-in').removeClass('bottom')
    }
    
}
// 自动播放
// $('#music')[0].play();
$('.yinyue').delay(1000).trigger('click')
});
