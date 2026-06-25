/* ============================================================
   Direct Buyers Landing Page — interactions
============================================================ */
(function () {
  'use strict';

  /* --- Reveal on scroll --- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- Year --- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* --- Hide sticky CTA when the form is on screen --- */
  var sticky = document.querySelector('.lp-sticky');
  var form = document.getElementById('form');
  if (sticky && form && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { sticky.style.transform = e.isIntersecting ? 'translateY(120%)' : 'none'; });
    }, { threshold: 0.2 }).observe(form);
    sticky.style.transition = 'transform .4s cubic-bezier(.16,1,.3,1)';
  }

  /* --- Form: Formspree if configured, else mailto fallback --- */
  var formEl = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (formEl) {
    formEl.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = formEl.getAttribute('action') || '';
      var configured = action.indexOf('formspree.io') > -1 && action.indexOf('yourFormID') === -1;
      if (configured) {
        var data = new FormData(formEl);
        fetch(action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function (r) {
            if (r.ok) {
              formEl.reset();
              note.textContent = "Thank you! Liliana will call or text you within one business day.";
              note.classList.add('success');
            } else { fallbackMailto(); }
          })
          .catch(fallbackMailto);
      } else {
        fallbackMailto();
      }
    });
  }

  function val(id) { var el = document.getElementById(id); return el ? el.value : ''; }
  function lang() { var c = document.querySelector('input[name="language"]:checked'); return c ? c.value : ''; }

  function fallbackMailto() {
    var subject = encodeURIComponent('Buyer call request — ' + (val('name') || 'New Lead'));
    var body = encodeURIComponent(
      'Name: ' + val('name') + '\n' +
      'Phone: ' + val('phone') + '\n' +
      'Email: ' + val('email') + '\n' +
      'Stage: ' + val('intent') + '\n' +
      'Preferred language: ' + lang() + '\n\n' +
      'Source: Direct Buyers Landing Page'
    );
    window.location.href = 'mailto:liliana@lilianafuentes.com?subject=' + subject + '&body=' + body;
    if (note) {
      note.textContent = 'Opening your email app, or just call/text 623-256-1563.';
      note.classList.add('success');
    }
  }
})();
