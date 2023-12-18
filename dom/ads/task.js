function changeSpan() {
    let span = document.querySelectorAll('.rotator__case');
    let activeSpan = 0;

    span.forEach((elem, i) => {
        if (elem.classList.contains('rotator__case_active')) {
            elem.classList.remove('rotator__case_active');
            activeSpan = (i + 1) % span.length; 
        }         
    })   

    span[activeSpan].classList.add('rotator__case_active');
}

setInterval('changeSpan()', 1000);
