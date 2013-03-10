$(function () {
    (function( $ ) {
        $.fn.fakeIt = function(_out,_in,callback) {
            if(_out === _in){
                return false;
            }
            return this.click(function() {
                $(_out).fadeOut('slow',function() {
                    if (callback)
                        callback();
                    $(_in).hide().fadeIn('slow');
                });
                return false;
            });
        }
    })( jQuery );

    $("#link-sign-up").fakeIt(".page-1",".page-2", function() {
       $("#link-sign-up").hide();
    });
    $("#link-home").fakeIt(".page-2",".page-1", function() {
       $("#link-sign-up").show();
    });
});
