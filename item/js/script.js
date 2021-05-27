! function(n) {
    "use strict";
    var a = {
        initialize: function() { this.event(), this.sideMenu(), this.smoothScroll() },
        event: function() {},
        sideMenuNavigation: function(a) {
            a.find(".menu-item-has-children > a").on("click", function(s) {
                var i = n(this);
                i.siblings(".sub-menu")[0] && (s.preventDefault(), i.parent().hasClass("in") ? 
                (i.parent().removeClass("in"), i.parent().find(".in").removeClass("in"), i.parent().find(".sub-menu").stop(!0).slideUp(300)) : 
                (i.closest(".in")[0] || (a.find(".menu-item-has-children.in .sub-menu").stop(!0).slideUp(300), a.find(".menu-item-has-children.in").removeClass("in")), i.parent().addClass("in"), i.parent().siblings(".in").find(".sub-menu").stop(!0).slideUp(300), i.parent().siblings(".in").removeClass("in"), i.siblings(".sub-menu").stop(!0).slideDown(300)))
            });
        },

        sideMenu: function() {
            var pageWrapper = $(".layout-row");
            var sideMenuArea = $(".site-aside");
            var menuCollasped = $("#menuCollasped");
            n(".site-aside")[0] && this.sideMenuNavigation(n(".site-aside")), $('.site-aside .menu-item-has-children').children('a').append('<span class="menu-icon"><i class="fas fa-arrow-right fa-xs"></i></span>');
            n(".site-aside")[0] && menuCollasped.on("click", function() {
                pageWrapper.toggleClass("menu-collasped-active");
                sideMenuArea.toggleClass("folded");
            });
            n(".site-aside")[0] && sideMenuArea.on("mouseenter", function() {
                pageWrapper.addClass("sidemenu-hover-active");
                pageWrapper.removeClass("sidemenu-hover-deactive");
            });
            n(".site-aside")[0] && sideMenuArea.on("mouseleave", function() {
                pageWrapper.removeClass("sidemenu-hover-active");
                pageWrapper.addClass("sidemenu-hover-deactive");
            });
        },

        //平滑滚动
        smoothScroll: function() {
            var href = "";
            var pos = 0;
            $("a.nav-link").click(function(e) {
              e.preventDefault();
              href = $(this).attr("href");
              pos = $(href).position().top - 100;
              $("html,body").animate({
                scrollTop: pos
              }, 500);
            });
        }
    };
    n(document).ready(function() { a.initialize() })
}(jQuery);