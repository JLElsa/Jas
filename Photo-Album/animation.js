// SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  clearInterval(timer_slide);
  timer_slide = setInterval(plusSlides, 3500, 1);
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  clearInterval(timer_slide);
  timer_slide = setInterval(plusSlides, 3500, 1);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var timer_slide = setInterval(plusSlides, 3500, 1);

// FLY-UP PHOTO ANIMATION

var timer_scroll = 0;

function recheck() {
  var window_top = $(this).scrollTop();
  if (timer_scroll) {
    clearTimeout(timer_scroll);
  }

  $(".fly").each(function () {
    var block = $(this);
    var block_top = block.offset().top;
    if (screen.height < 720) {
      if (block_top - 1000 < window_top + screen.height) {
        timer_scroll = setTimeout(function () {
          block.addClass("show-block");
        }, 100);
      }
    } else {
      if (block_top < window_top + screen.height - 250) {
        timer_scroll = setTimeout(function () {
          block.addClass("show-block");
        }, 100);
      }
    }
    // Fly-out
    // else {
    // 	timer_scroll = setTimeout(function () {
    // 		block.removeClass('show-block');
    // 	}, 100);
    // }
  });
}

$(function () {
  $(window).scroll(function () {
    recheck();
  });

  $(window).resize(function () {
    recheck();
  });

  recheck();
});

// CLICKED PHOTO ANIMATION

$("li p, li img").click(function (e) {
  var target = $(e.target);
  if (target.is("li p")) {
    var element = $(target.closest("a")).find("img");
    showClickedPhoto(element);
  } else {
    showClickedPhoto(target);
  }
});

// $('li img').click(function () {
// });

function showClickedPhoto(element) {
  var img = $(element).attr("class");
  var clone_img = $("." + img)
    .clone()
    .removeAttr("style");
  var scroll_top = $(document).scrollTop();
  var top = scroll_top + "px";
  var margin_top = scroll_top - 100 + "px";

  var n_div = $("<div>", {
    class: "popup-wrap",
  }).css({
    position: "absolute",
    display: "block",
    top: margin_top,
    width: "100%",
    height: "100%",
    "margin-left": "auto",
    "margin-right": "auto",
    "background-color": "rgba(0, 0, 0, 0.8)",
    opacity: 0,
  });

  $(clone_img).css({
    display: "block",
    position: "relative",
    top: 0,
    "margin-left": "auto",
    "margin-right": "auto",
    "max-width": "100%",
    "max-height": "80%",
    opacity: 0,
  });

  n_div.appendTo("body");
  clone_img.appendTo(n_div);

  $(n_div).animate(
    {
      opacity: 1,
      top: top,
    },
    1000
  );
  var navbar_height = $(".sticky-top").height();
  var margin_height = $(clone_img).height() / 2;
  $(clone_img).animate(
    {
      position: "fixed",
      opacity: 1,
      top: "50%",
      "margin-top": -margin_height + navbar_height / 2 + "px",
    },
    1000
  );
  $("body").css({
    overflow: "hidden",
  });
}

$(window).click(function (e) {
  // child - image
  $(".popup-wrap > img").click(function (e) {
    // click on child should not activate parent clicking
    e.stopPropagation();
  });
  // parent - image wrapper
  $(".popup-wrap").click(function (e) {
    // click parent to delete pop-up image
    $(".popup-wrap, .popup-wrap > img").css({
      filter: "blur(20px)",
    });
    $(".popup-wrap > img").animate(
      {
        opacity: 0,
        top: 0,
      },
      1000
    );

    $(".popup-wrap").animate(
      {
        opacity: 0,
        top: `${$(document).scrollTop() - 100}px`,
      },
      1000,
      function () {
        $(this).remove();
      }
    );

    $("body").css({
      "overflow-y": "scroll",
    });
  });
});

// {
// 	left: $('li img').parent().width() / 2 - $('li img').width() / 2,
// 	top: '100px'
// }
