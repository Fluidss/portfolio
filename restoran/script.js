let menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click', function(){
document.querySelector('nav').style.display = 'block';
});
window.addEventListener('mouseup', function (e) {
	let menu = document.querySelector('nav');
    if (!menu.contains(e.target)){
        document.querySelector('nav').style.display = 'none';
        console.log(e.target);
    }
});