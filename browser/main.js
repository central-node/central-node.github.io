$(function() {
  var successMessage = 'El mensaje ha sido enviado correctamente';

  if (/eng/.test(document.location.pathname))
      successMessage = 'The message has been successfully sent';

  $('#contactForm').submit(function(event) {
    var name  = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    $.post('https://webhooks.gitter.im/e/657e1a5ffb783f166afa',
      {message : '##' + name + '\n#### ' + email + '\n\n' + message})
    .always(function(data) {
      $('#success').html("<div class=''>");
      $('#success')
        .append('<strong>' + successMessage + '</strong>');
      $('#success')
        .append('</div>');

      //clear all fields
      $('#contactForm').trigger("reset");
    });
    event.preventDefault();
  })
});
