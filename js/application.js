$(function () {
    (function( $ ) {
        $.fn.fakeIt = function(_out,_in,callback) {
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
    $(".hidden-assignment").hide();

    $("#link-prof-login").fakeIt(".page-1",".page-2");
    $("#btn-prof-login").fakeIt(".page-2",".page-3", function() {
        $(".links-prof").hide();
        $(".login-as").text("Logged in as Professor X");
        $(".logout").show();
    });
    $("#link-add-assignment").fakeIt(".page-3",".page-4");
    $("#link-search").fakeIt(".page-4",".page-5");
    $("#btn-search").fakeIt(".page-5",".page-6");
    $("#link-fork").fakeIt(".page-6",".page-3", function() {
        $(".notice-bar span").text("Assignment Successfully Added!");
        $(".hidden-assignment").show();
        $(".cs-classes").prepend($(".hidden-assignment"));
    });
    $("#link-graph").fakeIt(".page-3",".page-9");
    $("#link-back").fakeIt(".page-9",".page-3", function() {
        $(".notice-bar span").text("");
    });
    $("#link-confirm").click(function() {
        $(".notice-bar span").text("Assignment deployed!");
        $("#modal-deploy").modal("hide");
        $(".modal-backdrop").remove();
        return false;
    });

    $("#link-prof-logout").fakeIt(".page-3",".page-12", function() {
        $(".links-student").show();
        $(".login-as").text("");
        $(".logout").hide();
    });
    $("#link-student-login").fakeIt(".page-12",".page-13");
    $("#btn-student-login").fakeIt(".page-13",".page-14", function() {
        $(".links-student").hide();
        $(".notice-bar span").hide();
        $(".login-as").text("Logged in as Cyclops");
        $(".notice-bar span").text("New Assignment Posted for CU101");
        $(".logout").show();
    });
});
