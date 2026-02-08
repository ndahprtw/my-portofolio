
// Inisialisasi Nested Swiper (Efek Story IG)
const nestedSwipers = new Swiper(".nestedSwiper", {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});

// Inisialisasi Main Swiper
const mainSwiper = new Swiper(".myExperienceSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Ketika layar >= 768px (tablet)
        768: {
            slidesPerView: 2,
        },
        // Ketika layar >= 1024px (desktop) muncul 3 slide
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});
 
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navbarCollapse = document.getElementById('navbarNav');
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });
});

// Scroll to top functionality
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Typing effect for hero section
const heroText = document.getElementById('typing-text');
const originalText = heroText.textContent;
heroText.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < originalText.length) {
        heroText.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

setTimeout(typeWriter, 1000);

const navbar = document.getElementById("mainNavbar");
const heroSection = document.getElementById("home"); // id section beranda

window.addEventListener("scroll", () => {
    const heroBottom = heroSection.offsetHeight - 80;

    if (window.scrollY > heroBottom) {
        navbar.classList.remove("navbar-transparent");
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.add("navbar-transparent");
        navbar.classList.remove("navbar-scrolled");
    }
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // 1. Ubah tampilan tombol aktif
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {

        // Hapus active dari semua tombol
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });

        // Tambahkan active ke tombol yang diklik
        this.classList.add('active');
    });
});


        const filterValue = this.getAttribute('data-filter');
        const items = document.querySelectorAll('.project-item');

        items.forEach(item => {
            // 2. Logika Show/Hide dengan animasi sederhana
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => { item.style.opacity = '1'; }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => { item.style.display = 'none'; }, 300);
            }
        });
    });
});