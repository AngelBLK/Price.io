const select = document.querySelector('#select');
const options = document.querySelector('#options');
const contentSelect = document.querySelector('#select .content-select');
const hiddenInput = document.querySelector('#input-select');

document.querySelectorAll('#options > .option').forEach((Option => {
    Option.addEventListener('click', (e) => {
        e.preventDefault();
        contentSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        options.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.content-tittle-option').innerText;
        
    });
}));

select.addEventListener('click', () => {
    select.classList.toggle('active');
    options.classList.toggle('active');
});

