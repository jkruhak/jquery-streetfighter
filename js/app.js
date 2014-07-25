$(document).ready(function() {
	$('body').on('keydown', function(event) { 
		if (event.which == '88') {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();	
		} 
	})

	.on('keyup', function(event) {
		if (event.which == '88') {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
	
	$('.ryu').on('mouseenter', function() {  
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	})

	.on('mouseleave', function() { 
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})

	.on('mousedown', function() {
		//play hadouken sound
		playHadouken();
		//show hadouken and animate it to the right of the screen
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		//animate hadouken to the right of the screen
		.animate(
		  {'left': '300px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '-212px');
		  }
		);
	})

	.on('mouseup', function() {
		//ryu goes back to his ready position
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();

		$('.ryu-ready').show();
	});

	function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

})