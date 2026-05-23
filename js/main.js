/* ============================================================
   NUANCE AESTHETICS — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     Form option toggle (Termin page)
     ---------------------------------------------------------- */
  window.selectOption = function (el) {
    const siblings = el.parentElement.querySelectorAll('.form-option');
    siblings.forEach(function (s) { s.classList.remove('selected'); });
    el.classList.add('selected');
  };

  /* ----------------------------------------------------------
     Active nav link highlighting
     ---------------------------------------------------------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     Smooth scroll for any on-page anchor links
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ----------------------------------------------------------
     Simple contact form — prevent default & show confirmation
     ---------------------------------------------------------- */
  const submitBtn = document.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const requiredInputs = document.querySelectorAll('.form-input[required], .form-textarea[required]');
      let valid = true;
      requiredInputs.forEach(function (input) {
        if (!input.value.trim()) {
          input.style.borderColor = '#C9967A';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });
      if (valid) {
        submitBtn.textContent = 'Anfrage gesendet ✦';
        submitBtn.style.background = '#8E9E8A';
        submitBtn.disabled = true;
      }
    });
  }

});
