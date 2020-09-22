function animate(obj, target, callback) {
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0? Math.ceil(step) : Math.floor(step);
        if (target == obj.offsetLeft) {
            clearInterval(obj.timer);
            callback&&callback();
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    },15)
}