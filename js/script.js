var i = 0;
$(document).ready(function() {

	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		// var pageHeight = $(document).height;
		var body = document.body,
		html = document.documentElement;

		var pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
			html.clientHeight, html.scrollHeight, html.offsetHeight );
		

		var windowHeight = $(window).height();

		var height = pageHeight-windowHeight;

		var classSet = [
		'.a1',//0
		'.a2',
		'.a3',
		'.a4',
		'.a5',
		'.a6',
		];
		var imageSet = [
		'cityline.png',//0
		'train2.gif',
		'train.gif',
		'elephant.gif',
		'lol.png',
		'lol.png'
		];

		if (scroll >= height) {
			$(classSet[i]).append("<img src='gif/"+ imageSet[i] + "'/>");
			if (classSet[i]=='.a3') {$('.a2').remove();};
			if (classSet[i]=='.a4') {$('.a1').remove();
			$('.a4e').append("<img src='gif/elephant.gif'/>");};
			if (classSet[i]=='.a5') {$('.sun').remove();
			$('div:first').addClass("sun1");};
			if (classSet[i]=='.a6') {$('.a3').remove()};	
			i++;
			};


		});

});

