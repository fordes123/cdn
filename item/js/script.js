! function(n) {
    "use strict";
    var a = {
        initialize: function() { this.event(), this.toggler(), this.sideMenu(), this.siteSearch() },
        event: function() {},
        toggler: function() {
            n(".menu-toggler").each(function() {
                var a = n(this);
                a.on("click", function() { a.toggleClass("active") }), n(window).resize(function() { n(".menu-toggler").removeClass("active") })
            })
        },
        mobileMenu: function() { n(".menu-toggler").on("click", function() { n(".site-aside").toggleClass("in"), n("body").toggleClass("modal-open") }), n(".site-aside .aside-overlay").on("click", function() { n(".site-aside").removeClass("in"), n("body").removeClass("modal-open"), n(".menu-toggler").removeClass("active") }), n(window).resize(function() { n(".site-aside").removeClass("in"), n("body").removeClass("modal-open") }) },
        siteSearch: function() { n(".search-toggler").on("click", function() { n(".search-form-wrapper").toggleClass("in"), n("body").toggleClass("modal-open") }), n(".search-form-wrapper .search-close").on("click", function() { n(".search-form-wrapper").removeClass("in"), n("body").removeClass("modal-open") }) },
        sideMenuNavigation: function(a) {
            a.find(".menu-item-has-children > a").on("click", function(s) {
                var i = n(this);
                i.siblings(".sub-menu")[0] && (s.preventDefault(), i.parent().hasClass("in") ? (i.parent().removeClass("in"), i.parent().find(".in").removeClass("in"), i.parent().find(".sub-menu").stop(!0).slideUp(300)) : (i.closest(".in")[0] || (a.find(".menu-item-has-children.in .sub-menu").stop(!0).slideUp(300), a.find(".menu-item-has-children.in").removeClass("in")), i.parent().addClass("in"), i.parent().siblings(".in").find(".sub-menu").stop(!0).slideUp(300), i.parent().siblings(".in").removeClass("in"), i.siblings(".sub-menu").stop(!0).slideDown(300)))
            });
        },
        sideMenu: function() {
            var pageWrapper = $(".layout-row");
            var sideMenuArea = $(".site-aside");
            var sideMenuItem = $(".site-aside .nav-item");
            var menuCollasped = $("#menuCollasped");
            n(".site-aside")[0] && this.sideMenuNavigation(n(".site-aside")), $('.site-aside .menu-item-has-children').children('a').append('<span class="menu-icon"><i class="iconfont icon-forward-"></i></span>');
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
        }
    };
    n(document).ready(function() { a.initialize() }), n(window).on("load", function() { a.mobileMenu() })
}(jQuery);