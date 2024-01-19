
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');

let modalClosed = false;


closeButton.addEventListener('click', e=> {
    e.preventDefault();

    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=true';
    modalClosed = true;
        
});

function checkClosedModal() {
    const pairs = document.cookie.split('; ');
   
    const modalClosedCookie = pairs.find(i => i.startsWith('modalClosed='));


    if(modalClosedCookie) {
        modalClosed = modalClosedCookie.split('=')[1] === 'true';
    } else {
        modalClosed = false;
    }

    if(!modalClosed) {
        modal.classList.add('modal_active');
        document.cookie = 'modalClosed=false';
       
    }
}

window.addEventListener('DOMContentLoaded', () => {
    checkClosedModal();
})

window.addEventListener('beforeunload', () => {
    if(!modalClosed) {
        document.cookie = 'modalClosed=false';
    }
})