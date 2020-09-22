window.addEventListener('load',function() {
    $(function() {
        // 全选全不选 利用input的属性checked实现，固有属性用prop  并添加背景颜色
        $(".checkall").change(function() {
            //console.log($(this).prop("checked"));
            $(".j-checkbox, .checkall").prop("checked",$(this).prop("checked"));
            if ($(this).prop("checked")) {
                $(".cart-item").addClass("check-cart-item");
            } else {
                $(".cart-item").removeClass("check-cart-item");
            }
        })
        // 通过小复选框控制全选按钮 并添加背景颜色
        $(".j-checkbox").change(function() {
            // console.log($(".j-checkbox:checked").length); 小复选框选中的个数
            if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
                $(".checkall").prop("checked",true);
            } else {
                $(".checkall").prop("checked",false);
            }
            if ($(this).prop("checked")) {
                $(this).parents(".cart-item").addClass("check-cart-item");
            } else {
                $(this).parents(".cart-item").removeClass("check-cart-item");
            }
        })
        // 增减商品数量
        $(".increment").click(function() {
            var n = $(this).siblings(".itxt").val();
            n++;
            $(this).siblings(".itxt").val(n);
            // 修改商品小计
            var price = $(this).parents(".p-num").siblings(".p-price").html();
            price = price.substr(1); // 截取字符串 把￥符号去掉
            var sum_p = (price * n).toFixed(2);
            $(this).parents(".p-num").siblings(".p-sum").html("￥"+ sum_p);
            getSum();
        })
        $(".decrement").click(function() {
            var n = $(this).siblings(".itxt").val();
            if (n == 1) {
                return flase; // 有return之后的的代码不再执行 
            } else {
                n--;
                $(this).siblings(".itxt").val(n);
                var price = $(this).parents(".p-num").siblings(".p-price").html();
                price = price.substr(1); // 截取字符串 把￥符号去掉
                var sum_p = (price * n).toFixed(2);
                $(this).parents(".p-num").siblings(".p-sum").html("￥"+ sum_p);
            }
            getSum();
        })
        // bug : 用户直接在itxt中输入数字时 总价格不变    修复
        $(".itxt").change(function() {
            var n = $(this).val();
            var price = $(this).parents(".p-num").siblings(".p-price").html();
            price = price.substr(1);
            var sum_p = (price * n).toFixed(2);
            $(this).parents(".p-num").siblings(".p-sum").html("￥"+ sum_p);
            getSum();
        })
        getSum();
        // 计算总计 和 总额
        function getSum() {
            var count = 0; // 件数
            var money = 0; // 总额
            // 遍历itxt中的值 并将它们相加 
            $(".itxt").each(function(index, domEle) {
                count += parseInt($(domEle).val());
            })
            $(".amount-sum em").text(count);
            $(".p-sum").each(function(index, domEle) {
                // 先截取字符组串，再转换为数值型
                money += parseFloat($(domEle).text().substr(1));
            })
            $(".price-sum em").text("￥"+ money.toFixed(2));
        }

        // 删除元素 删除之后重新算总额
        $(".p-action a").click(function() {
            $(this).parents(".cart-item").remove();
            getSum();
        })
        // 删除被选中的商品 删除之后重新算总额
        $(".remove-batch").click(function() {
            $(".j-checkbox:checked").parents(".cart-item").remove();
            getSum();
        })
        // 清理购物车 删除之后重新算总额
            $(".clear-all").click(function() {
                $(".cart-item").remove();
                getSum();
            })
    })
})