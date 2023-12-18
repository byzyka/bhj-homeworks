
let linkSize = document.querySelectorAll('.font-size');
let book = document.getElementById('book');

linkSize.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault()
        linkSize.forEach(elem => {
        elem.classList.remove('font-size_active')});

        link.classList.add('font-size_active');

        if (link.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (link.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    })
}
)
