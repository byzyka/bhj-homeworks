
let reveal = document.querySelectorAll('.reveal');

let coordinates = function (elem) {

    let { top, bottom } = elem.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        return false;
    }
    return true;
}


document.addEventListener('scroll', () => {
    reveal.forEach(el => {
        if (coordinates(el)) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    })
})
