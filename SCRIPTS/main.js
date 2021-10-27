let bts = document.getElementsByClassName('join');
function redirect() {
    window.open('https://feguri.github.io/Starfleet-News/QUARK');
}
function redirectArticle1() {
    window.open('https://feguri.github.io/Starfleet-News/article-1')
}
for (let bt of bts) {
    bt.addEventListener('click', redirect);
}
document.getElementById('article1').addEventListener('click', redirectArticle1);
