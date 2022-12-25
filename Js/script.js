let menuBtn = document.querySelector('.hamburger')
let menu = document.querySelector('#nav ul')
let navItems = document.querySelectorAll('#nav ul li')

menuBtn.addEventListener('click', e=>{
    menuBtn.classList.toggle('open')

    if(menu.classList.contains('-top-96')){
        menu.classList.remove('-top-96')
        menu.classList.add('top-16')
    }else{
        menu.classList.add('-top-96')
        menu.classList.remove('top-16')
    }
})

navItems.forEach(item=>{
    item.addEventListener('click', e=>{
        menuBtn.classList.remove('open')

        menu.classList.add('-top-96')
        menu.classList.remove('top-16')
    })
})

window.addEventListener('scroll', e=>{
    console.log(window.scrollY)
    if(scrollY >= "40"){
        menu.classList.remove('py-8')
        menu.classList.add('py-6')
    }else {
        menu.classList.remove('py-6')
        menu.classList.add('py-8')
    }
})