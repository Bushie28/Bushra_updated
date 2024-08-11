document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    const getCurrentTheme = () => localStorage.getItem('theme') || 'light';
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        themeToggleButton.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    };

    applyTheme(getCurrentTheme());

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
