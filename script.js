function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

    document.querySelectorAll(`[data-${lang}]`).forEach((el) => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    document.querySelectorAll(`[data-${lang}-placeholder]`).forEach((el) => {
        el.setAttribute('placeholder', el.getAttribute(`data-${lang}-placeholder`));
    });

    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
        langLabel.textContent = lang === 'pt' ? 'PT' : 'EN';
    }

    localStorage.setItem('tfabri-lang', lang);
}

function toggleLanguage() {
    const current = localStorage.getItem('tfabri-lang') || 'pt';
    const next = current === 'pt' ? 'en' : 'pt';
    applyLanguage(next);
}

function applyTheme(theme) {
    document.body.classList.toggle('light-theme', theme === 'light');

    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.innerHTML = theme === 'light'
            ? '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>'
            : '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>';
    }

    localStorage.setItem('tfabri-theme', theme);
}

function toggleTheme() {
    const current = localStorage.getItem('tfabri-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('tfabri-lang') || 'pt';
    const savedTheme = localStorage.getItem('tfabri-theme') || 'dark';

    applyLanguage(savedLang);
    applyTheme(savedTheme);

    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});