// $('.hh').css('color', 'blue');

// $('li').addClass('myclass');

// $('#first').css('color', 'green')

// $('ul>li:first-child').next().next().addClass('myclass');

// var x = $('ul>li:first-child');
// x.addClass('myclass');

// $('ul').find('a').eq(0).css('color', 'red');


//prvo dugme na klik skini noc i dodaj dan
$('#btn1').click(function() {
	var kutija = $('.box');
	kutija.removeClass('night').addClass('day');
});

//drugo dugme na klik skini dan i dodaj noc
$('#btn3').click(function() {
	$('.box').removeClass('day').addClass('night');
});

$('#btn').click(function() {
	$('#kutija').slideToggle();
});

//drop down menu
var naslovi = $('.naslovi');
var podnaslovi = $('.podnaslovi');

naslovi.click(function() {
	podnaslovi.fadeOut(800);
	$(this).parent().find('.podnaslovi').fadeIn(800);
});


//vezbanje geters
var dugme = $('#btn2');
// dugme.on('click', function(){
// 	alert($('.naslovi').text());
// });

//geters
// dugme.on('click', function(){
// 	alert($('.naslovi').css('font-size'));
// });


//seters
// dugme.on('click', function(){
// 	$('.naslovi').css('font-size', '60px');
// });
// dugme.on('click', function(){
// 	$('.naslovi').text('Dje si');
// });
dugme.on('click', function(){
	$('.box').html('<h3>Milan</h3>');
});
