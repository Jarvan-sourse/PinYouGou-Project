window.addEventListener('load',function() {
    upDownAnimate(window, 0);
// banner轮播图制作 start
    // 获取元素
    var focusImg = document.querySelector('.focusImg');
    var ul = focusImg.querySelector('ul');
    var lis = ul.querySelectorAll('li');
    var ol = focusImg.querySelector('ol');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    // 防止连续点小圆圈或者箭头而导致bug
    var flag = true;
    // num控制动画 circle 控制小圆圈
    var num = 0;
    var circle = 0;
    //注册事件
    focusImg.addEventListener('mouseenter',function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
    })
    focusImg.addEventListener('mouseleave',function() {
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000)
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })
    // 根据图片数量生成小圆圈 ul有几个小li就生成几个小圆圈
    for(var i = 0; i < lis.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('data-index', i);
        ol.appendChild(li);
        // 添加圆圈的同时赋予点击事件
        li.addEventListener('click', function() {
            if(flag) {
                flag = false;
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }
                this.className = 'current';
                var index = this.getAttribute('data-index');
                // 把index的值赋予num 和 circle；
                num = index;
                circle = index;
                animate(ul, -index * focusImg.offsetWidth,function() {
                    flag = true;
                });
            }
        })
    }
    ol.children[0].className = 'current';

    // 点击右箭头一次滑动一张图片
    var firstImg = ul.children[0].cloneNode(true);
    ul.appendChild(firstImg);
    
    arrow_r.addEventListener('click',function() {
       if(flag) {
           flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0
            }
            num++;
            animate(ul, -num*focusImg.offsetWidth,function() {
                flag=true;
            });  
            circle++;
            if(circle == ol.children.length) {
                circle = 0 ;
            }  
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
       }
    })
    // 点击左箭头一次 图片动一张
    arrow_l.addEventListener('click',function() {
        if(flag) {
            flag = false;
             if (num == 0) {
                 ul.style.left = -(ul.children.length-1)*focusImg.offsetWidth+'px';
                 num = ul.children.length-1
             }
             num--;
             animate(ul, -num*focusImg.offsetWidth,function() {
                 flag=true;
             });  
             circle--;
             if(circle < 0 ) {
                 circle = ol.children.length - 1 ;
             }  
             for (var i = 0; i < ol.children.length; i++) {
                 ol.children[i].className = '';
             }
             ol.children[circle].className = 'current';
        }
     })

     // 自动播放图片
     var timer = setInterval(function() {
         arrow_r.click();
     }, 2000)
// banner轮播图制作 end

// 商品分类展开 start
     $(function() {
         $(".classify-nav li").hover(function() {
            $(".classify-con").show();
            console.log($(this).index());
            $(".classify-con").children().eq($(this).index()).fadeIn();
            $(".classify-con").children().eq($(this).index()).siblings().hide(); 
         }, function() {
            $(".classify-con").hide();
         })
         $(".classify-con").hover(function() {
            $(".classify-con").show();
         }, function() {
            $(".classify-con").hide();
         })
     })
// 商品分类展开 end

// 侧边栏电梯导航特效 start
    var lis = document.querySelector('.sliderbar').querySelector('ul').querySelectorAll('li');
    var elevator = document.querySelectorAll('.elevator')
    console.log(elevator);
    for(var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('data-index',i);
        lis[i].addEventListener('click', function() {
            for(var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = '#fff';
                lis[i].style.color = '#646464';
            }
            this.style.backgroundColor = '#C61122';
            this.style.color = '#fff';
            var index = this.getAttribute('data-index');
            console.log(index);
            console.log(elevator[index].offsetTop);
            upDownAnimate(window,(elevator[index].offsetTop)-100)

        })
    } 
// 侧边栏电梯导航特效 end

// 回到顶部操作 start
     var goBack = document.querySelector('.goBack');
     var fun = document.querySelector('.fun')
     document.addEventListener('scroll', function() {
         if(window.pageYOffset >= fun.offsetTop) {
            goBack.style.display = 'block';
         } else {
            goBack.style.display = 'none';
         }
     })
     goBack.addEventListener('click', function() {
        upDownAnimate(window, 0);
     })
})