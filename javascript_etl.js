window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.countdown-section')
    .forEach(el => el.style.visibility = 'visible');

  if (typeof Swiper !== 'undefined') {
    new Swiper('.photo-swiper', { /* config */ });
    new Swiper('.sponsor-swiper', { /* config */ });
  }

  (function () {
    const target = new Date('2026-12-02T08:30:00+01:00').getTime();

    function update() {
      const now = Date.now();
      let diff = target - now;
      if (diff < 0) diff = 0;

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = String(val).padStart(2, '0');
      };

      set('cd-days', d);
      set('cd-hours', h);
      set('cd-mins', m);
      set('cd-secs', s);
    }

    update();
    const timer = setInterval(update, 1000);
  })();
});
