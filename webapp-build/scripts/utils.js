$(".load-data").on('click', function(){

	var context = this;

	console.log(context, window);

	require(["getcontacts"]);

});