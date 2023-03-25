const tabsbox = document.querySelector(".tabs-box");
arrowicons = document.querySelectorAll(".icon img");
const alltabs = document.querySelectorAll(".tab");

 
let isDragging = false;

const handleicons = () => {
    let scrollval = Math.round(tabsbox.scrollLeft);
    let maxscrollablewidth = tabsbox.scrollWidth - tabsbox.clientWidth;
    arrowicons[0].parentElement.style.display = scrollval > 0 ? "flex" : "none";
    arrowicons[1].parentElement.style.display = maxscrollablewidth == scrollval  ? "none" : "flex";
}

alltabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsbox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

arrowicons.forEach(icon => {
    icon.addEventListener("click", () => {
        tabsbox.scrollLeft += icon.id === "left" ? -300 : 300;
        setTimeout(() => handleicons(), 50);
    }); 
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsbox.scrollLeft -= e.movementX;
    tabsbox.classList.add("dragging");
    handleicons();
}
const dragStop = () => {
    isDragging = false;
    tabsbox.classList.remove("dragging");
}

tabsbox.addEventListener("mousedown", () => isDragging = true);
tabsbox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);