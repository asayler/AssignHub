$(function () {
    (function( $ ) {
        $.fn.fakeIt = function(_out,_in,callback) {
            return this.click(function() {
                $(_out).fadeOut('slow',function() {
                    $(_in).fadeIn();
                    callback();
                });
                return false;
            });
        }
    })( jQuery );

    $("#link-prof-login").fakeIt(".page-1",".page-2");
    $("#btn-prof-login").fakeIt(".page-2",".page-3", function() {
        $(".links-prof").hide();
        $(".login-as").text("Logged in as Professor X");
        $(".logout").show();
    });
    $("#link-add-assignment").fakeIt(".page-3",".page-4");
    $("#link-search").fakeIt(".page-4",".page-5");
    $("#btn-search").fakeIt(".page-5",".page-6");
    $("#link-fork").fakeIt(".page-6",".page-7");
    $("#link-add-it").fakeIt(".page-7",".page-8");
    $("#link-graph").fakeIt(".page-8",".page-9");
    $("#link-back").fakeIt(".page-9",".page-10");
    $("#link-deployed").fakeIt(".page-10",".page-11");
    $("#link-prof-logout").fakeIt(".page-11",".page-12", function() {
        $(".links-student").show();
        $(".login-as").text("");
        $(".logout").hide();
    });
    $("#link-student-login").fakeIt(".page-12",".page-13");
    $("#btn-student-login").fakeIt(".page-13",".page-14", function() {
        $(".links-student").hide();
        $(".login-as").text("Logged in as Cyclops");
        $(".logout").show();
    });
});
