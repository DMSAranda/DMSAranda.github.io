document.addEventListener("DOMContentLoaded", function () {
    // Efecto para las tarjetas (card, skill-card, edu-card)
    const cards = document.querySelectorAll(".card, .skill-card, .edu-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
            card.style.transform = "translateY(-10px) scale(1.05)";
            card.style.boxShadow = "0 0 20px rgba(50, 205, 50, 0.6), 0 0 40px rgba(50, 205, 50, 0.3)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
            card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
            card.style.background = card.classList.contains("skill-card") ? "#fff" : "#f9f9f9";
        });
    });

    // Animación para las secciones al hacer scroll
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Menú hamburguesa y dropdown
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropbtn = document.querySelector(".dropbtn");
    const logo = document.querySelector(".logo");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    dropbtn.addEventListener("click", (e) => {
        if (window.innerWidth <= 480) {
            e.preventDefault();
            dropbtn.parentElement.classList.toggle("active");
        }
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 480 && !link.classList.contains("dropbtn")) {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
                link.parentElement.parentElement.classList.remove("active");
            }
        });
    });

    logo.addEventListener("click", () => {
        if (window.innerWidth <= 480) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
            document.querySelector(".dropdown").classList.remove("active");
        }
    });
});