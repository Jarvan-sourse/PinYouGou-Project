function upDownAnimate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.pageYOffset)/10;
        step = step>0? Math.ceil(step): Math.floor(step);
        if(target == obj.pageYOffset) {
            clearInterval(obj.timer);
            callback||callback();
        } else {
            obj.scroll(0, obj.pageYOffset + step);
        }
    },15)
}

