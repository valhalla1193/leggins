//Копировать элемент в корзину //
$(".content__container").on('click','#button__basket',function(){
    $(this).empty();
    $(this).append("В корзину<i class='fas fa-check'></i>");
    $(this).parent().parent().clone().prependTo('.basket__content').css("display","flex");
    var x=$(".basket__counter").html();
    var z=+x;
    var y=z+1;
    $(".basket__counter").empty();
    $(".basket__counter").html(y);
//научить их плюсовать друг друга//
var totalprice=$('.total__price').html();
var price=$(this).parent().prev().find('div:first').next().find('div:first').html();
var price=+price;
var totalprice=+totalprice+price;
// alert(totalprice2);
$('.total__price').empty();
$('.total__price').html(totalprice);
})
//передать это на сервер и принять там в переменные, оттуда послать на почту//
//удалять елемент из корзины//
$(".basket").on('click', '#delete-button',function(){
$(this).parent().parent().remove();
var x=$(".basket__counter").html();
    var z=+x;
    var y=z-1;
    $(".basket__counter").empty();
    $(".basket__counter").html(y);
    var attrx=$(this).parent().parent().attr('id');
    var attry='#'+attrx;
    $(attry).find('div:first').next().find('div:first').empty();
    $(attry).find('div:first').next().find('div:first').append("В корзину");
    //минусовать//
    var totalprice=$('.total__price').html();
    var price=$(this).parent().prev().find('div:first').next().find('div:first').html();
    var price=+price;
    var totalprice=+totalprice-price;
    $('.total__price').empty();
    $('.total__price').html(totalprice);
})


var product = {}; // my object
var products =  []; // my array
var clientdata={};
var clientdatas=[];
$('.inputsubmit').click(function(){
$('.basket__content').children().each(function (index, value) {
    var name = $(this).find('div:first').find('div:first').html();
    var price =$(this).find('div:first').find('div:first').next().find('div:first').html();
    var size=$(this).find('div:first').next().next().find ('input:checked').val();
    product = {
        _name: name, // being _color a property of `box`
         _price: price,
         _size: size
    }
    products.push(product);
})
$('#basket__form').find('input, textearea, select').each(function(){
    clientdata[this.name] = $(this).val();
})
clientdatas.push(clientdata);
console.log(products);
console.log(clientdatas);
var LSproducts = JSON.stringify(products);
var LCclientdata = JSON.stringify(clientdatas);
$.post("send2.php",{data:LSproducts,LCdata:LCclientdata})
.done(function(){alert('success');
})
})




// var  LCclientdata = JSON.stringify( clientdata);
// $.post("send2.php",{LCdata:LCclientdata})
// .done(function(){alert('success2');
// })