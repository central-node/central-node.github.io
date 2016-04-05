(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function() {
  $('#contactForm').submit(function(event) {
    console.log('entra');
    var name  = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    $.post('https://webhooks.gitter.im/e/657e1a5ffb783f166afa',
      {message : '##' + name + '\n#### ' + email + '\n\n' + message})
    .always(function(data) {
      $('#success').html("<div class=''>");
      $('#success')
        .append("<strong>El mensaje ha sido enviado correctamente</strong>");
      $('#success')
        .append('</div>');

      //clear all fields
      $('#contactForm').trigger("reset");
    });
    event.preventDefault();
  })
});

},{}]},{},[1]);
