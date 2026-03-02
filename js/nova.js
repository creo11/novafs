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

  target.innerHTML = data.map((item, index) => {
    return template.replace(/\${(.*?)}/g, (_, expression) => {
      const key = expression.trim();

      if (key === '$index') return index;

      const value = getValue(item, key);
      return value ?? '';
    });
  }).join('');
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
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      allowTouchMove: false,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'cube'
    });
  }
});

// Footer year
document.getElementById("copyrightYear").textContent = new Date().getFullYear()