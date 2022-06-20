//===== Modal =====
$(function () {
    const buyBtns = document.querySelectorAll(".js-btn-buy");
    const modal = document.querySelector(".js-modals");
    const close = document.querySelector(".js-btn-close");
    const modalContainer = document.querySelector(".js-mod-container");

    function showBuyTickets() {
        modal.classList.add("open");
    }

    function hideBuyTickets() {
        modal.classList.remove("open");
    }

    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener("click", showBuyTickets);
    }

    close.addEventListener("click", hideBuyTickets);

    modal.addEventListener("click", hideBuyTickets);

    modalContainer.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

//===== Menu bar =====
$(function () {
    var header = document.querySelector(".wrap__header");
    var mobileMenu = document.querySelector(".head__menu-btn");
    var headerHeight = header.clientHeight;

    //===== Open/close menu bar =====
    mobileMenu.onclick = function () {
        var isClosed = header.clientHeight === headerHeight;
        if (isClosed) {
            header.style.height = "auto";
        } else {
            header.style.height = null;
        }
    };

    //===== Auto close menu bar =====
    var menuItems = document.querySelectorAll('.head__nav li a[href *= "#"]');
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];

        menuItem.onclick = function (event) {
            var isParentItem =
                this.nextElementSibling &&
                this.nextElementSibling.classList.contains("nav__subnav");
            if (isParentItem) {
                event.preventDefault();
            } else {
                header.style.height = null;
            }
        };
    }
});
