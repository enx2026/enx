	  window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.countdown-section');
  
  elements.forEach(el => {
    el.style.display = 'block';
  });

    new Swiper('.photo-swiper', { loop: true, allowTouchMove: false, speed: 4000, spaceBetween: 20, slidesPerView: 1.15, breakpoints: { 576: { slidesPerView: 1.8, spaceBetween: 20 }, 768: { slidesPerView: 2.4, spaceBetween: 24 }, 992: { slidesPerView: 3, spaceBetween: 28 }, 1200: { slidesPerView: 3.2, spaceBetween: 28 } }, autoplay: { delay: 0, disableOnInteraction: false } });
    new Swiper('.sponsor-swiper', { loop: true, freeMode: true, allowTouchMove: false, speed: 4000, spaceBetween: 40, slidesPerView: 3, breakpoints: { 768: { slidesPerView: 4, spaceBetween: 50 }, 992: { slidesPerView: 5, spaceBetween: 60 }, 1200: { slidesPerView: 6, spaceBetween: 70 } }, autoplay: { delay: 0, disableOnInteraction: false } });
    // Countdown to 2 Dec 2026
    (function () {
      var target = new Date('2026-12-02T08:30:00+01:00').getTime();
      function update() {
        var now = Date.now(), diff = target - now;
        if (diff < 0) diff = 0;
        var d = Math.floor(diff / 86400000), h = Math.floor((diff % 86400000) / 3600000), m = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000);
        document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
        document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
        document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
        document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
      }
      update(); setInterval(update, 1000);
    })();
    // Active nav on scroll
    (function () {
      var sections = ['top', 'venue'];
      var links = document.querySelectorAll('.nav-links a');
      window.addEventListener('scroll', function () {
        var pos = window.scrollY + 80;
        for (var i = sections.length - 1; i >= 0; i--) {
          var el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= pos) {
            links.forEach(function (a) { a.classList.remove('active'); });
            var active = document.querySelector('.nav-links a[href="#' + sections[i] + '"]');
            if (active) active.classList.add('active');
            break;
          }
        }
      });
    })();
    });
