
var num = 0;
$(document).ready(function(){
	
	$('body').on('click', '#generate', function(){
		appendButtonsToDom();
		num++;
		$('#counter').text(num);
	});
	$('body').on('click', '#delete', function(){
		$(this).parent().remove();
		num--;
		$('#counter').text(num);
	});
	$('body').on('click', '#change', function(){
		console.log($(this).parent());
		$(this).parent().toggleClass('clicked');
		//$('body').toggleClass('clicked');
	});
});	

function appendButtonsToDom(){
	$('body').append('<div class="buttoncontainer"></div>');
	var $el = $('body').children().last();
	$el.append('<button id="delete">delete</button>');
	$el.append('<button id="change">change</button>');
}