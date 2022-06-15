var gateTab = document.getElementById("gate");
var devTab = document.getElementById("mainDev");
var devBtn = document.getElementById("devBtn")

function openDevPage() {
    
    gateTab.style.display = "none";
    
    devTab.style.display = "flex";
}

devBtn.addEventListener("click", () => { openDevPage();})

