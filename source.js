var flkty = new Flickity(".rowTwo", {
	// options
	cellAlign: "left",
	contain: true
});

// SHOPPING CART COUNTER //
$(function() {
	var cartItems = 0;
	$(".rowTwo").on("click", "button", function(event) {
		event.preventDefault();
		cartItems++;
		$(".cart-items")
			.text(cartItems)
			.show();
	});
});
