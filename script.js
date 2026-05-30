const CHECKOUT_URLS = {
    basic: "https://ggcheckout.app/checkout/v2/6yzQgH2kEybBJ4ij3uNr",
    premium: "https://ggcheckout.app/checkout/v2/LBDSAZWt75KoT7nJcNS1",
    premiumPopup: "https://ggcheckout.app/checkout/v2/ydwLcsMO01QQtrx8ssBp"
};

const partyImages = [
    "https://festascriativass.lovable.app/festas/festa-02.jpg",
    "https://festascriativass.lovable.app/festas/festa-03.jpg",
    "https://festascriativass.lovable.app/festas/festa-04.jpg",
    "https://festascriativass.lovable.app/festas/festa-05.jpg",
    "https://festascriativass.lovable.app/festas/festa-06.jpg",
    "https://festascriativass.lovable.app/festas/festa-07.jpg",
    "https://festascriativass.lovable.app/festas/festa-08.jpg",
    "https://festascriativass.lovable.app/festas/festa-09.jpg",
    "https://festascriativass.lovable.app/festas/festa-10.jpg",
    "https://festascriativass.lovable.app/festas/festa-11.jpg",
    "https://festascriativass.lovable.app/festas/festa-12.jpg",
    "https://festascriativass.lovable.app/festas/festa-13.jpg",
    "https://festascriativass.lovable.app/festas/festa-14.jpg",
    "https://festascriativass.lovable.app/festas/festa-15.jpg",
    "https://festascriativass.lovable.app/festas/festa-16.jpg",
    "https://festascriativass.lovable.app/festas/festa-17.jpg"
];

const testimonialImages = [
    "https://solucoesparamaes.shop/images/testimonials/t1.jpg",
    "https://solucoesparamaes.shop/assets/testimonial-sirlane-DyBcjxpJ.webp",
    "https://solucoesparamaes.shop/images/testimonials/t3.jpg",
    "https://solucoesparamaes.shop/assets/testimonial-tamira-l5ltG3qw.webp"
];

const themeImages = [
    "https://dripay.com.br/sites/kitfesta/assets/images/FOTO-CARROSSEL-67.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/FOTO-CARROSSEL-1.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/ana_castela_03.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/ana_castela_02.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/stich_06.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/stich_05.webp",
    "https://solucoesparamaes.shop/assets/kit1-8XJHx3nd.webp",
    "https://solucoesparamaes.shop/assets/kit2-I1vxxmIc.webp",
    "https://solucoesparamaes.shop/assets/kit3-WuHv-7Hg.webp",
    "https://solucoesparamaes.shop/assets/kit5-EGkvLyMq.webp",
    "https://solucoesparamaes.shop/assets/kit6-5WBoJoFR.webp",
    "https://solucoesparamaes.shop/assets/kit7-CVXxCM2F.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/divertidamente_05.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/FOTO-CARROSSEL-7.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/stich_03.webp",
    "https://dripay.com.br/sites/kitfesta/assets/images/FOTO-CARROSSEL-59.webp"
];

const buyers = [
    ["Fernanda", "Comprou o Pacote Basico", "1 min atras"],
    ["Juliana", "Comprou o Pacote Completo", "3 min atras"],
    ["Mariana", "Comprou o Pacote Completo", "agora"],
    ["Camila", "Comprou o Pacote Basico", "2 min atras"],
    ["Aline", "Comprou o Pacote Completo", "4 min atras"]
];

function fillTrack(id, images, className) {
    const track = document.getElementById(id);
    if (!track) return;

    [...images, ...images].forEach((src, index) => {
        const card = document.createElement("div");
        card.className = `marquee-card ${className || ""}`.trim();

        const image = document.createElement("img");
        image.src = src;
        image.alt = `${id.replace("-track", "")} ${index + 1}`;
        image.loading = "lazy";

        card.appendChild(image);
        track.appendChild(card);
    });
}

function setTodayDate() {
    const date = new Date();
    const dateText = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }).format(date);
    document.getElementById("today-date").textContent = dateText;
}

function rotateToast() {
    const toast = document.querySelector(".purchase-toast");
    const name = document.getElementById("toast-name");
    const plan = document.getElementById("toast-plan");
    const time = document.getElementById("toast-time");
    let index = 0;

    function showNext() {
        const buyer = buyers[index % buyers.length];
        name.textContent = buyer[0];
        plan.textContent = buyer[1];
        time.textContent = buyer[2];
        toast.classList.add("show");

        setTimeout(() => toast.classList.remove("show"), 3000);
        index += 1;
    }

    setTimeout(() => {
        showNext();
        setInterval(showNext, 30000);
    }, 30000);
}

function openUpsell() {
    const modal = document.getElementById("upsell-modal");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeUpsell() {
    const modal = document.getElementById("upsell-modal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function goToCheckout(plan) {
    const url = CHECKOUT_URLS[plan];

    if (url) {
        window.location.href = url;
        return;
    }

    alert("Coloque o link do checkout no arquivo script.js, dentro de CHECKOUT_URLS.");
}

function setupHeroVideoSound() {
    const button = document.querySelector("[data-sound-toggle]");
    const video = document.getElementById("hero-video");
    const replayButton = document.querySelector("[data-replay-video]");
    if (!button || !video) return;

    video.muted = true;
    video.play().catch(() => {
        button.textContent = "Toque para iniciar o video";
    });

    if (replayButton) {
        video.addEventListener("ended", () => {
            replayButton.classList.add("show");
        });

        replayButton.addEventListener("click", () => {
            replayButton.classList.remove("show");
            video.currentTime = 0;
            video.play();
        });
    }

    button.addEventListener("click", () => {
        video.muted = false;
        video.volume = 1;
        video.play();
        button.textContent = "Som ativado";
        button.classList.add("sound-on");
        setTimeout(() => button.remove(), 1200);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setTodayDate();
    rotateToast();
    setupHeroVideoSound();
    fillTrack("party-track", partyImages, "");
    fillTrack("testimonial-track", testimonialImages, "testimonial-card");
    fillTrack("theme-track", themeImages, "theme-card");

    document.querySelectorAll("[data-scroll]").forEach((button) => {
        button.addEventListener("click", () => {
            const target = document.querySelector(button.dataset.scroll);
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    document.querySelectorAll("[data-open-upsell]").forEach((button) => {
        button.addEventListener("click", openUpsell);
    });

    document.querySelectorAll("[data-close-upsell]").forEach((button) => {
        button.addEventListener("click", closeUpsell);
    });

    document.querySelectorAll("[data-checkout]").forEach((button) => {
        button.addEventListener("click", () => goToCheckout(button.dataset.checkout));
    });

    document.getElementById("upsell-modal").addEventListener("click", (event) => {
        if (event.target.id === "upsell-modal") closeUpsell();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeUpsell();
    });
});
