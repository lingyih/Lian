//第一段代码是格式化日期
//根据id返回对应的元素
function my$(id) {
    return document.getElementById(id);
}

//(设置一个span标签的文本内容)
//设置任意的一个元素的任意文本内容
function setInnerText(element, text) {
    //判断浏览器是否支持这个属性
    if (typeof element.textContent == "undefined") {//IE8不支持
        element.innerText = text;
    } else {
        //谷歌,火狐
        element.textContent = text;
    }
}
//获取任意的一个元素的文本内容
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        //不支持,应该用innerText
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 获取父级元素中的第一个子元素
 * @param element 父级元素
 * @returns {*} 父级元素中的子级元素
 */
function getFirstElement(element) {
    //判断浏览器中是否支持这个属性
    if (typeof element.firstElementChild == "undefined") {
        //先获取这个父级元素中的第一个子级节点
        var node = element.firstChild;
        while (node && node.nodeType != "1") {
            node = node.nextSibling;
        }
        return node;
    } else {
        //支持的
        return element.firstElementChild;
    }
}
/**
 * 获取父级元素中的最后一个子元素
 * @param element 父级元素
 * @returns {*} 最后一个子元素
 */
function getLastElement(element) {
    //判断浏览器中是否支持这个属性
    if (typeof element.lastElementChild == "undefined") {
        //先获取这个父级元素中的第一个子级节点
        var node = element.lastChild;
        while (node && node.nodeType != "1") {
            node = node.previousSibling;
        }
        return node;
    } else {
        //支持的
        return element.lastElementChild;
    }
}
/**
 * 获取某个元素的前一个兄弟元素
 * @param element 某个元素
 * @returns {*} 前一个兄弟元素
 */
function getPreviousElement(element) {
    if (typeof element.previousElementSibling == "undefined") {
        var node = element.previousSibling;
        while (node && node.nodeType != "1") {
            node = node.previousSibling;
        }
        return node;
    } else {
        return element.previousElementSibling;
    }
}
/**
 * 获取某个元素的后一个兄弟元素
 * @param element 某个元素
 * @returns {*} 后一个兄弟元素
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 获取某个元素的所有兄弟元素
 * @param element 某个元素
 * @returns {Array} 兄弟元素
 */
function getSiblings(element) {
    if (!element)return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}
/**
 * 返回当前浏览器是什么类型的浏览器
 */
function userBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/msie/i.test(browserName) && !/opera/.test(browserName)){
        console.log("IE");
    }else if(/firefox/i.test(browserName)){
        console.log("Firefox");
    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
        console.log("Chrome");
    }else if(/opera/i.test(browserName)){
        console.log("Opera");
    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
        console.log("Safari");
    }else{
        console.log("不知道什么鬼!");
    }
}



//为任意一个元素绑定事件:元素,事件类型,事件处理函数
function addEventListener(element,type,fn) {
    if(element.addEventListener){
        //支持
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
//为任意的一个元素解绑某个事件:元素,事件类型,事件处理函数
function removeEventListener(element,type,fn) {
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}
/**
 * 格式化日期
 * @param dt 日期对象
 * @returns {string} 返回值是格式化的字符串日期
 */
function getDates(dt) {
    var str = "";//存储时间的字符串
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth() + 1;
    //获取日
    var day = dt.getDate();
    //获取小时
    var hour = dt.getHours();
    //获取分钟
    var min = dt.getMinutes();
    //获取秒
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
    return str;
}

//获取的是页面的向左或者向上卷曲出去的距离的值,返回的是对象
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
    };
}

//获取任意一个元素的任意一个样式属性的值
function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}

/*
 * 参数1:元素
 * 参数2:属性名字
 * 参数3:该属性的目标值
 * 参数4: fn----函数
 *动画函数
 * attr----target
 * attr2----target2
 * attr3----target3
 *
 * var obj={name:"",age:""}
 *
 * */
// function animate(element, json,fn) {
//     clearInterval(element.timeId);
//     element.timeId = setInterval(function () {
//         //假设都到达目标了
//         var flag = true;//标识---可以控制是否到达目标---
//         for (var attr in json) {
//             //判断透明度
//             if(attr=="opacity"){
//                 //获取任意一个元素的任意一个属性的当前的位置
//                 //  0.3  -----0.9
//                 var current = getStyle(element, attr)*100;//30
//                 var target = json[attr]*100;//90
//                 //每次移动的步数
//                 var step = (target - current) / 10;//6
//                 step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                 current += step;
//                 element.style[attr] = current /100;
//             }else if(attr=="zIndex"){//判断层级
//                 element.style[attr]=json[attr];
//             }else{//普通的属性操作
//                 //获取任意一个元素的任意一个属性的当前的位置
//                 var current = parseInt(getStyle(element, attr));
//                 var target = json[attr];
//                 //每次移动的步数
//                 var step = (target - current) / 10;
//                 step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                 current += step;
//                 element.style[attr] = current + "px";
//             }
//             if (current != target) {
//                 flag = false;
//             }
//         }
//         if (flag) {
//             clearInterval(element.timeId);
//             //判断用户是否传入函数
//             if(fn){
//                 fn();
//             }
//         }
//         // console.log("目标位置:" + target + ",当前位置:" + current + ",每次移动的步数:" + step);
//     }, 20);
// }
/*
* window.event和e的问题
* 可视区域的横纵坐标的兼容问题
* window.event.clientX和e.clientX的兼容
* 向左和向上的卷曲的距离的兼容
* 计算pageX和pageY  及scrollLeft+clientX 和scrollTop+clientY的兼容的问题
*
*
* */
var EventObj={
    getEvent:function (e) {//封装的是事件参数对象
        return window.event||e;
    },
    getClientX:function (e) {//封装的是可视区域的横坐标
        return this.getEvent(e).clientX;
    },
    getClientY:function (e) {//封装的是可视区域的纵坐标
        return this.getEvent(e).clientY;
    },
    getScrollLeft:function () {//页面向左卷曲出去的距离
        return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    getScrollTop:function () {//页面向上卷曲出去的距离
        return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    },
    getPageX:function (e) {//页面的向左卷曲出去的距离+页面中可视区域的横坐标
        return this.getEvent(e).pageX?this.getEvent(e).pageX:this.getClientX(e)+this.getScrollLeft();
    },
    getPageY:function (e) {//页面的向上卷曲出去的距离+页面中可视区域的纵坐标
        return this.getEvent(e).pageY?this.getEvent(e).pageY:this.getClientY(e)+this.getScrollTop();
    }
};
