$(document).ready(function () {
  $(".navbar .navbar__container .navbar-wrap ul li a").click(function () {
    var element = $(this).attr("href");
    var dist = $(element).offset().top - 60;
    $("html, body").animate({ scrollTop: dist }, 1000);
    return false;
  });

  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() != 0) {
  //       $("#toTop").fadeIn();
  //     } else {
  //       $("#toTop").fadeOut();
  //     }
  //   });
  //   $("#toTop").click(function () {
  //     $("body,html").animate({ scrollTop: 0 }, 800);
  //   });

  //   $(window).scroll(function () {
  //     $("section[id]").each(function () {
  //       var id = $(this).attr("id");
  //       if ($(this).offset().top - 121 < $(window).scrollTop()) {
  //         $(".navbar .navbar__container .navbar-wrap ul li a").removeClass(
  //           "active"
  //         );
  //         $(
  //           '.header .navbar__container .navbar-wrap ul li a[href="#' + id + '"]'
  //         ).addClass("active");
  //       }
  //     });
  //   });

  var menuButton = $(".navbar__button");
  menuButton.on("click", function () {
    $(".info-menu_mobile").toggleClass("info-menu_mobile-visible");
  });

  var menuButtonLink = $(".info-menu__link");
  menuButtonLink.on("click", function () {
    $(".info-menu_mobile").toggleClass("info-menu_mobile-visible");
  });

  var tabsItem = $(".articles-choice__info");
  var contentItem = $(".articles__paper");
  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("articles-choice__info_active");
    contentItem.removeClass("articles__paper_active");
    $(activeContent).addClass("articles__paper_active");
    $(this).addClass("articles-choice__info_active");
  });
});
