var gateTab = document.getElementById("gate");
var devTab = document.getElementById("mainDev");
var devBtn = document.getElementById("devBtn");
var Profile = document.getElementById("pic")

function openDevPage() {
    
    gateTab.style.display = "none";
    
    devTab.style.display = "flex";
    Profile.classList.toggle("flicker")
}

devBtn.addEventListener("click", () => { openDevPage();})

