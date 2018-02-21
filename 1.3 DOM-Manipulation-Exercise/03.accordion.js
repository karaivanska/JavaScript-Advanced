function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let textBtn = document.getElementById('extra');

    if(button.textContent === 'More'){
        textBtn.style.display =  'block';
        button.textContent = 'Less';

    } else {
        textBtn.style.display = 'none';
        button.textContent = 'More';
    }
}