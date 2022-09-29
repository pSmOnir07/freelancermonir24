// Typing script js


var typed = new Typed(".typing", {


    strings: ["Digital Marketing Expert", "social media manager",
        "Content Creator", "YouTube Specialist", "Graphic designer", "Web Developer"
    ],

    typeSpeed: 80,
    backSpeed: 80,

})

var typed = new Typed(".typing-2", {

    strings: ["Digital Marketing Expert", "social media manager",
        "Content Creator", "YouTube Specialist", "Graphic designer", "Web Developer"
    ],

    typeSpeed: 70,
    backSpeed: 70,
});

// show/hide FAQ text


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {

    faq.addEventListener("click", () => {


        faq.classList.toggle("faq-open");


        //change icon






        const icon = faq.querySelector('.faq i');

        if (icon.className === 'fa-solid fa-plus') {

            icon.className = 'fa-solid fa-minus';


        } else {

            icon.className = "fa-solid fa-plus";

        }

    })


})