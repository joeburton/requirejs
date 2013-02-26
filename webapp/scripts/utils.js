$(".load-data").on('click', function(){

	require(['getcontacts'], function () {
    	console.log('get the get contacts module');
	});

	require(["shirt", "logger"],function (shirt, logger) {    
	    alert("Shirt color is: " + shirt.color + " Shirt size is: " + shirt.size);
	    logger.logTheShirt();
	});

});