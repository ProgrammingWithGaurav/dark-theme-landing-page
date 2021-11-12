let form = document.querySelector('form');
let input = document.querySelector('form input');
let errorMessage = document.querySelector('.error-message');

form.onsubmit = submit

function submit(event) {
    event.preventDefault();
    let reg = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if(input.value === '' || !reg.test(input.value)) {
        errorMessage.classList.remove('d-none')
        errorMessage.classList.add('d-block')
    } else {
        errorMessage.classList.remove('d-block')
        errorMessage.classList.add('d-none')
    }
}