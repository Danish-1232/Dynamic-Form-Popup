const close = document.getElementById("close");

const open = document.getElementById("open");

const modal = document.getElementById("modal");

open.addEventlistener("click", () => modal.classList.add("show-modal"));
close.addEventlistener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) => {
    e.target === modal ? modal.classList.remove("show-modal") : false;
});




