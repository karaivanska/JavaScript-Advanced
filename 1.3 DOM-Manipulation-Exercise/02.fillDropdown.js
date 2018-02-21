function addItem() {
    let text = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    let added = document.createElement('option');

    added.value = val.value;
    added.textContent = text.value;
    select.appendChild(added);

    text.value = '';
    val.value = '';
}