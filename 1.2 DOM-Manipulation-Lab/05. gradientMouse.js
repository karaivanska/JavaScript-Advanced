function attachGradientEvents(){

    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout',gradientOut);

    function gradientMove(event) {
        let x = event.offsetX / (this.clientWidth - 1);
        let percent = Math.trunc(x * 100);
        document.getElementById('result').textContent = percent.toFixed(0) + '%';
    }

    function gradientOut(event){
        document.getElementById('result').textContent = "";
    }
}
