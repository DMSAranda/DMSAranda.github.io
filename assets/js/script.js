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
    const dropdown = document.querySelector(".dropdown");
    const dropbtn = document.querySelector(".dropbtn"); // Seleccionamos el botón "Proyectos"

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Toggle solo en el botón "Proyectos" en móviles
    dropbtn.addEventListener("click", (e) => {
        if (window.innerWidth <= 480) {
            e.preventDefault(); // Prevenimos la navegación solo en "Proyectos"
            dropdown.classList.toggle("active");
        }
    });

    // Cerrar menú al hacer clic en cualquier enlace, incluyendo los de Proyectos
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 480 && !link.classList.contains("dropbtn")) {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
                dropdown.classList.remove("active"); // Cierra el submenú también
            }
        });
    });
});