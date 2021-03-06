window.addEventListener("DOMContentLoaded", () => {
    let dropdownMenu = document.querySelector('.product-card__dropdown-list'),
    titleDropdownMenu = document.querySelector('.product-card__list-title');

    titleDropdownMenu.addEventListener("click", () => {
        titleDropdownMenu.classList.toggle("product-card__list-title_open");
        dropdownMenu.classList.toggle("product-card__dropdown-list_open");
    });

    let btnMenu = document.querySelectorAll('.btn-menu'),
    menu = document.querySelector('.nav-menu');

    btnMenu.forEach(i => {
        i.addEventListener("click", () => {
            menu.classList.toggle("nav-menu_open");
        });
    });

    let mainImg = document.querySelector('.product-card__main-img'),
    smallImg = mainImg.querySelectorAll('.product-card__img');

    smallImg.forEach((img, index) => {
        img.addEventListener("click", () => {
            mainImg.style.backgroundImage = `url('img/img${index}.jpg')`;
        });
    });

    let numProducts = document.querySelector('.product-card__num-products'),
    addNum = numProducts.querySelector('.product-card__btn-add-more'),
    removeNum = numProducts.querySelector('.product-card__btn-remove'),
    number = numProducts.querySelector('.product-card__number'),
    valueNumber = number.textContent;
    
    removeNum.addEventListener("click", () => {
        if (valueNumber > 1) {
            valueNumber--;
            number.textContent = valueNumber;
        } else {
            return 1;
        }
    });
    addNum.addEventListener("click", () => {
        valueNumber++;
        number.textContent = valueNumber;
    });

    let modal = document.querySelector('.container-modal'),
    massageModal = modal.querySelector('.modal-info__massage'),
    btnAdd = document.querySelector('.product-card__btn-add-shop-cart'),
    btnAddFavorite = document.querySelector('.product-card__btn-add-favourit'),
    nameProduct = document.querySelector('.product-card__name');

    function closeModal() {
        modal.classList.remove('open-modal');
    }

    btnAdd.addEventListener('click', () => {
        massageModal.textContent = `?????????? '${nameProduct.textContent}' ?? ?????????????????????? ${valueNumber} ???????????????? ?? '????????????????'`;
        modal.classList.add('open-modal');

        setTimeout(closeModal, 5000);
    });

    btnAddFavorite.addEventListener('click', () => {
        massageModal.textContent = `?????????? '${nameProduct.textContent}' ?? ?????????????????????? ${valueNumber} ???????????????? ?? '??????????????????'`;
        modal.classList.add('open-modal');

        setTimeout(closeModal, 5000);
    });

    let header = document.querySelector('.header'),
    lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        let scrollDistance = window.scrollY;

        if (scrollDistance > lastScrollTop) {
            header.classList.add('header_show-hide');
        } else {
            header.classList.remove('header_show-hide');
        }

        lastScrollTop = scrollDistance;
    });

    let field = document.querySelector('.footer__form-field'),
    message = document.querySelector('.footer__form-massage'),
    clear = document.querySelector('.footer__form-clear'),
    btnSend = document.querySelector('.footer__form-btn-send');

    clear.addEventListener("click", () => {
        field.value = '';
    });

    function formValidate() {
        if (emailTest(field)) {
            valid(field, message, "");
        } else {
            notValid(field, message, "?????????????? ???????????????????? email ??????????");
        }
    }

    function emailTest(input) {
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(input.value);
    }

    btnSend.addEventListener("click", (e) => {
        e.preventDefault();
        formValidate();
    });


    function notValid(inp, elem, mess) {
        inp.classList.remove("footer__field_success");
        inp.classList.add("footer__field_error");
        elem.innerHTML = mess;
    }

    function valid(inp, elem, mess) {
        inp.classList.remove("footer__field_error");
        inp.classList.add("footer__field_success");
        elem.innerHTML = mess;
    }
});