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
    // 鼠标移动到伪轮播图盒子上的时候 盒子往上跳动  js不适用 已经转用css hover解决
    // $('.main-center-lun > div').on('mouseenter',function(){
    //     var top = $(this).position().top;
    //     top=top-10
    //     $(this).stop().animate({
    //         top:top
    //     },300)
    // })
    // $('.main-center-lun > div').on('mouseleave',function(){
    //     var top = $(this).position().top;
    //     top=top+10
    //     $(this).stop().animate({
    //         top:top
    //     },300)
    // })

    /**禁用滚动条**/
    function unScroll() {
        var top = $(document).scrollTop();
        $(document).on('scroll.unable',function (e) {
            $(document).scrollTop(top);
        })
    }

    /**启用滚动条**/
    function removeUnScroll() {
        $(document).unbind("scroll.unable");
    }

    // 主页伪轮播图
    // 点击任意一个 小盒子显示遮罩层和大盒子
    $('.main-center-lun > div').on('click',function(){
        // 禁用滚动条
        unScroll()
        let index = $(this).index()
        // 隐藏二维码
        $('.left-erwei').hide()
        // 显示遮罩层
        $('.lun-black').show()
        // 显示大盒子
        $('.lun-bigbox').show()
        // 显示当前点击对应的盒子 并隐藏其他同辈盒子
        $('.lun-conter').eq(index).show().siblings().hide()
        // 点击关闭按钮 隐藏盒子和遮罩层 显示二维码
        $('.lun-stop').on('click',function(){
        // 启用滚动条
        removeUnScroll()
        // 隐藏遮罩层
        $('.lun-black').hide()
        // 隐藏大盒子
        $('.lun-bigbox').hide()
        // 显示二维码
        $('.left-erwei').show()
        })
        // 点击左右按钮 更换对应的盒子
        $('.lun-left').on('click',function(){
            if(index !=0){
                index--
                $('.lun-conter').eq(index).show().siblings().hide()
            }
            // 判断图片是否是第一张或者是最后一张 如果是则给响应的按钮添加样式 和禁用按钮
            if(index == 0){
                $('.lun-left').addClass("lun-butstop")
            }else if(index == 5){
                $('.lun-right').addClass("lun-butstop")
            }else{
                $('.lun-left').removeClass("lun-butstop")
                $('.lun-right').removeClass("lun-butstop")
            }
        })
        $('.lun-right').on('click',function(){
            if(index !=5){
                index++
                $('.lun-conter').eq(index).show().siblings().hide()
            }
            // 判断图片是否是第一张或者是最后一张 如果是则给响应的按钮添加样式 和禁用按钮
            if(index == 0){
                $('.lun-left').addClass("lun-butstop")
            }else if(index == 5){
                $('.lun-right').addClass("lun-butstop")
            }else{
                $('.lun-left').removeClass("lun-butstop")
                $('.lun-right').removeClass("lun-butstop")
            }
        })
        // 判断图片是否是第一张或者是最后一张 如果是则给响应的按钮添加样式 和禁用按钮
        if(index == 0){
            $('.lun-left').addClass("lun-butstop")
        }else if(index == 5){
            $('.lun-right').addClass("lun-butstop")
        }else{
            $('.lun-left').removeClass("lun-butstop")
            $('.lun-right').removeClass("lun-butstop")
        }
    })



















})
