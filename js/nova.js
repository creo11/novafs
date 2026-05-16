window.addEventListener('scroll', function () {
	const header = document.querySelector('nav'); 
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, {passive: true});

tippy('#navServices', {
	content: 'My tooltip!',
	trigger: 'click'
});

function getValue(obj, path) {
  return path.split('.').reduce((acc, key) => {
    return acc?.[key];
  }, obj);
}

function templateRepeat({ data, templateId, targetId }) {
  const template = document.getElementById(templateId).innerHTML;
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = data.map((item, index) => {
    return template.replace(/\${(.*?)}/g, (_, expression) => {
      const key = expression.trim();

      if (key === '$index') return index;

      const value = getValue(item, key);
      return value ?? '';
    });
  }).join('');
}

function formatUsPhone(digits) {
  const d = digits.slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return '(' + d.slice(0, 3) + ') ' + d.slice(3);
  return '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
}

function countDigitsBeforeIndex(str, idx) {
  let count = 0;
  for (let i = 0; i < Math.min(idx, str.length); i++) {
    if (/\d/.test(str[i])) count++;
  }
  return count;
}

function caretIndexForDigitCount(formatted, digitCount) {
  if (digitCount <= 0) return 0;
  let seen = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      seen++;
      if (seen >= digitCount) return i + 1;
    }
  }
  return formatted.length;
}

document.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  if (typeof Swiper === 'function') {
    new Swiper('.js-nova-swiper', {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      allowTouchMove: false,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'coverflow',
      coverflowEffect: {
        scale: 0.8,
        stretch: 0.8,
      },
    });
  }

  // Live-format the contact phone field while typing (US 10-digit)
  const phoneInput = document.getElementById('phone');
  if (phoneInput && phoneInput.tagName === 'INPUT') {
    phoneInput.addEventListener('input', function () {
      const raw = phoneInput.value || '';
      const cursor = typeof phoneInput.selectionStart === 'number' ? phoneInput.selectionStart : raw.length;
      const digitsBefore = countDigitsBeforeIndex(raw, cursor);
      const digits = raw.replace(/\D/g, '');
      const formatted = formatUsPhone(digits);

      if (formatted !== raw) {
        phoneInput.value = formatted;
        const nextCursor = caretIndexForDigitCount(formatted, digitsBefore);
        try { phoneInput.setSelectionRange(nextCursor, nextCursor); } catch (e) {}
      }
    });
  }
});

// Footer year
document.getElementById("copyrightYear").textContent = new Date().getFullYear()