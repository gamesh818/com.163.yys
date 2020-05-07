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



// box2轮播图
let box2 = 1
let box2_lun = -830
// 点击左右按钮 tab列表内容跟着切换
$('.box2-left-but').on('click',function(){
    if(box2 == 1){
        box2 = 37
        $('.box2-tab-box').animate({
            left: -1120
        })
        box2_bp(box2)
        box2_num(box2)
    }else if(box2>1){
        box2-=1
        if(box2 == 32){
            $('.box2-tab-box').animate({
                left: -790
            })
        }else if(box2 == 24){
            $('.box2-tab-box').animate({
                left: -550
            })
        }else if(box2 == 16){
            $('.box2-tab-box').animate({
                left: -280
            })
        }else if(box2 == 9){
            $('.box2-tab-box').animate({
                left: 0
            })
        }
        box2_bp(box2)
        box2_num(box2)
    }
})

$('.box2-right-but').on('click',function(){
    if(box2 == 37){
        box2 = 1
        $('.box2-tab-box').animate({
            left: 0
        })
        box2_bp(box2)
        box2_num(box2)
    }else if(box2<37){
        box2+=1
        if(box2 == 32){
            $('.box2-tab-box').animate({
                left: -1080
            })
        }else if(box2 == 26){
            $('.box2-tab-box').animate({
                left: -830
            })
        }else if(box2 == 18){
            $('.box2-tab-box').animate({
                left: -552
            })
        }else if(box2 == 10){
            $('.box2-tab-box').animate({
                left: -280
            })
        }
        box2_bp(box2)
        box2_num(box2)
    }
})
// 根据变动的box2数字 来调整tab内容的样式
let box2_num = function(num){
    $(`.tab${num}`).addClass('on').siblings().removeClass('on')
}

// 根据变动的tab内容 轮播内容切换
let box2_bp = function(num){
    let box2_add= box2_lun * (num-1)
        $('.box2-lun-ul').animate({
            left: box2_add
        },1)
}



// box3 进阶切换tab
let jinjie = 0
$('.right-gif-jinjie').on('click',function(){
    if(jinjie==0){
        $('.box3-rightbox >ul').removeClass('hide')
        $('.box3-rightbox >ul').eq(jinjie).addClass('hide')
        jinjie = 1
    }else{
        $('.box3-rightbox >ul').removeClass('hide')
        $('.box3-rightbox >ul').eq(jinjie).addClass('hide')
        jinjie = 0
    }
})


// box4轮播图

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
    setTimeout(function(){
        $('.img3').siblings().find('nav').removeClass('on')
        $('.img3>nav').addClass('on')
    },100)
    

}