$(document).ready(function () {
  //Скролл
  $(".navbar .navbar__container .navbar-wrap ul li a").click(function () {
    var element = $(this).attr("href");
    if ($(window).width() < 992) {
      var dist = $(element).offset().top - 61;
      $("html, body").animate({ scrollTop: dist }, 1000);
      return false;
    } else {
      var dist = $(element).offset().top;

      $("html, body").animate({ scrollTop: dist }, 1000);
      return false;
    }
  });

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() != 0) {
  //     $("#toTop").fadeIn();
  //   } else {
  //     $("#toTop").fadeOut();
  //   }
  // });
  // $("#toTop").click(function () {
  //   $("body,html").animate({ scrollTop: 0 }, 800);
  // });

  $(window).scroll(function () {
    $("section[id]").each(function () {
      var id = $(this).attr("id");
      if ($(this).offset().top - 100 < $(window).scrollTop()) {
        $(".navbar .navbar-wrap ul li a").removeClass("info-menu__link-active");
        $('.navbar .navbar-wrap ul li a[href="#' + id + '"]').addClass(
          "info-menu__link-active"
        );
      }
    });
  });

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

  $("#paper-1").click(function () {
    $("#paper-1").toggleClass("news-paper__top-img_red");
    return false;
  });
  $("#paper-2").click(function () {
    $("#paper-2").toggleClass("news-paper__top-img_red");
    return false;
  });
  $("#paper-3").click(function () {
    $("#paper-3").toggleClass("news-paper__top-img_red");
    return false;
  });
  $("#paper-4").click(function () {
    $("#paper-4").toggleClass("news-paper__top-img_red");
    return false;
  });
  $("#paper-5").click(function () {
    $("#paper-5").toggleClass("news-paper__top-img_red");
    return false;
  });
  $("#paper-6").click(function () {
    $("#paper-6").toggleClass("news-paper__top-img_red");
    return false;
  });

  const newspaperSwiper = new Swiper(".newspaper__slider", {
    // Optional parameters
    loop: true,

    pagination: {
      el: ".newspaper__pagination",
      clickable: true,
      bulletClass: "newspaper__pagination-bullet",
      bulletActiveClass: "newspaper__pagination-bullet-active",
    },
    keyboard: true,
  });
});
