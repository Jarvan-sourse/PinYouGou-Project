window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var magnify = document.querySelector('.magnify');
    var maxImg = document.querySelector('.bigImg');
    preview_img.addEventListener('mouseenter',function() {
        mask.style.display = 'block';
        magnify.style.display = 'block';
        preview_img.addEventListener('mousemove',function(e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var maskX = x - mask.offsetWidth / 2;
            var maskY = y - mask.offsetHeight / 2;
            var maxX = this.offsetWidth - mask.offsetWidth;
            var maxY = this.offsetHeight - mask.offsetHeight;
            if(maskX<= 0) {
                maskX = 0;
            } else if (maskX >= maxX) {
                maskX = maxX;
            };
            if(maskY <= 0) {
                maskY = 0;
            } else if (maskY >= maxY) {
                maskY = maxY;
            };
            mask.style.left = maskX + 'px';
            mask.style.top = maskY + 'px';
            // 大图片的距离 = 遮挡层移动距离 * 大图片的最大移动距离 / 遮挡层的最大移动距离 (都是正方形)
            maxImgX = maskX * (maxImg.offsetWidth - magnify.offsetWidth)/maxX;
            maxImgY = maskY * (maxImg.offsetHeight - magnify.offsetHeight) /maxY;
            maxImg.style.left = -maxImgX + 'px';
            maxImg.style.top = -maxImgY + 'px';
        })
        
    })
    preview_img.addEventListener('mouseleave',function() {
        mask.style.display = 'none';
        magnify.style.display = 'none';
    })
    // 给购买选项中的框 点击之后边框颜色变为红色 start
    $(function() {
        $(".choose-color dd, .choose-version dd, .buy-style dd, .suit dd").click(function() {
            $(this).addClass("current");
            $(this).siblings().removeClass("current");
        })
    })
    // 给购买选项中的框 点击之后边框颜色变为红色 end

    // tab 栏切换 start
    var tab_switch = document.querySelector('.tab_switch');
    var lis_switch = tab_switch.querySelectorAll('li');
    var detail_tab_con = document.querySelector('.detail_tab_con');
    // 遍历给所有的小li加点击事件
    for(var i = 0; i < tab_switch.children.length; i++) {
        // 遍历的同时给li加上索引号
        lis_switch[i].setAttribute('data-index',i);
        lis_switch[i].addEventListener('click', function() {
            for(var i = 0; i < lis_switch.length; i++) {
                tab_switch.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('data-index');
            console.log(index);
            for (var i = 0; i < detail_tab_con.children.length; i++) {
                detail_tab_con.children[i].style.display = 'none';
            }
            detail_tab_con.children[index].style.display = 'block';
        })
    }
    tab_switch.children[0].className = 'current' 
    // tab 栏切换 end
})