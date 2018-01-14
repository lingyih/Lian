//导航栏
(function () {
    //获取的是页面的向左或者向上卷曲出去的距离的值,返回的是对象
    function getScroll() {
        return {
            top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
            left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
        };
    }

//导航栏
    var til2 = document.querySelector(".til2");

//获取向上滚动距离设置样式
    window.onscroll = function () {
        if (getScroll().top >= 280) {
            til2.className = "til2 bei"
        } else {
            til2.className = "til2"
        }
    };

//导航栏底部鼠标进入事件
    $(".till3 li").find("a").mouseover(function () {
        $(".till3 li div ").stop();
        $(this).siblings().css({height: 2, width: 0}).animate({
            width: 15
        });
    });

//导航栏底部鼠标移除事件
    $(".till3 li").find("a").mouseout(function () {
        $(".till3 li div ").stop(true, true);
        $(this).siblings().animate({
            width: 0,
            height: 0
        });
    });

})();

//底部轮播图
(function () {

    //声明定时器名称
    var timeId;

    var flag=true;

// 循环设置自由属性
    for(var i=0;i<4;i++){
        $(".ti7").eq(i).attr("it",i+1)
    }

// 设置第一个图片的背景色
    $(".ti7").eq(0).css("background-color","#b8860b");

// 图片点击动画
    $(".ti7").click(function () {
        //判断
        if (!flag) {
            return;
        }
        //获取被点击图片的下标
        var index = $(this).index();
        // 获取被点击图片的前面所有div
        var t1 = $(this).prevAll();
        //获取被点击图片的自由属性
        var t2 =$(this).attr("it");
        //从新赋值
        flag=false;
        //调用动画函数
        play1(index,t1,t2);

    });

//轮播图两侧按钮
//左侧
    $(".tl1").click(function () {
        //判断
        if (!flag) {
            return;
        }
        // 移动个数
        var inde=1;
        //获取移动的那个div
        var t1 = $(".ti7").eq(inde-1);
        //获取下标
        var t2 =$(".ti7").eq(inde).attr("it");
        //从新赋值
        flag=false;
        //调用函数
        play1(inde,t1,t2);
    });

//右侧
    $(".tl2").click(function () {
        //判断是否可以执行
        if (!flag) {
            return;
        }
        var inde=3;
        //获取要追加的元素
        var t1 = $(".ti7").eq(inde);
        //获取自由属性
        var t2 =$(".ti7").eq(inde).attr("it");
        //从新赋值
        flag=false;
        //设置被点击图片的背景图片层级,和其余的层级
        $(".ss").eq(t2-1).css("z-index",10).siblings().css("z-index",20);
        // 设置被点击的图片的样式
        $(".ti7").eq(inde).css("background-color","#b8860b").siblings().css("background-color","");
        //设置被点击图片的背景图片变为实体,其余变透明
        $(".ss").eq(t2-1).css({opacity: 1}).siblings().animate({
            opacity: 0
        }, 1000, function () {
            flag=true;
        });
        //克隆属性 执行动画
        $(".til6").prepend(t1.clone(true))
            .animate({
            right: -300
        },1000, function () {
            //动画执行完后删除最后一个div
            $(".ti7").eq(inde).next().remove();
                // 设置盒子定位
            $(".til6").css({right:0,left:0});
            //变量从新赋值
                flag=true;
        });
    });

// 底部轮播图鼠标进入事件
    $(".ti11").mouseover(function () {
        clear()
    });

// 底部轮播图鼠标移除事件
    $(".ti11").mouseout(function () {
        play();
    });

//左侧按钮鼠标进入
    $(".tl1").mouseover(function () {
        clear()
    });

//左侧按钮鼠标移除
    $(".tl1").mouseout(function () {
        play();
    });

//右侧按钮鼠标进入
    $(".tl2").mouseover(function () {
        clear()
    });

//右侧按钮鼠标移除
    $(".tl2").mouseout(function () {
        play();
    });

// 清理定时器函数
    function clear() {
        clearInterval(timeId);
    }

// 轮播图动画函数
    function play() {
        //设置定时器
        timeId=setInterval(function () {
            //判断
            if (!flag) {
                return;
            }
            var inde=1;
            //获取第一个图片
            var t1 = $(".ti7").eq(inde-1);
            // 获取被点击自有属性
            var t2 =$(".ti7").eq(inde).attr("it");
            //从新赋值
            flag=false;
            //调用动画函数
            play1(inde,t1,t2);
        },3000);
    }

//轮播动画函数
    function play1(inde,t1,t2) {

        //设置被点击图片的背景图片层级,和其余的层级
        $(".ss").eq(t2-1).css("z-index",10).siblings().css("z-index",20);

// 设置被点击的图片的样式
        $(".ti7").eq(inde).css("background-color","#b8860b").siblings().css("background-color","");

//设置被点击图片的背景图片变为实体,其余变透明
        $(".ss").eq(t2-1).css({opacity: 1}).siblings().animate({
            opacity: 0
        }, 1000, function () {
            flag=true;
        });

        //克隆到最后,执行动画
        $(".til6").append(t1.clone(true)).animate({
            left: -300 * inde
        },1000, function () {
            //动画执行完后删除第一个图片
            $(".ti7").eq(inde).prevAll().remove();
            // 设置盒子定位
            $(".til6").css("left", 0);
            //变量从新赋值
            flag=true;
        });
    }

//调用动画函数
    play();

})();

// 人物简介底下小盒子
(function () {
    // 鼠标进入事件
    $(".zh-1-2-3-1").children().css("border","1 solid #b8860b" ).mouseenter(function () {
        $(this).children().animate({
            height:60
        })
    });
    //
    $(".zh-1-2-3-1").children().css("border","1 solid #b8860b" ).mouseleave(function () {
        $(this).children().animate({
            height:0
        })
    });
})();

//轮播图
(function () {
    setInterval(function () {
        //最顶部轮播图
        var index=$(".po1").children().eq(0);
        console.log(index)

        $(".po1").append(index.clone(true)).animate({
            left:-313
        },1000,function () {
            $(".po1").children().eq(0).remove();
            $(".po1").css("left", 0);
        });
    },3000);
})();
































//假视频 痛
// (function () {
//     // 假视频鼠标进入事件
//     $("#zh2").mouseover(function (e) {
//         e.stopPropagation();
//         //遮挡层变浅
//         $(this).children("div").animate({opacity: 0.2});
//         // 图标变样
//         $(this).children("img").css("z-index",1).attr("src","image/bf1.png").animate({opacity: 1,width:80,height:80,left:310,top:150});
//         return false
//     });
//
// // 鼠标移除事件
//     $("#zh2").mouseout(function (e) {
//         e.stopPropagation();
//         // 遮挡层变深
//         $(this).children("div").animate({opacity: 0.5});
//         // 图标变样
//         $(this).children("img").css("z-index",4).attr("src","image/bf.png").animate({opacity: 1,width:60,height:60,left:320,top:160});
//         return false
//     });
// })();

