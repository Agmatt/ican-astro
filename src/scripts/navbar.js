document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navbar-default');
  const navIcon = document.getElementById('navIcon'); // Optional, if using an icon animation

  // 1. Toggle menu on small screens
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    if (navIcon) navIcon.classList.toggle('open'); // Optional visual toggler icon
  });

  // 2. Close menu when clicking outside on mobile
  document.addEventListener('click', (e) => {
    const isInsideNav =
      navMenu.contains(e.target) || navToggle.contains(e.target);
    const isMenuOpen = !navMenu.classList.contains('hidden');
    if (!isInsideNav && isMenuOpen) {
      navMenu.classList.add('hidden');
      if (navIcon) navIcon.classList.remove('open');
    }
  });

  // 3. Enable dropdowns on click (mobile only)
  const dropdownGroups = document.querySelectorAll('.group');
  dropdownGroups.forEach((group) => {
    const link = group.querySelector('a');
    const dropdown = group.querySelector('ul');

    link.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        if (dropdown) {
          e.preventDefault(); // Prevent jumping to #
          dropdown.classList.toggle('invisible');
          dropdown.classList.toggle('opacity-0');
          dropdown.classList.toggle('opacity-100');
          dropdown.classList.toggle('visible');
        }
      }
    });
  });

  // 4. Add shadow to navbar on scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  });

  // 5. Highlight active nav link
  const links = navMenu.querySelectorAll('a[href]');
  const currentPath = window.location.pathname;
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && currentPath.startsWith(href)) {
      link.classList.add('text-[#b9bc23]', 'font-semibold');
    }
  });
});
