//调整自适应

function remSize() {
    //获取设备的宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if( deviceWidth >= 750 ){
        deviceWidth = 750
    }else if( deviceWidth <= 320 ) {
        deviceWidth = 320
    }
    //750ox 1rem = 100px; 375px 1rem = 50px; 为了好计算
    document.documentElement.style.fontSize = (deviceWidth/7.5)+'px'
    //设置字体大小,默认15px
    document.querySelector('body').style.fontSize = 0.3 + "rem"
}

remSize()

//当前窗口发生变化而调用，进行适配
window.onresize = function() {
    remSize()
}