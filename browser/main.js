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
