// 基本互動：漢堡選單、平滑滾動、技能動畫、聯絡表單(mailto)
document.addEventListener('DOMContentLoaded', function () {
    // year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // nav toggle (mobile)
    const navToggle = document.getElementById('navToggle');
    const siteNav = document.getElementById('siteNav');
    navToggle && navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('show');
    });
  
    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1) {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // close mobile nav
            siteNav && siteNav.classList.remove('show');
          }
        }
      });
    });
  
    // animate skill bars when in view
    const skills = document.querySelectorAll('.skill-fill');
    const percents = document.querySelectorAll('.skill-percent');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skills.forEach((s, idx) => {
            const target = parseInt(s.dataset.target || '0', 10);
            s.style.width = target + '%';
            const percentEl = percents[idx];
            if (percentEl) {
              let current = 0;
              const step = Math.max(1, Math.floor(target / 20));
              const id = setInterval(() => {
                current += step;
                if (current >= target) {
                  current = target;
                  clearInterval(id);
                }
                percentEl.textContent = current + '%';
              }, 20);
            }
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.25 });
    if (skills.length) observer.observe(skills[0]);
  
    // contact form: build mailto and open default mail client
    const form = document.getElementById('contactForm');
    const formNote = document.getElementById('formNote');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name') || '匿名';
        const email = formData.get('email') || '';
        const message = formData.get('message') || '';
        const subject = encodeURIComponent(`網站聯絡：${name}`);
        const body = encodeURIComponent(`來自：${name}\n電郵：${email}\n\n內容：\n${message}`);
        // open mail client
        window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
        formNote.textContent = '已開啟郵件客戶端，請完成傳送。';
        setTimeout(()=> formNote.textContent = '', 6000);
        form.reset();
      });
    }
  });