const header=document.getElementById('header')
const open_btn=document.querySelector('.moible-menuBar')
const close_btn=document.querySelector('.close-menu')

open_btn.addEventListener('click',()=>toggaleSideMenu())
close_btn.addEventListener('click',()=>toggaleSideMenu())

const toggaleSideMenu=()=>{
    header.classList.toggle('active')
    // console.log('hello');
    
}

//   Carousel

$('.product-banner-carousel').owlCarousel({
    loop:true,
   dots:false,
   navText : ["<img src='./Images/icons/prev_arrow.svg'>","<img src='./Images/icons/next_arrow.svg'>"],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.find-products-carousel').owlCarousel({
    loop:false,
   dots:true,
   navText : ["<img src='./Images/icons/dark_Prev_arrow.svg'>","<img src='./Images/icons/dark_next_arraow.svg'>"],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        318:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})


$('.find2-products-carousel').owlCarousel({
    loop:false,
   dots:true,
   navText : ["<img src='./Images/icons/light_Prev_arrow.svg'>","<img src='./Images/icons/light_next_arrow.svg'>"],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        318:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})