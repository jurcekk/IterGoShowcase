document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent successfully!');
    window.open(
      'mailto:jurcekdavid@gmail.com? subject=Message%20from%20' +
        document.getElementById('name').value +
        '&body=' +
        document.getElementById('text').value
    );
  });
