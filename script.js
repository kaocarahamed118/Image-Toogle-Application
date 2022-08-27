const items = document.querySelectorAll('.item');

function toogleOpen(){
    this.classList.toggle('open')
    console.log('hello')
}
function toogleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}
items.forEach(item => item.addEventListener('click', toogleOpen))
items.forEach(active => active.addEventListener('transitionend', toogleActive))