// Spotlight effect on cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});

// Video hover play/pause
const videoList = [
    document.getElementById('projectVideo1'),
    document.getElementById('projectVideo2'),
    document.getElementById('projectVideo3'),
    document.getElementById('projectVideo4')
];

videoList.forEach(video => {
    video.addEventListener("mouseover", () => video.play());
    video.addEventListener("mouseout", () => video.pause());
});

// Contact form with EmailJS and loader
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("9c9UABgvXx_XjFIfd"); // Your public key

    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMessage");
    const submitBtn = document.getElementById("submitBtn");
    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoader = submitBtn.querySelector(".btn-loader");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Show loader
        btnLoader.style.display = "inline-block";
        btnText.textContent = "Sending...";
        submitBtn.disabled = true;

        emailjs.sendForm("service_5buonrg", "template_5gqsi34", form)
            .then(() => {
                successMsg.textContent = "Message sent successfully! I'll get back to you soon.";
                successMsg.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
                successMsg.style.color = "#10b981";
                successMsg.style.display = "block";
                form.reset();
            })
            .catch(() => {
                successMsg.textContent = "Something went wrong. Please try again later.";
                successMsg.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
                successMsg.style.color = "#ef4444";
                successMsg.style.display = "block";
            })
            .finally(() => {
                btnLoader.style.display = "none";
                btnText.textContent = "Send Message";
                submitBtn.disabled = false;

                setTimeout(() => {
                    successMsg.style.display = "none";
                }, 3000);
            });
    });
});