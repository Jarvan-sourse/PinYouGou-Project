window.addEventListener('load', function() {
    // 我的品优购下拉菜单
    $(function() {
        $(".myPYG-list").mouseenter(function() {
            $(this).css({
                borderLeft : "1px solid #ccc",
                borderRight : "1px solid #ccc",
                backgroundColor : "#fff"
            }).children(".myPYG").stop().slideDown();
        }) 
        $(".myPYG-list").mouseleave(function() {
            $(this).css({
                border: "none",
                backgroundColor : "#F1F1F1"
            }).children(".myPYG").stop().slideUp();
        }) 
        $(".buy-list").hover(function() {
            $(this).css({
                borderLeft : "1px solid #ccc",
                borderRight : "1px solid #ccc",
                backgroundColor : "#fff"
            }).children(".buy").stop().slideDown();
        }, function() {
            $(this).css({
                border: "none",
                backgroundColor : "#F1F1F1"
            }).children(".buy").stop().slideUp();
        })
    })
})