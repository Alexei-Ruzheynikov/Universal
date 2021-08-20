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

  // Модальные окна
  var modalButton = $("[data-toggle=modal]");
  var closemodalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closemodalButton.on("click", closeModal);
  var closemodalClick = $(".modal__overlay");
  closemodalClick.on("click", closeModal);
  $("[data-toggle=modal]").click(function () {
    $("body").addClass("lock");
    return false;
  });
  $(".modal__close").click(function () {
    $("body").toggleClass("lock");
    return false;
  });
  $(".modal__overlay").click(function () {
    $("body").toggleClass("lock");
    return false;
  });

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(".modal")
    .on("shown", function () {
      $("body").css("overflow", "hidden");
    })
    .on("hidden", function () {
      $("body").css("overflow", "auto");
    });

  // Обработка форм(маска и валидация)
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Введите имя",
          minlength: "Не менее 2 букв",
        },
        email: {
          required: "Введите email",
          email: "Формат: name@domain.com",
        },
        emailstwo: {
          required: "Введите email",
          email: "Формат: name@domain.com",
        },
        phone: {
          required: "Введите номер телефона",
          minlength: "Не менее 10 символов",
        },
      },
    });
  });

  $(".phone").mask("+7 (999) 999-99-99");
});
