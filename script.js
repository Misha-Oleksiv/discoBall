
$(window).on('load', function () {
	setInterval(function () {

		let discoBall = $('.ball');
		let r, g, b;
		let height, width, top, left;
		r = Math.round(Math.random() * 255);
		g = Math.round(Math.random() * 255);
		b = Math.round(Math.random() * 255);

		top = Math.round(Math.random() * 500);
		left = Math.round(Math.random() * 1400);

		discoBall.animate({
			backgroundColor: `rgb(${r}, ${g}, ${b})`,
			borderColor: `rgb(${g}, ${b}, ${r})`,
			height: `${height}`,
			width: `${width}`,
			top: `${top}`,
			left: `${left}`,
		}, 700, 'linear');
	}, 500);

});
