
$.fn.alpha = function() {
    return this.append('<p>Alpha is Go!</p>');
};
define("jquery.alpha", function(){});

$('.contacts').html('<li>Joe Burton</li>');
define("getcontacts", function(){});

$(".load-data").on('click', function(){

	var context = this;

	console.log(context, window);

	require(["getcontacts"]);

});
define("utils", function(){});

$.fn.beta = function() {
    return this.append('<p>Beta is Go!</p>');
};

define("jquery.beta", function(){});

$.fn.omega = function() {
    return this.append('<p>Omega is Go!</p>');
};

define("jquery.omega", function(){});

require(["jquery", "jquery.alpha", "utils", "jquery.beta", "jquery.omega"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta().omega();
    });
});

define("main", function(){});
