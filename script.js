window.onload = ()=>{
	let filters = document.querySelectorAll('.filters li');
	for(let i = 0;i<filters.length;i++){
		filters[i].onclick = ()=>{
			let className = filters[i].className;
			let activeClass = document.querySelectorAll(`.work ul .${className}`);
			let work = document.querySelectorAll('.work ul li');
			for (let j=0;j<work.length;j++){
				for(let k=0;k<activeClass.length;k++){
					work[j].style.display = 'none';
					activeClass[k].style.display = 'block';
				}
				if(className == "all"){
				work[j].style.display = 'block';
				}
			}
		}
	}



	let burger = document.querySelector('.burger');
	let navigation = document.querySelector('nav');
	if(screen.width<=480){
	burger.onclick = ()=>{
		 navigation.style.display = 'flex';
	}
		window.addEventListener('click', function (e) {
			if (!navigation.contains(e.target) && !burger.contains(e.target)) {
				// Ниже код, который нужно выполнить при срабатывании события.
				navigation.style.display = 'none';
			}
		});
	}
}