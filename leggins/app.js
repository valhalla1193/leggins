$(".close").click(function(){
    $(".fastbuy").css("display","none");
})
$("body").on('click','#button__fastbuy',function(){
    $(".fastbuy").css("display","block");
    var x=$(this).parent().prev().find('div:first').html();
    $('.fastbuy-product__name').html(x);
    var y=$(this).parent().prev().find('div:first').next().html();
    $('.fastbuy-product__price').html(y);
    $('.inputname').val(x);
    $('.inputprice').val(y);
});
$('.footer__button').click(function(){
    $('html, body').animate({
        scrollTop:0
    }, 4000);
});
$("#mainli").click(function (){
    $('html, body').animate({
        scrollTop: $(".content__container").offset().top-90
    }, 1000);
});
$("#deliveryli").click(function (){
    $('html, body').animate({
        scrollTop: $(".delivery").offset().top-90
    }, 1000);
});
$("#contactsli").click(function (){
    $('html, body').animate({
        scrollTop: $(".footer").offset().top-90
    }, 1000);
});

// Basket//
$(".basket__img").click(function(){
    $(".basket").show();
})
$(".basket__close").click(function(){
    $(".basket").css("display","none");
})