
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = document.querySelectorAll('.dropdown__item')
let dropdownLink = document.querySelectorAll('.dropdown__link');

function openMenu() {
    dropdownList.classList.add('dropdown__list_active')
}

function closeMenu() {
    dropdownList.classList.remove('dropdown__list_active')
}

dropdownValue.addEventListener('click', openMenu);

let dropdownIte = Array.from(dropdownItem);

dropdownLink.forEach(link =>
    link.addEventListener('click', function (event) {
        event.preventDefault()
    }))

dropdownIte.forEach(ite =>
    ite.addEventListener('click', function (event) {

        closeMenu()
        dropdownValue.textContent = ite.textContent
    }))