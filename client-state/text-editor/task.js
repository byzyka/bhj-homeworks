
let editor = document.getElementById('editor');

let stored = localStorage.getItem('text');

    editor.value = stored;
   
editor.addEventListener('input', e => {
    localStorage.setItem('text', editor.value);
})

