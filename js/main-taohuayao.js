// 一旦滚轮下滑 顶部导航更换样式

// 官方渠道被触碰时 下拉列表出现
$(document).on('scroll',function(){
    let num= $(this).scrollTop()
    console.log(num)
    if(num>=55){
        $('.main-top-nav').addClass('xiala')
        $('.one-nav').fadeOut(500)
        $('.two-nav').fadeIn(500)
        $('.main-left-logo').fadeIn(500)
        $('.guanfang').on('mouseenter',function(){
            $('.guanfang-select').slideDown()
        })
        $('.main-top-nav').css({
            "background": "rgba(255, 255, 255, 0.9)",
            "position": "fixed",
            "top":"0"
        })
        $('.main-top-nav').on('mouseleave',function(){
            $('.guanfang-select').slideUp()
        })
        $('.guanfang').off()
        $('.main-top-nav').off()
        $('.guanfang').on('mouseenter',function(){
            $('.guanfang-select').slideDown()
            $('.main-top-nav').css({
                "background": "rgba(255, 255, 255, 0.9)"
            })
            $('.one-nav >li >a').css({
                "color": "#333"
            })
            $('.one-nav >li >span').css({
                "backgroundPosition": "-158px -71px"
            })
        })
        
        $('.main-top-nav').on('mouseleave',function(){
            $('.guanfang-select').slideUp()

            $('.one-nav >li >a').css({
                "color": "#fff"
            })
            $('.one-nav >li >span').css({
                "backgroundPosition": "-173px -71px"
            })
        })
    }else if(num<=55){
        $('.main-top-nav').removeClass('xiala')
        $('.one-nav').fadeIn(500)
        $('.two-nav').fadeOut(500)
        $('.main-left-logo').fadeOut(500)
        $('.main-top-nav').css({
            "background": "transparent",
            "position": "absolute"
        })
        $('.guanfang').on('mouseenter',function(){
            $('.guanfang-select').slideDown()
            $('.main-top-nav').css({
                "background": "rgba(255, 255, 255, 0.9)",
                
            })
            $('.one-nav >li >a').css({
                "color": "#333"
            })
            $('.one-nav >li >span').css({
                "backgroundPosition": "-158px -71px"
            })
        })
        
        $('.main-top-nav').on('mouseleave',function(){
            $('.guanfang-select').slideUp()
            $('.main-top-nav').css({
                "background": "transparent"
            })
            $('.one-nav >li >a').css({
                "color": "#fff"
            })
            $('.one-nav >li >span').css({
                "backgroundPosition": "-173px -71px"
            })
        })
        
    }
})
$('.guanfang').on('mouseenter',function(){
    $('.guanfang-select').slideDown()
    $('.main-top-nav').css({
        "background": "rgba(255, 255, 255, 0.9)"
    })
    $('.one-nav >li >a').css({
        "color": "#333"
    })
    $('.one-nav >li >span').css({
        "backgroundPosition": "-158px -71px"
    })
})

$('.main-top-nav').on('mouseleave',function(){
    $('.guanfang-select').slideUp()
    $('.main-top-nav').css({
        "background": "transparent"
    })
    $('.one-nav >li >a').css({
        "color": "#fff"
    })
    $('.one-nav >li >span').css({
        "backgroundPosition": "-173px -71px"
    })
})



// 点击tab按钮 按钮变化样式 切换对应的式神形象

$('.qiehuan-tab>a').on('click',function(){
    $(this).find('i').fadeIn()
    $(this).siblings().find('i').fadeOut()
})

$('.chushi').on('click',function(){
    $(this).removeClass('chushi-a')
    $('.juexing').removeClass('juexing-a')
    $('.pifu').removeClass('pifu-a')
    $('.shishen-xingxiang>div').fadeOut()
    $('.shishen-chushi').fadeIn()
})
$('.juexing').on('click',function(){
    $(this).addClass('juexing-a')
    $('.chushi').addClass('chushi-a')
    $('.pifu').removeClass('pifu-a')
    $('.shishen-xingxiang>div').fadeOut()
    $('.shishen-juexing').fadeIn()
})
let shishen_num = 0
$('.pifu').on('click',function(){
    $(this).addClass('pifu-a')
    $('.chushi').addClass('chushi-a')
    $('.juexing').removeClass('juexing-a')
    $('.shishen-pifu').siblings().fadeOut()
    $('.shishen-pifu').fadeIn()
    $('.shishen-pifu>div').fadeOut()
    $('.shishen-pifu>div').eq(shishen_num).fadeIn()
    
    shishen_num++
    if(shishen_num == 2){
        shishen_num = 0
    }
})


// 点击传记的标题 更换对应的传记内容
$('.zhuanji-1').on('click',function(){
    $('.box1-right>h3>a').removeClass('on')
    $(this).addClass('on')
    
    $('.box1-text>p').hide()
    $('.text1').fadeIn(500)
})
$('.zhuanji-2').on('click',function(){
    $('.box1-right>h3>a').removeClass('on')
    $(this).addClass('on')
    $('.box1-text>p').hide()
    $('.text2').fadeIn(500)
})
$('.zhuanji-3').on('click',function(){
    $('.box1-right>h3>a').removeClass('on')
    $(this).addClass('on')
    $('.box1-text>p').hide()
    $('.text3').fadeIn(500)
})