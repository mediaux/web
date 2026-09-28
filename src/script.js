document.addEventListener('DOMContentLoaded', function () {
    // 1. Logika mobilního menu
    var menuBtn = document.getElementById('mobile-menu-btn');
    var menuDropdown = document.getElementById('mobile-dropdown');

    function toggleMobileMenu() {
        if (!menuDropdown) return;
        if (menuDropdown.style.display === 'block') {
            menuDropdown.style.display = 'none';
        } else {
            menuDropdown.style.display = 'block';
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Zavření menu po kliknutí na libovolný odkaz v mobilním menu
    if (menuDropdown) {
        var mobileLinks = menuDropdown.querySelectorAll('a');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                menuDropdown.style.display = 'none';
            });
        });
    }

    // 2. Ochrana e-mailů před spamem
    var emailElements = document.querySelectorAll('.protected-email');
    emailElements.forEach(function (el) {
        var user = el.getAttribute('data-user');
        var domain = el.getAttribute('data-domain');
        if (user && domain) {
            var fullEmail = user + '@' + domain;
            var mailtoLink = document.createElement('a');
            mailtoLink.href = 'mailto:' + fullEmail;
            mailtoLink.textContent = fullEmail;
            el.appendChild(mailtoLink);
        }
    });
});