function create(sentences) {
    let mainDiv = document.getElementById('content');

    for (let sentance of sentences) {
        let newDiv = document.createElement('div');
        let newPara = document.createElement('p');

        newPara.textContent = sentance;
        newPara.style.display = 'none';
        newDiv.appendChild(newPara);

        newDiv.addEventListener('click', function(){
            newPara.style.display = 'inline-block';
        });

        mainDiv.appendChild(newDiv);
    }
}