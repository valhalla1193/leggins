var legginsphotosA=['photosA1.jpg','photosA2.jpg'];
var a=0;
// первый слайдер-блок
var legginsphotosA=['photosA1.jpg','photosA2.jpg'];
var a=0;
// $('#A').click(function()
$('body').on('click','#A', function(){
    if(a<legginsphotosA.length){
        a++;
    var legginsphotoA=legginsphotosA[a];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoA+">");
}
if(a>=legginsphotosA.length){
    a=0;
    var legginsphotoA=legginsphotosA[a];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoA+">");
}
})
$('body').on('click','#A-', function(){
if(a<=0){
    a=legginsphotosA.length-1;
    var legginsphotoA=legginsphotosA[a];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoA+">");
}
else{
    a--;
    var legginsphotoA=legginsphotosA[a];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoA+">");
}
})
// Второй слайдр-блок
var legginsphotosB=['photosB1.jpg','photosB2.jpg'];
var b=0;
$('body').on('click','#B', function(){
    if(b<legginsphotosB.length){
        b++;
    var legginsphotoB=legginsphotosB[b];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoB+">");
}
if(b>=legginsphotosB.length){
    b=0;
    var legginsphotoB=legginsphotosB[b];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoB+">");
}
})
$('body').on('click','#B-', function(){
if(b<=0){
    b=legginsphotosB.length-1;
    var legginsphotoB=legginsphotosB[b];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoB+">");
}
else{
    b--;
    var legginsphotoB=legginsphotosB[b];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoB+">");
}
})
// Третий слайдр-блок
var legginsphotosC=['photosC1.jpg','photosC2.jpg'];
var c=0;
$('body').on('click','#C', function(){
    if(c<legginsphotosC.length){
        c++;
    var legginsphotoC=legginsphotosC[c];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoC+">");
}
if(c>=legginsphotosC.length){
    c=0;
    var legginsphotoC=legginsphotosC[c];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoC+">");
}
})
$('body').on('click','#C-', function(){
if(c<=0){
    c=legginsphotosC.length-1;
    var legginsphotoC=legginsphotosC[c];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoC+">");
}
else{
    c--;
    var legginsphotoC=legginsphotosC[c];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoC+">");
}
})

// Четвертый слайдр-блок
var legginsphotosD=['photosD1.jpg','photosD2.jpg','photosD3.jpg'];
var d=0;
$('body').on('click','#D', function(){
    if(d<legginsphotosD.length){
        d++;
    var legginsphotoD=legginsphotosD[d];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoD+">");
}
if(d>=legginsphotosD.length){
    d=0;
    var legginsphotoD=legginsphotosD[d];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoD+">");
}
})
$('body').on('click','#D-', function(){
if(d<=0){
    d=legginsphotosD.length-1;
    var legginsphotoD=legginsphotosD[d];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoD+">");
}
else{
    d--;
    var legginsphotoD=legginsphotosD[d];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoD+">");
}
})

//Пятый слайдр-блок
var legginsphotosE=['photosE1.jpg','photosE2.jpg','photosE3.jpg'];
var e=0;
$('body').on('click','#E', function(){
    if(e<legginsphotosE.length){
        e++;
    var legginsphotoE=legginsphotosE[e];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoE+">");
}
if(e>=legginsphotosE.length){
    e=0;
    var legginsphotoE=legginsphotosE[e];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoE+">");
}
})
$('body').on('click','#E-', function(){
if(e<=0){
    e=legginsphotosE.length-1;
    var legginsphotoE=legginsphotosE[e];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoE+">");
}
else{
    e--;
    var legginsphotoE=legginsphotosE[e];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoE+">");
}
})


//Шестой слайдр-блок
var legginsphotosF=['photosF1.jpg','photosF2.jpg','photosF3.jpg'];
var f=0;
$('body').on('click','#F', function(){
    if(f<legginsphotosF.length){
        f++;
    var legginsphotoF=legginsphotosF[f];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoF+">");
}
if(f>=legginsphotosF.length){
    f=0;
    var legginsphotoF=legginsphotosF[f];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoF+">");
}
})
$('body').on('click','#F-', function(){
if(f<=0){
    f=legginsphotosF.length-1;
    var legginsphotoF=legginsphotosF[f];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoF+">");
}
else{
    f--;
    var legginsphotoF=legginsphotosF[f];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoF+">");
}
})

//Седьмой слайдр-блок
var legginsphotosG=['photosG1.jpg'];
var g=0;
$('body').on('click','#G', function(){
    if(g<legginsphotosG.length){
        g++;
    var legginsphotoG=legginsphotosG[g];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoG+">");
}
if(g>=legginsphotosG.length){
    g=0;
    var legginsphotoG=legginsphotosG[g];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoG+">");
}
})
$('body').on('click','#G-', function(){
if(g<=0){
    g=legginsphotosG.length-1;
    var legginsphotoG=legginsphotosG[g];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoG+">");
}
else{
    g--;
    var legginsphotoG=legginsphotosG[g];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoG+">");
}
})

//Восьмой слайдр-блок
var legginsphotosH=['photosH1.jpg','photosH2.jpg','photosH3.jpg','photosH4.jpg'];
var h=0;
$('body').on('click','#H', function(){
    if(h<legginsphotosH.length){
        h++;
    var legginsphotoH=legginsphotosH[h];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoH+">");
}
if(h>=legginsphotosH.length){
    h=0;
    var legginsphotoH=legginsphotosH[g];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoH+">");
}
})
$('body').on('click','#H-', function(){
if(h<=0){
    h=legginsphotosH.length-1;
    var legginsphotoH=legginsphotosH[h];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoH+">");
}
else{
    h--;
    var legginsphotoH=legginsphotosH[h];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoH+">");
}
})

//Девятый слайдр-блок
var legginsphotosI=['photosI1.jpg','photosI2.jpg'];
var i=0;
$('body').on('click','#I', function(){
    if(i<legginsphotosI.length){
        i++;
    var legginsphotoI=legginsphotosI[i];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoI+">");
}
if(i>=legginsphotosI.length){
    i=0;
    var legginsphotoI=legginsphotosI[i];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoI+">");
}
})
$('body').on('click','#I-', function(){
if(i<=0){
    i=legginsphotosI.length-1;
    var legginsphotoI=legginsphotosI[i];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoI+">");
}
else{
    i--;
    var legginsphotoI=legginsphotosI[i];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoI+">");
}
})
//Десятый слайдр-блок
var legginsphotosJ=['photosJ1.jpg','photosJ2.jpg'];
var j=0;
$('body').on('click','#J', function(){
    if(j<legginsphotosJ.length){
        j++;
    var legginsphotoJ=legginsphotosJ[j];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoJ+">");
}
if(j>=legginsphotosI.length){
    j=0;
    var legginsphotoJ=legginsphotosJ[j];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoJ+">");
}
})
$('body').on('click','#J-', function(){
if(j<=0){
    j=legginsphotosJ.length-1;
    var legginsphotoJ=legginsphotosJ[j];
$(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoJ+">");
}
else{
    j--;
    var legginsphotoJ=legginsphotosJ[j];
    $(this).parent().prev().empty();
$(this).parent().prev().html("<img src="+legginsphotoJ+">");
}
})