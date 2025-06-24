jQuery(function ($) {
  var my_nav = $(".navbar-sticky");

  if (my_nav.length === 0) {
    console.warn("No se encontró .navbar-sticky");
    return;
  }

  var sticky_navigation_offset_top = my_nav.offset().top;

  var sticky_navigation = function () {
    var scroll_top = $(window).scrollTop();

    if (scroll_top > sticky_navigation_offset_top) {
      my_nav.addClass("stick");
    } else {
      my_nav.removeClass("stick");
    }
  };

  var initio_parallax_animation = function () {
    $(".parallax").each(function () {
      var speed = $(this).attr("parallax-speed");
      if (speed) {
        var background_pos = "-" + window.pageYOffset / speed + "px";
        $(this).css("background-position", "center " + background_pos);
      }
    });
  };

  // Ejecutar funciones
  sticky_navigation();
  $(window).on("scroll", function () {
    sticky_navigation();
    initio_parallax_animation();
  });
});
