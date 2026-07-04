// DARK MODE

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "🌙";
        }

    });

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeBtn.innerHTML = "☀️";
    }

}


// BACK TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// IMAGE SLIDER

const sliderImage = document.getElementById("sliderImage");

if (sliderImage) {

    const images = [

        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1000",

        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1000",

        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1000",

        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1000"

    ];

    let currentImage = 0;

    setInterval(() => {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        sliderImage.src = images[currentImage];

    }, 3000);

}


// ANIMATED COUNTERS

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// MODAL POPUP

const offerBtn = document.getElementById("offerBtn");
const offerModal = document.getElementById("offerModal");
const closeModal = document.getElementById("closeModal");

if (offerBtn && offerModal && closeModal) {

    offerBtn.addEventListener("click", () => {
        offerModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        offerModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === offerModal) {
            offerModal.style.display = "none";
        }
    });

}


// FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill all fields.");

        } else {

            alert("Message Sent Successfully!");

            contactForm.reset();

        }

    });

}
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if(menuToggle && navbar){

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}