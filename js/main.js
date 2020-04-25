$(function () {

    // 二级顶部搜索栏 页面卷曲到一定位置 则变成固定定位
    $(document).on('scroll', function () {
        // console.log($(this).scrollTop())
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
    $('.main-top-lun-but-xia').on('click', function () {
        if (flag) {
            flag = false
            let left = $('.main-top-lun-box').position().left;
            // console.log(left)
            if (left <= -2080) {
                flag = false
                $('.main-top-lun-box').animate({
                    left: 0
                }, 400, function () {
                    flag = true
                })
            } else {
                flag = false
                $('.main-top-lun-box').animate({
                    left: left - 1040
                }, 400, function () {
                    flag = true
                })
            }
        }
    })
    // 点击上一批按钮
    $('.main-top-lun-but-shang').on('click', function () {
        if (flag) {
            flag = false
            let left = $('.main-top-lun-box').position().left;
            console.log(left)
            if (left == 0) {
                flag = false
                $('.main-top-lun-box').stop(true).animate({
                    left: -3120
                }, 400, function () {
                    flag = true
                })
            } else {
                flag = false
                $('.main-top-lun-box').stop(true).animate({
                    left: left + 1040
                }, 400, function () {
                    flag = true
                })
            }
        }

    })

    // 自动轮播
    timer = setInterval(function () {
        $('.main-top-lun-but-xia').click()
    }, 5000)
    // 鼠标移入区域停止自动轮播
    $('.main-top-lun').hover(function () {
        clearInterval(timer)
    }, function () {
        clearInterval(timer)
        timer = setInterval(function () {
            $('.main-top-lun-but-xia').click()
        }, 5000)
    })



    $('.two-nav-box a').on('mouseenter', function () {
        $(this).css({
            "backgroundImage": "url(./images/main/main-two-nav-xuanzhong.jpg)",
            "color": "#000"
        })
        $('.xuanzhong').css({
            "backgroundImage": "url(./images/main/main-two-nav-xuanzhong.jpg)",
            "color": "#000"
        })
    })
    $('.two-nav-box a').on('mouseleave', function () {
        $(this).css({
            "backgroundImage": "url()",
            "color": "#fff"
        })
        $('.xuanzhong').css({
            "backgroundImage": "url(./images/main/main-two-nav-xuanzhong.jpg)",
            "color": "#000"
        })
    })
    //   二级导航下拉列表
    $('.nav-box').on('mouseenter', function () {
        let num = $(this).index()
        console.log()
        $('.two-nav-select').show()
        $(`.top-nav-select-box${num}`).show().siblings().hide()
        $('.two-nav-select').on('mouseleave', function () {
            $('.two-nav-select').hide()
        })
    })

    // 平安世界


    // 平安世界式神详情轮播图
    let pingan = 10
    let rightname
    let leftname
    let kko = function () {
        $('.pingan-lun-bigbox >div').each(function (i, v) {
            // 判断id是不是当前记录id
            if ($(this).attr('id') == pingan) {
                let add = $(this).attr('id') + 1
                let app = $(this).attr('id') - 1
                // 显示当前记录id的盒子
                // $(this).find($('.name')).animate({
                //     "opacity":0,
                //     "left":-200
                // },600)

                // $(this).find($('.juese')).animate({
                //     "opacity":0,
                //     "right":-200
                // },600)
                $(this).siblings().find('.name').animate({
                    "opacity": 0,
                    "left": -200
                }, 300, function () {

                })
                $(this).siblings().find('.juese').animate({
                    "opacity": 0,
                    "right": -200
                }, 300, function () {

                })

                $(this).show()
                $(this).find($('.name')).animate({
                    "opacity": 1,
                    "left": 0
                }, 600, function () {
                    $(this).siblings().find($('.name')).css({
                        "opacity": 0,
                        "left": -200
                    })
                })
                $(this).find($('.juese')).animate({
                    "opacity": 1,
                    "right": 0
                }, 600, function () {
                    $(this).siblings().find($('.name')).css({
                        "opacity": 0,
                        "right": -200
                    })
                })
                // 获取相邻id的盒子的关键词 放到按钮中
                guanjian()
            }
        })
    }
    // 动态更改按钮关键词
    function guanjian() {
        if (flag) {
            let num = pingan
            console.log(num)
            if (num == 10) {
                console.log(num)
                leftname = $('#1').attr('value')
                rightname = $(`#${--num}`).attr('value')
            } else if (num == 1) {
                console.log(num)
                rightname = $('#10').attr('value')
                console.log(rightname)
                leftname = $(`#${num += 1}`).attr('value')
                console.log(leftname)
            } else {
                console.log(num)
                leftname = $(`#${++num}`).attr('value')
                rightname = $(`#${--num}`).attr('value')
            }
            console.log(rightname, leftname)
            $('.pingan-lun-but-left > p').text(leftname)
            $('.pingan-lun-but-right > p').text(rightname)
        }
    }
    // 初始化轮播图
    kko()
    // 点击左按钮
    $('.pingan-lun-but-left').on('click', function () {

        // 遍历所有元素
        $('.pingan-lun-bigbox >div').each(function (i, v) {
            // 判断id是不是当前记录id
            if ($('.pingan-lun-bigbox >div').eq(i).attr('id') == pingan) {
                //判断id是否为最大值 如果为最大值 改为1
                if (pingan >= 10) {
                    pingan = 1
                } else {
                    pingan += 1
                }
                console.log(pingan)
                // 调用更改按钮关键词函数
                guanjian()
                // 调用更改内容的函数
                kko()
                return false;
            }
        })
    })
    // 点击右按钮
    $('.pingan-lun-but-right').on('click', function () {
        $('.pingan-lun-bigbox >div').each(function (i, v) {
            // 判断id是不是当前记录id
            if ($('.pingan-lun-bigbox >div').eq(i).attr('id') == pingan) {
                //判断id是否为最大值 如果为最大值 改为1
                if (pingan <= 1) {
                    pingan = 10
                } else {
                    pingan -= 1
                }
                console.log(pingan)
                // 调用更改按钮关键词函数
                guanjian()
                // 调用更改内容的函数
                kko()
                return false;
            }
        })
    })

    // 主角轮播图
    let zhujue = 14
    let liebiao = 0
    let zjleftname
    let zjrightname
    let zjflag = true
    let zjo = function () {
        $('.zhujue-lu-box >div').each(function (i, v) {
            // 判断id是不是当前记录id
            if ($(this).attr('id') == zhujue) {
                let add = $(this).attr('id') + 1
                let app = $(this).attr('id') - 1
                $(this).siblings().find('.name').animate({
                    "opacity": 0,
                    "left": -200
                }, 300, function () {

                })
                $(this).siblings().find('.juese').animate({
                    "opacity": 0,
                    "right": -200
                }, 300, function () {

                })

                $(this).show()
                $(this).find($('.name')).animate({
                    "opacity": 1,
                    "left": 0
                }, 600, function () {
                    $(this).siblings().find($('.name')).css({
                        "opacity": 0,
                        "left": -200
                    })
                })
                $(this).find($('.juese')).animate({
                    "opacity": 1,
                    "right": 0
                }, 600, function () {
                    $(this).siblings().find($('.name')).css({
                        "opacity": 0,
                        "right": -200
                    })
                })
                // 获取相邻id的盒子的关键词 放到按钮中
                zjguanjian()
            }
        })
    }
    zjo()
    // 动态更改按钮关键词
    function zjguanjian() {
        if (zjflag) {
            let num = zhujue
            if (num == 14) {
                zjleftname = $('#11').attr('value')
                zjrightname = $(`#${num - 1}`).attr('value')
            } else if (num == 11) {
                zjrightname = $('#14').attr('value')
                console.log(zjrightname)
                zjleftname = $(`#${num += 1}`).attr('value')
                console.log(leftname)
            } else {
                zjleftname = $(`#${num + 1}`).attr('value')
                zjrightname = $(`#${num - 1}`).attr('value')
            }
            $('.zhujue-lun-but-left > p').text(zjleftname)
            $('.zhujue-lun-but-right > p').text(zjrightname)
        }
    }
    // 点击左按钮
    $('.zhujue-lun-but-left').on('click', function () {
       


        // 遍历所有元素
        $('.zhujue-lu-box >div').each(function (i, v) {
            let liebiao = $('.zhujue-lu-box >div').eq(i).index()-1
                $('.zhujue-liebiao>a>span').removeClass("zjon")
                $('.zhujue-liebiao>a>span').eq(liebiao).addClass("zjon")
             
            // 判断id是不是当前记录id
            if ($('.zhujue-lu-box >div').eq(i).attr('id') == zhujue) {

                //判断id是否为最大值 如果为最大值 改为1
                if (zhujue >= 14) {
                    zhujue = 11
                } else {
                    zhujue += 1
                }
                console.log(zhujue)
                // 调用更改按钮关键词函数
                zjguanjian()
                // 调用更改内容的函数
                zjo()
                return false;
            }
        })
    })
    // 点击右按钮
    $('.zhujue-lun-but-right').on('click', function () {
        $('.zhujue-lu-box >div').each(function (i, v) {
            // 判断id是不是当前记录id
            if ($('.zhujue-lu-box >div').eq(i).attr('id') == zhujue) {
                let liebiao = $('.zhujue-lu-box >div').eq(i).index()+1
                if(liebiao==4){
                    liebiao=0
                }
                console.log(liebiao)
                $('.zhujue-liebiao>a>span').removeClass("zjon")
                $('.zhujue-liebiao>a>span').eq(liebiao).addClass("zjon")
             
                //判断id是否为最小值 如果为最小值 改为14
                if (zhujue <= 11) {
                    zhujue = 14
                } else {
                    zhujue -= 1
                }
                console.log(zhujue)
                // 调用更改按钮关键词函数
                zjguanjian()
                // 调用更改内容的函数
                zjo()
                return false;
            }
        })
    })

    

    // tab切换轮播图
   $('.pingan-qiehuan li').on('click',function(){
        $(this).addClass("on").siblings().removeClass('on')
       $('.pingan-box > div').eq($(this).index()).siblings().hide()
        $('.pingan-box > div').eq($(this).index()).fadeIn(600)
   })
})




// 游戏攻略
let gonglue_num = 0
let gonglue_flag = true
$('.gonglue-centent-minbox >ul >li').on('mousemove',function(){
    if(gonglue_flag){
        gonglue_flag=false
        $(this).addClass('on').siblings().removeClass('on')
        $('.gonglue-bottom-box > div').eq($(this).index()).siblings().css({
            "display":"none",
            "opacity":0
        })
        $('.gonglue-bottom-box > div').eq($(this).index()).show().stop().animate({
            opacity:1
        },400,function(){
            gonglue_flag=true
        })
    }
})





// 同人手账

// 左盒子轮播

let tongren_left = 0
// 自动轮播
let tongren_left_lun =null
tongren_left_lun = setInterval(tongren_left_lun_han,5000)
// 自动轮播函数
function tongren_left_lun_han(){
    tongren_left+=1
    if(tongren_left >=6){
        tongren_left=0
    }
    // 顶部tab变化
    $('.shouzhang-left-top-tab>span').eq(tongren_left).addClass('on').siblings().removeClass('on')
    // 图片变化
    $('.shouzhang-left-bottom>a').eq(tongren_left).siblings().animate({
        opacity:0
    },1000,function(){
        $('.shouzhang-left-bottom>a').eq(tongren_left).siblings().hide()
    })
    $('.shouzhang-left-bottom>a').eq(tongren_left).show().animate({
        opacity:1
    },1000)
}

// 鼠标移入区域 停止自动轮播
$('.shouzhang-left-minbox').on('mouseenter',function(){
    clearInterval(tongren_left_lun)
})
// 鼠标离开区域 开始自动轮播
$('.shouzhang-left-minbox').on('mouseleave',function(){
    tongren_left_lun = setInterval(tongren_left_lun_han,5000)
})
// 点击tab切换图片
$('.shouzhang-left-top-tab>span').on('click',function(){
    console.log($(this).index())
    $(this).addClass('on').siblings().removeClass('on')
     // 图片变化
     $('.shouzhang-left-bottom>a').eq($(this).index()).siblings().animate({
        opacity:0
    },1000,function(){
    })
    $('.shouzhang-left-bottom>a').eq($(this).index()).show().animate({
        opacity:1
    },1000)
})

// 右盒子轮播

// 自动轮播函数
let tongren_right = 0
function tongren_right_lun_han(){
    tongren_right+=1
    if(tongren_right >=7){
        tongren_right=0
    }
    // 图片变化
    $('.shouzhang-right-minbox>ul').eq(tongren_right).siblings().animate({
        opacity:0
    },1000,function(){
        $('.shouzhang-right-minbox>ul').eq(tongren_right).siblings().hide()
    })
    $('.shouzhang-right-minbox>ul').eq(tongren_right).show().animate({
        opacity:1
    },1000)
}
// 自动轮播定时器
let tongren_right_lun =null
tongren_right_lun = setInterval(tongren_right_lun_han,5000)
// 鼠标移入区域 停止自动轮播
$('.shouzhang-right').on('mouseenter',function(){
    console.log(123)
    clearInterval(tongren_right_lun)
})
// 鼠标离开区域 开始自动轮播
$('.shouzhang-right').on('mouseleave',function(){
    console.log(123)
    tongren_right_lun = setInterval(tongren_right_lun_han,5000)
})

// 点击换一批 轮播一次
$('.shouzhang-huan').on('click',function(){
    tongren_right_lun_han()
})


// 同人大触

// 点击换一次轮播一次

$('.dachu-huan').on('click',function(){
    dachu_lun_han()
})

let dachu_right = 0
function dachu_lun_han(){
    dachu_right+=1
    if(dachu_right >=4){
        dachu_right=0
    }
    // 图片变化
    $('.dachu-minbox>ul').eq(dachu_right).siblings().animate({
        opacity:0
    },1000,function(){
        $('.dachu-minbox>ul').eq(dachu_right).siblings().hide()
    })
    $('.dachu-minbox>ul').eq(dachu_right).show().animate({
        opacity:1
    },1000)
}