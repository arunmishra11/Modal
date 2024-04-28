'use strict';
'use strict';

//selecting different classes from html
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btsOpenModal = document.querySelectorAll('.show-modal');

//creating functions for each open and close modal for resuse
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//adding click eventlistner for both open and close modal
for (let i=0; i<btsOpenModal.length; i++)
btsOpenModal[i].addEventListener('click',openModal)
overlay.addEventListener('click',openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//adding an event listner when Escape button is hit to close the modal

document.addEventListener('keydown', function(e){
 if (e.key ==='Escape' && !modal.classList.contains('hidden')){
    closeModal();
 }
})
