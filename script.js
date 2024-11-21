document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        // Kategóriák aktív státuszának frissítése
        document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
        category.classList.add('active');

        // Minden parancs elrejtése
        document.querySelectorAll('.command').forEach(cmd => {
            cmd.classList.remove('active');
            if (cmd.getAttribute('data-name') === category.getAttribute('data-name') || category.getAttribute('data-name') === 'all') {
                cmd.classList.add('active');
            }
        });
    });
});
document.getElementById("scrollToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // Smooth scroll effect
  });
});
