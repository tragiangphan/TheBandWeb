$(document).ready(function () {
    const buyBtns = document.querySelectorAll(".js-btn-buy");
    const modal = document.querySelector(".js-modals");
    const close = document.querySelector(".js-btn-close");
    const modalContainer = document.querySelector(".js-mod-container")

    function showBuyTickets() {
        modal.classList.add('open')
    }
    
    function hideBuyTickets() {
        modal.classList.remove("open")
    }

    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener("click", showBuyTickets)
    }

    close.addEventListener("click", hideBuyTickets)

    modal.addEventListener("click", hideBuyTickets)
    
    modalContainer.addEventListener("click", function (event) {
        event.stopPropagation();
    })
});
