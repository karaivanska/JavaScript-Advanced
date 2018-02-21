function notify(message) {

    let divToDisplay = document.getElementById('notification');
    divToDisplay.textContent = message;
    divToDisplay.style.display = 'none';
    divToDisplay.style.display = 'block';

    setTimeout(function () {
        (divToDisplay.style.display = 'none');
    }, 2000);
}