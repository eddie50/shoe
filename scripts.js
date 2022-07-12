let imgUrls = [
    {
        id:0,
        img:'./images/shoe-1.jpg',
        color: 'rgb(172, 2, 2)',
        toziih:'Performance',
    },
    {
        id:1,
        img:'./images/shoe-2.jpg',
        color: 'rgb(104, 104, 104)',
        toziih:'Speed',
    },
    {
        id:2,
        img:'./images/shoe-3.jpg',
        color: 'rgb(104, 104, 104)',
        toziih:'Comfort',
    },
    {
        id:3,
        img:'./images/shoe-4.jpg',
        color: '#ffffff',
        toziih:'Mobility',
    },
]

//select items
const rastBtn = document.querySelector('.ras-btn')
const chapBtn = document.querySelector('.chap-btn')
const barBtn = document.querySelector('.bar')
const image = document.querySelector('.main-img')
const body = document.querySelector('.body')
const tozih = document.querySelector('.tozih-text') 
const toggleBtn = document.querySelector('.sidebar-toggle')
const sideBar = document.querySelector('.side-bar')
const closeBtn = document.querySelector('.cls-btn')
let count = 0


//Event Listeners
rastBtn.addEventListener('click',goNext)
chapBtn.addEventListener('click',goPast)
toggleBtn.addEventListener('click',showSidebar)
closeBtn.addEventListener('click',closeSidebar)
//functions
function goNext(){
    if(count<3){
        count++
    }else{
        count=0
    }
    imgUrls.forEach(function(item){
        if(item.id === count){
            image.src = item.img
            body.style.background = item.color
            tozih.innerText = item.toziih
        }
    })
}
function goPast(){

    if(count>0){
        count--
    }else{
        count=3
    }
    imgUrls.forEach(function(item){
        if(item.id === count){
            image.src = item.img
            body.style.background = item.color
            tozih.innerText = item.toziih
        }
    })
}
function showSidebar(){
    sideBar.classList.add('show-side-bar')
}
function closeSidebar(){
    sideBar.classList.remove('show-side-bar')
}