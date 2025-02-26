document.addEventListener("DOMContentLoaded", function () {
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

    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropbtn = document.querySelector(".dropbtn");
    const logo = document.querySelector(".logo"); // Seleccionamos el logo

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    dropbtn.addEventListener("click", (e) => {
        if (window.innerWidth <= 480) {
            e.preventDefault();
            dropbtn.parentElement.classList.toggle("active"); // Usamos parentElement para afectar .dropdown
        }
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 480 && !link.classList.contains("dropbtn")) {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
                link.parentElement.parentElement.classList.remove("active"); // Cierra el submenú si está abierto
            }
        });
    });

    // Cerrar menú al hacer clic en el logo en móviles
    logo.addEventListener("click", () => {
        if (window.innerWidth <= 480) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
            document.querySelector(".dropdown").classList.remove("active");
        }
    });
});