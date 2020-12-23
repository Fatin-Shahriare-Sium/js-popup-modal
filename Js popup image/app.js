let div=document.getElementById('img-box')
let shadow=document.getElementById('shadow-box');
let btn=document.getElementById('shadow-btn');

[...div.children].forEach(imgGet =>{
imgGet.addEventListener('click',function(event){

    shadow.classList.add('shadow-box')
    shadow.firstElementChild.style.maxWidth="500px"
    shadow.firstElementChild.src=imgGet.src
    btn.style.visibility='visible'
})
btn.addEventListener('click',function(){
    shadow.classList.remove('shadow-box')
    btn.style.visibility='hidden'
    shadow.firstElementChild.src=''
})
})

