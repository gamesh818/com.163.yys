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
        
        $('.main-top-nav').on('mouseleave',function(){
            $('.guanfang-select').slideUp()
        })
        
    }else{
        $('.main-top-nav').removeClass('xiala')
        $('.one-nav').fadeIn(500)
        $('.two-nav').fadeOut(500)
        $('.main-left-logo').fadeOut(500)

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
        
    }
})





// 点击左侧盒子的按钮 按钮的样式固定

$('.left-box ul>li>a').on('click',function(){
    $(this).find('span').css({
        "left": "30px",
        "opacity": "1"
    })
    $(this).parent().siblings().find('a').find('span').css({
        "left": "0px",
        "opacity": "0"
    })
})
$('.box-1').on('click',function(){
    cler()
    $(this).find('i').css({
        "backgroundPosition": "-267px -233px",
        "width": "53px",
    })
})
$('.box-2').on('click',function(){
    cler()
    $(this).find('i').css({
        "backgroundPosition": "-272px -262px",
        "width": "52px",
        "height": "27px",
    })
})
$('.box-3').on('click',function(){
    cler()
    $(this).find('i').css({
        "backgroundPosition": "-320px -233px",
        "width": "28px",
        "height": "28px",
    })
})
$('.box-4').on('click',function(){
    cler()
    $(this).find('i').css({
        "backgroundPosition": "-235px -204px",
        "width": "40px",
        "height": "29px",
    })
})
$('.box-5').on('click',function(){
    cler()
    $(this).find('i').css({
        "backgroundPosition": "-363px -204px",
        "width": "28px",
        "height": "29px",
    })
})
$('.box-6').on('click',function(){
    cler()
    $(this).find('i').css({
        "backgroundPosition": "-235px -233px",
        "width": "16px",
        "height": "29px",
    })
})
$('.box-7').on('click',function(){
    cler()
    $(this).find('i').css({
        "backgroundPosition": "-251px -233px",
        "width": "16px",
        "height": "29px",
    })
})
$('.box-8').on('click',function(){
    cler()
    $(this).find('i').css({
        "backgroundPosition": "-324px -262px",
        "width": "52px",
        "height": "27px",
    })
})

// 重置所有按钮的样式
 let cler = function(){
    $('.box-1').find('i').css({
        "backgroundPosition": "-223px -262px",
        "width": "49px",
        "height":"29px"
    })
    $('.box-2').find('i').css({
        "backgroundPosition": "-170px -196px",
        "width": "48px",
        "height":"23px"
    })
    $('.box-3').find('i').css({
        "backgroundPosition": "-275px -204px",
        "width": "26px",
    })
    $('.box-4').find('i').css({
        "backgroundPosition": "-299px -204px",
        "width": "40px",
    })
    $('.box-5').find('i').css({
        "backgroundPosition": "-339px -204px",
        "width": "24px",
    })
    $('.box-6').find('i').css({
        "backgroundPosition": "-223px -204px",
        "width": "12px",
    })
    $('.box-7').find('i').css({
        "backgroundPosition": "-223px -233px",
        "width": "12px",
    })
    $('.box-8').find('i').css({
        "backgroundPosition": "-170px -173px",
        "width": "48px",
        "height":"23px"
    })
 }


//  点击对应按钮 对应内容留下 其他内容隐藏

// 点击全部
$('.box-1').on('click',function(){
    $('.ss').show()
})
// 点击联动
$('.box-2').on('click',function(){
    $('.ss').hide()
    $('.lian').show()
})
// 点击sp
$('.box-3').on('click',function(){
    $('.ss').hide()
    $('.sp').show()
})
// 点击SSR
$('.box-4').on('click',function(){
    $('.ss').hide()
    $('.ssr').show()
})
// 点击SR
$('.box-5').on('click',function(){
    $('.ss').hide()
    $('.sr').show()
})
// 点击R
$('.box-6').on('click',function(){
    $('.ss').hide()
    $('.r').show()
})
// 点击N
$('.box-7').on('click',function(){
    $('.ss').hide()
    $('.n').show()
})
// 点击呱太
$('.box-8').on('click',function(){
    $('.ss').hide()
    $('.gua').show()
})