var gateTab = document.getElementById("gate");
var devTab = document.getElementById("mainDev");
var devBtn = document.getElementById("devBtn");
var Profile = document.getElementById("pic")
// Create the observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelectorAll('.card');

        if (entry.isIntersecting) {
        square.forEach(element => {
            
        
            element.classList.add('flicker');
        });
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        // square.classList.remove('flicker');
    });
});


function openDevPage() {

    gateTab.style.display = "none";

    devTab.style.display = "flex";
    Profile.classList.toggle("flicker")
}

devBtn.addEventListener("click", () => {
    openDevPage();
})
// Tell the observer which elements to track
observer.observe(document.querySelector('#portfolioCard'));
