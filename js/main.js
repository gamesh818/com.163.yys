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
                // 显示当前记录id的盒子
                $(this).siblings().hide()
                $(this).show()
                $(this).find($('.name')).animate({
                    "opacity":1,
                    "left":0
                },600)
                $(this).find($('.juese')).animate({
                    "opacity":1,
                    "right":0
                },600)
                // 获取相邻id的盒子的关键词 放到按钮中
                guanjian ()
            }       
        })
    }
    // 动态更改按钮关键词
    function guanjian (){
        let num = pingan
        console.log(num)
                if(num == 10){
                    console.log(num)
                    leftname = $('#1').attr('value')
                    rightname =  $(`#${--num}`).attr('value')
                }else if(num == 1){
                    console.log(num)
                    rightname =  $('#10').attr('value')
                    console.log(rightname)
                    leftname = $(`#${num+=1}`).attr('value')
                    console.log(leftname)
                }else{
                    console.log(num)
                    leftname = $(`#${++num}`).attr('value')
                    rightname =  $(`#${--num}`).attr('value')
                }
                console.log(rightname,leftname)
                $('.pingan-lun-but-left > p').text(leftname)
                $('.pingan-lun-but-right > p').text(rightname)
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
                    pingan+=1
                }
                console.log(pingan)
                // 调用更改按钮关键词函数
                guanjian ()
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
                    pingan-=1
                }
                console.log(pingan)
                // 调用更改按钮关键词函数
                guanjian ()
                // 调用更改内容的函数
                kko()
                return false; 
            }
        })
    })







})

