document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. AGE GATE LOGIC ---
    const ageGate = document.getElementById('age-gate');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');

    // Cek apakah user sudah verifikasi sebelumnya
    if (localStorage.getItem('ageVerified') === 'true') {
        ageGate.style.display = 'none';
        document.body.style.overflow = 'auto'; // Mengaktifkan scroll
    } else {
        document.body.style.overflow = 'hidden'; // Mengunci scroll
    }

    btnYes.addEventListener('click', () => {
        localStorage.setItem('ageVerified', 'true');
        ageGate.style.opacity = '0';
        setTimeout(() => {
            ageGate.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    });

    btnNo.addEventListener('click', () => {
        alert("Maaf, Anda tidak diizinkan mengakses situs ini.");
        window.location.href = "https://google.com"; // Redirect keluar
    });


    // --- 2. MOBILE MENU TOGGLE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


    // --- 3. SCROLL ANIMATION (Intersection Observer) ---
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    scrollElements.forEach((el) => observer.observe(el));
});
