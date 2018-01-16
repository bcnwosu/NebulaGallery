var slides = document.getElementsByClassName('slides');

setInterval(function(slides) {
	var active = document.getElementById('active');
	active.id = '';
	
	for(var i = 0; i < slides.length; i++) {
		if(slides[i] == active && i == (slides.length - 1)) {
			slides[0].id = 'active';
		} else if(slides[i] == active) {
			slides[i + 1].id = 'active';
		}
	}
}, 2000, slides);