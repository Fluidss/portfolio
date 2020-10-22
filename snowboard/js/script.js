let slide = document.querySelectorAll('.slider li');


for(let i=0;i<slide.length;i++){

    document.querySelector('.points').innerHTML += '<li></li>';
    let points = document.querySelectorAll('.points li');
    for(let j=0;j<points.length;j++){

        points[j].addEventListener('click',()=>{
            
           for(let k=0;k<points.length;k++){
            slide[k].classList.remove('slide-active');
            points[k].classList.remove('point-active');
            slide[j].classList.add('slide-active');
            points[j].classList.add('point-active');
           }
        });
    }
}