require(["jquery", "utils", "jquery.alpha", "jquery.beta", "jquery.omega"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta().omega();
    });
});
