var gateTab = document.getElementById("gate");
var devTab = document.getElementById("mainDev");
var devBtn = document.getElementById("devBtn");
var Profile = document.getElementById("pic");
var wipBtn = document.querySelectorAll('.btnWip')
var hoverBtn = new Audio('public/assets/audio/cursorHover.wav');
var tabBtn = new Audio('public/assets/audio/cursorClick.wav');
var dsbBten = new Audio('public/assets/audio/clickDisable.wav');
var tabOpen = new Audio('public/assets/audio/openTab.wav');
var flicker = new Audio('public/assets/audio/flicker.wav')
// Créer  l observer
const observerCard = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelectorAll('.card');

        if (entry.isIntersecting) {
            square.forEach(element => {


                element.classList.add('flicker');

            });
            flicker.play()
            return; // la classe ajouté, on quite la fonction
        }

        // remove the class
        // square.classList.remove('flicker');
    });
});

const observerComp = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelectorAll('#technoList div');

        if (entry.isIntersecting) {
            square.forEach(element => {


                element.classList.add('slide');

            });
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        // square.classList.remove('slide');
    });
});


function openDevPage() {
    tabBtn.play();
    gateTab.style.display = "none";

    devTab.style.display = "flex";
    tabOpen.play();
    Profile.classList.toggle("flicker");
}

devBtn.addEventListener("click", () => {
    openDevPage();
})
devBtn.addEventListener("mouseenter", () => {
    hoverBtn.play()
})
wipBtn.forEach(e => {


    e.addEventListener("click", (e) => {
        console.log("test");
        dsbBten.play();
    })
})
// dire a observer quel element  track
observerCard.observe(document.querySelector('#portfolioCard'));
observerComp.observe(document.querySelector('#portfolio'));