/* ============================================================
   Liliana Fuentes — site interactions
============================================================ */
(function () {
  'use strict';

  /* --- Mobile nav --- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  function closeMenu() {
    links.classList.remove('open');
    toggle.classList.remove('active');
  }
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* --- Nav shadow on scroll --- */
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* --- Reveal on scroll --- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- Current year --- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* --- Contact form (graceful: Formspree if configured, mailto fallback) --- */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      var usingFormspree = action.indexOf('formspree.io') > -1 && action.indexOf('yourFormID') === -1;

      if (usingFormspree) {
        // Let it post normally to Formspree, but enhance with fetch for inline success.
        e.preventDefault();
        var data = new FormData(form);
        fetch(action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function (r) {
            if (r.ok) {
              form.reset();
              note.textContent = "Thank you! I'll be in touch within one business day.";
              note.classList.add('success');
            } else {
              fallbackMailto();
            }
          })
          .catch(fallbackMailto);
        return;
      }
      // No backend configured yet → open the visitor's email client pre-filled.
      e.preventDefault();
      fallbackMailto();
    });
  }

  function fallbackMailto() {
    var get = function (id) { var el = document.getElementById(id); return el ? el.value : ''; };
    var subject = encodeURIComponent('Website inquiry — ' + (get('name') || 'New Lead'));
    var body = encodeURIComponent(
      'Name: ' + get('name') + '\n' +
      'Phone: ' + get('phone') + '\n' +
      'Email: ' + get('email') + '\n' +
      'Looking to: ' + get('intent') + '\n\n' +
      'Message:\n' + get('message')
    );
    window.location.href = 'mailto:liliana@lilianafuentes.com?subject=' + subject + '&body=' + body;
    if (note) {
      note.textContent = 'Opening your email app… or call/text 623-256-1563.';
      note.classList.add('success');
    }
  }
})();
