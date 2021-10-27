function setTime() {
    let colors = ['#df0000', '#f2c300', '#0099f6', '#00b844', 'turquoise'];

    let quarkTitle = document.getElementById("quark's");
    let mobiloeTitle = document.getElementById("quark's2");
    let currentPos = 0;
    let timer = setInterval(function(){
        quarkTitle.style.color = colors[currentPos];
        mobiloeTitle.style.color = colors[currentPos];
        currentPos += 1;
        if (currentPos === 5){
            currentPos = 0;
        }
    }, 300);
}
setTime();