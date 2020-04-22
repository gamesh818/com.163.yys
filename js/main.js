$(function () {

    // 二级顶部搜索栏 页面卷曲到一定位置 则变成固定定位
    $(document).on('scroll', function () {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() >= 150) {
            $('.two-nav').css({
                "position": "fixed",
                "top": "0px"
            })
            $('.two-nav-hide').stop().animate({
                top: 0,
                opacity: 1
            }, 500)
        } else {
            $('.two-nav').css({
                "position": "absolute",
                "top": "55px"
            })
            $('.two-nav-hide').stop().animate({
                top: -20,
                opacity: 0
            }, 500)
        }
    })
    // 头部文字轮播图
    let timer = null
    let flag = true
    // 点击下一批按钮
    $('.main-top-lun-but-xia').on('click',function(){
        if(flag){
            flag = false
            let left = $('.main-top-lun-box').position().left;
            console.log(left)
            if(left <= -2080){
                flag = false
                $('.main-top-lun-box').animate({
                    left:0
                },400,function(){
                    flag = true
                })
            }else{
                flag = false
                $('.main-top-lun-box').animate({
                    left:left-1040
                },400,function(){
                    flag = true
                })
            }
        }
    })
    // 点击上一批按钮
    $('.main-top-lun-but-shang').on('click',function(){
        if(flag){
            flag = false
            let left = $('.main-top-lun-box').position().left;
            console.log(left)
            if(left == 0){
                flag = false
                $('.main-top-lun-box').stop(true).animate({
                    left:-3120
                },400,function(){
                    flag = true
                })
            }else{
                flag = false
                $('.main-top-lun-box').stop(true).animate({
                    left:left+1040
                },400,function(){
                    flag = true
                })
            }
        }
        
    })

    // 自动轮播
    timer = setInterval(function(){
        $('.main-top-lun-but-xia').click()
      },5000)
    // 鼠标移入区域停止自动轮播
      $('.main-top-lun').hover(function(){
        clearInterval(timer)
      },function(){
        clearInterval(timer)
        timer = setInterval(function(){
            $('.main-top-lun-but-xia').click()
          },5000)
      })















})

