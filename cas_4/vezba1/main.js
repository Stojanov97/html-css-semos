const pasShow = document.querySelector('#hideShow');
const pasInput = document.querySelector('#password');

pasShow.addEventListener('click', () => {
    if (pasInput.type === 'password') {
        pasInput.type = 'text';
    } else {
        pasInput.type = 'password';
    }
});