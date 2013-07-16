
$('.contacts').html('<li>Joe Burton</li>');

define("getcontacts", function(){});

define('shirt',{
    color: "black",
    size : "large"
});
define('logger',["shirt"], function (shirt) {
    return {
        logTheShirt: function () {
            console.log("color: " + shirt.color + ", size: " + shirt.size);
        }
    };
});
$(".load-data").on('click', function(){

	require(['getcontacts'], function () {
    	console.log('get the get contacts module');
	});

	require(["shirt", "logger"],function (shirt, logger) {    
	    alert("Shirt color is: " + shirt.color + " Shirt size is: " + shirt.size);
	    logger.logTheShirt();
	});

});
define("utils", function(){});

$.fn.alpha = function() {
    return this.append('<p>Alpha is Go!</p>');
};
define("jquery.alpha", function(){});

$.fn.beta = function() {
    return this.append('<p>Beta is Go!</p>');
};

define("jquery.beta", function(){});

$.fn.omega = function() {
    return this.append('<p>Omega is Go!</p>');
};

define("jquery.omega", function(){});

require(["jquery", "utils", "jquery.alpha", "jquery.beta", "jquery.omega"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta().omega();
    });
});

define("main", function(){});
