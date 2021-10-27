let bts = document.getElementsByClassName('join');
function redirect() {
    window.open('/C:/Users/Acer/vscode/WebDev/starfleetNews/QUARK.html');
}
function redirectMain() {
    location.reload();
}

function redirectArticle1() {
    window.open('/C:/Users/Acer/vscode/WebDev/starfleetNews/article-1.html')
}
for (let bt of bts) {
    bt.addEventListener('click', redirect);
}
document.getElementById('article1').addEventListener('click', redirectArticle1);
document.getElementById('starfleet').addEventListener('click', redirectMain);