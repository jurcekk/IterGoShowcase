document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.getElementById('nav-list');
  const sections = document.querySelectorAll(
    '.features, .screenshots, .download, .contact, .how-to-drive'
  );

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

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
});
