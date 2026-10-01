// =====================================================
// PORTFOLIO JAVASCRIPT
// =====================================================


// =====================================================
// SMOOTH SCROLLING
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =====================================================
// CONTACT FORM VALIDATION
// =====================================================

const contactForm =
    document.querySelector(".contact-form form");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Check empty fields

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert("Please fill all fields.");

            return;
        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        // Success message

        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted."
        );


        // Clear form

        contactForm.reset();

    });

}


// =====================================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================================

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    const currentYear =
        new Date().getFullYear();


    copyright.innerHTML =
        "© " +
        currentYear +
        " My Portfolio. All Rights Reserved.";

}


// =====================================================
// SCROLL TO TOP BUTTON
// =====================================================

const scrollTopButton =
    document.createElement("button");


scrollTopButton.innerHTML = "↑";

scrollTopButton.className =
    "scroll-top";


scrollTopButton.setAttribute(
    "aria-label",
    "Scroll to top"
);


document.body.appendChild(
    scrollTopButton
);


// Show button after scrolling

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


// Scroll to top

scrollTopButton.addEventListener(
    "click",
    function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// =====================================================
// MOBILE NAVIGATION MENU
// =====================================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


// Open and close mobile menu

if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function() {

            navLinks.classList.toggle("active");

        }
    );


    // Close menu after clicking a link

    const navItems =
        navLinks.querySelectorAll("a");


    navItems.forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                navLinks.classList.remove("active");

            }
        );

    });

}
// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function(link) {

        link.classList.remove("active-link");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active-link");

        }

    });

});