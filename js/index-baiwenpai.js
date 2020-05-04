// 游戏全目录下滑列表  滑动显示隐藏
$('.top-nav-left').on('mouseenter',function(){
    $('.top-nav-select').stop().delay(300).slideDown(500)
})
$('.top-nav-select').on('mouseleave',function(){
    $('.top-nav-select').stop().delay(300).slideUp(500)
})

// box2轮播图
// 点击按钮 按钮固定样式 其他按钮回复样式
$('.but').on('click',function(){
    let minnum=  $(this).index()
    let num = $(this).index()+1
    for(let i = 0 ; i< $('.box2-tab >div').length ; i++){
        $('.box2-tab >div').eq(i).removeClass(`but${i+1}-on`)
        $('.box2-tab >div').eq(i).addClass(`but${i+1}`)
    }
    $(this).removeClass(`but${num}`)
    $(this).addClass(`but${num}-on`)
    // 点击对应按钮-切换对应轮播图
    if(minnum == 0){
        $('.box2-lun-box').css({
            "transform": "translate3d(0px, 0px, 0px)"
        })
    }else if(minnum == 1){
        $('.box2-lun-box').css({
            "transform": "translate3d(-778px, 0px, 0px)"
        })
    }else if(minnum == 2){
        $('.box2-lun-box').css({
            "transform": "translate3d(-1556px, 0px, 0px)"
        })
    }else if(minnum == 3){
        $('.box2-lun-box').css({
            "transform": "translate3d(-2334px, 0px, 0px)"
        })
    }else if(minnum == 4){
        $('.box2-lun-box').css({
            "transform": "translate3d(-3112px, 0px, 0px)"
        })
    }else if(minnum == 5){
        $('.box2-lun-box').css({
            "transform": "translate3d(-3890px, 0px, 0px)"
        })
    }
})


var imgNub;               //轮播图片数量

$(function(){
    imgNub = $(".carousel div").length;             //获取轮播图片数量
    for(i=0;i<imgNub;i++){
        $(".carousel .img:eq("+i+")").attr("imgId",i);
    }

    //根据轮播图片数量设定图片位置对应的class
    //img3为中央展示位
    //img2 && img 为左右
    if(imgNub==1){
        //img3
        for(i=0;i<imgNub;i++){
            $(".carousel .img:eq("+i+")").addClass("img3");
        }
    }
    if(imgNub==2){
        //img 3、4
        for(i=0;i<imgNub;i++){
            $(".carousel .img:eq("+i+")").addClass("img"+(i+3));
        }
    }
    if(imgNub==3){
        //img 2、3、4
        for(i=0;i<imgNub;i++){
            $(".carousel .img:eq("+i+")").addClass("img"+(i+2));
        }
    }
    if(imgNub>3&&imgNub<6){
        //img 1、2、3、4、(5)
        for(i=0;i<imgNub;i++){
            $(".carousel .img:eq("+i+")").addClass("img"+(i+1));
        }
    }
    if(imgNub>=6){
        for(i=0;i<imgNub;i++){
            if(i<5){
                // img 1、2、3、4、5
                $(".carousel .img:eq("+i+")").addClass("img"+(i+1));
            }else{
                //img 5
                $(".carousel .img:eq("+i+")").addClass("img5");
            }
        }
    }

    imgClicked();
});


//右滑动
function right(){
    var fy = [];
    for(i=0;i<imgNub;i++){
        fy[i]=$(".carousel .img[imgId="+i+"]").attr("class");
    }
    console.log(fy);
    for(i=0;i<imgNub;i++){
        if(i==0){
            //最后一个->第一个
            $(".carousel .img[imgId="+i+"]").attr("class",fy[imgNub-1]);
        }else{
            //其他依次后移
            $(".carousel .img[imgId="+i+"]").attr("class",fy[i-1]);
        }
    }
    add()
    imgClicked();
}


//左滑动
function left(){
    var fy = [];
    for(i=0;i<imgNub;i++){
        fy[i]=$(".carousel .img[imgId="+i+"]").attr("class");
    }
    for(i=0;i<imgNub;i++){
        if(i==(imgNub-1)){
            //第一个->最后一个
            $(".carousel .img[imgId="+i+"]").attr("class",fy[0]);
        }else{
            //其他依次前移
            $(".carousel .img[imgId="+i+"]").attr("class",fy[i+1]);
        }
    }
    add()
    imgClickFy();
}


//轮播图片左右图片点击翻页
function imgClicked(){
    $(".carousel .img").removeAttr("onclick");
    $(".carousel .img2").attr("onclick","left()");
    $(".carousel .img4").attr("onclick","right()");
}

function add (){
    $('.img3>span').removeClass('show')
    $('.img3>span').addClass('cove')
    $('.img3').siblings().find('span').removeClass('cove').addClass('show')
}

// 点击按钮 跳转到对应位置
$('.lun-but-box span').on('click',function(){
    $(this).addClass('on')
    $(this).siblings().removeClass('on')
})

function poo (){
    let too = $(this).scrollTop()
    console.log(too)
    if(too >= 900){
        $('.flex-nav').show()
        for(let i = 0 ; i<$('.nav-but').length;i++){
            $(`.but-${i+1}`).removeClass(`but-${i+1}-on`)
        }
        $('.but-1').addClass('but-1-on')
    }else{
        $('.flex-nav').hide()
    }
    if(too>=1140){
        for(let i = 0 ; i<$('.nav-but').length;i++){
            $(`.but-${i+1}`).removeClass(`but-${i+1}-on`)
        }
        $('.but-2').addClass('but-2-on')
    }
    if(too>=2200){
        for(let i = 0 ; i<$('.nav-but').length;i++){
            $(`.but-${i+1}`).removeClass(`but-${i+1}-on`)
        }
        $('.but-3').addClass('but-3-on')
    }
    if(too>=3300){
        for(let i = 0 ; i<$('.nav-but').length;i++){
            $(`.but-${i+1}`).removeClass(`but-${i+1}-on`)
        }
        $('.but-4').addClass('but-4-on')
    }
    if(too>=4340){
        for(let i = 0 ; i<$('.nav-but').length;i++){
            $(`.but-${i+1}`).removeClass(`but-${i+1}-on`)
        }
        $('.but-5').addClass('but-5-on')
    }
}
poo()
// flex导航
$(window).on('scroll',function(){
    poo()
})
// 点击对应按钮 跳转到对应位置
$('.but-1').on('click',function(){
    $("html").animate({
        scrollTop:0
    })
})
$('.but-2').on('click',function(){
    $("html").animate({
        scrollTop:1140
    })
})
$('.but-3').on('click',function(){
    $("html").animate({
        scrollTop:2200
    })
})
$('.but-4').on('click',function(){
    $("html").animate({
        scrollTop:3300
    })
})
$('.but-5').on('click',function(){
    $("html").animate({
        scrollTop:4340
    })
})