$(document).ready(function() {


var tkdeif = "IF: 6.977", tnnlsif = "IF: 10.451", tscif = "IF: 8.216", jasistif = "IF: 2.687", insif = "IF: 6.795", pierif = "IF: 1.898", jewaif = "IF: 1.373", geoinfif = "IF: 2.684", emseif = "IF: 2.522", wwwjif = "IF: 2.716";

var i;

var x = document.getElementsByClassName("tkdeif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = tkdeif
}

var x = document.getElementsByClassName("tnnlsif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = tnnlsif
}

var x = document.getElementsByClassName("tscif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = tscif
}


var x = document.getElementsByClassName("jasistif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = jasistif
}


var x = document.getElementsByClassName("insif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = insif
}


var x = document.getElementsByClassName("pierif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = pierif
}


var x = document.getElementsByClassName("jewaif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = jewaif
}


var x = document.getElementsByClassName("geoinfif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = geoinfif
}


var x = document.getElementsByClassName("emseif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = emseif
}

var x = document.getElementsByClassName("wwwjif");
for (i = 0; i < x.length; i++) {
 x[i].innerHTML = wwwjif
}







// document.getElementById("tkdeif").innerHTML = tkdeif;
// document.getElementById("tnnlsif").innerHTML = tnnlsif;
// document.getElementById("tscif").innerHTML = tscif;
// document.getElementById("jasistif").innerHTML = jasistif;
// document.getElementById("insif").innerHTML = insif;
// document.getElementById("pierif").innerHTML = pierif;
// document.getElementById("jewaif").innerHTML = jewaif;
// document.getElementById("geoinfif").innerHTML = geoinfif;
// document.getElementById("emseif").innerHTML = emseif;



  // Variables
  var $codeSnippets = $('.code-example-body'),
      $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      $popoverLink = $('[data-popover]'),
      navOffsetTop = $nav.offset().top,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      }

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
    $('a[href^="#"]').on('click', smoothScroll)
    buildSnippets();
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function() {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});