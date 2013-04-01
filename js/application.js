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
    $("#link-confirm").click(function() {
        $(".notice-bar span").text("Assignment deployed!");
        $("#modal-deploy").modal("hide");
        $("#deploy-link").remove();
        $("#graph-link").before($("#update-link").clone()).before(" | ");
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
        $(".login-as").text("Logged in as Cyclops");
        $(".notice-bar span").text("New Assignment Posted for CS101!");
        $(".logout").show();
    });
    
    // Signup stuff
    $("#link-sign-up").fakeIt(".page-1",".page-2", function() {
       $("#link-sign-up").hide();
    });
    $("#link-sign-up-1").fakeIt(".page-1",".page-2", function() {
       $("#link-sign-up").hide();
    });
    $("#link-sign-up-2").fakeIt(".page-1",".page-2", function() {
       $("#link-sign-up").hide();
    });
    $("#link-sign-up-3").fakeIt(".page-1",".page-2", function() {
       $("#link-sign-up").hide();
    });
    $("#link-sign-up-4").fakeIt(".page-1",".page-2", function() {
       $("#link-sign-up").hide();
    });
    $("#link-home").fakeIt(".page-2",".page-1", function() {
       $("#link-sign-up").show();
    });
    $("#link-back").fakeIt(".page-2",".page-1", function() {
       $("#link-sign-up").show();
    });

    $("#link-submit-email").fakeIt(".page-2",".page-1", function() {
       $("#link-sign-up").show();
       $(".notice-bar span").text("Email Successfully Submitted!");
    });
});
