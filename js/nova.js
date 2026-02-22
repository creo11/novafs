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

document.getElementById("copyrightYear").textContent = new Date().getFullYear()