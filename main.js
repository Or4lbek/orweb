 window.onscroll = function showHeader() {
    var div = document.getElementsByClassName('nav_link'); 
        
        

     var header = document.querySelector('.header');

     if (window.pageYOffset > 100){
        header.classList.add('header_fixed');
        document.getElementById("img1").src="Credo 11 png.png";
        document.getElementById("img111").src="credo1.png";
        //document.querySelector(".header").style.backgroundColor = "#262626";
        for (var i = 0; i < div.length; i++){
            style = div[i].style;
            style.color = "#E7CA40";
        }
        
    }
    else{
        header.classList.remove('header_fixed');
        document.getElementById("img1").src="Credo 22 png.png";
        document.getElementById("img111").src="credo/Credo_2_png-removebg-preview.png";
        //document.querySelector(".header").style.backgroundColor = "#E2E2E2";

        for (var i = 0; i < div.length; i++){
            style = div[i].style;
            style.color = "black";
        }
    }
 }
function load(){
    $(".intro_inner").animate({opacity: '1'}, "slow");
    $(".intro_img").animate({opacity: '1'}, "slow");
}
/*botton  оставить заявку*/

function popup(){    
    var btn = document.getElementById("question").innerHTML;
    {
        document.querySelector(".popup").style.display = "flex";
        $(".popup").animate({opacity: "1"}, "slow");
       
    }
}   
function close_popup(){    
    $(".popup").animate({opacity: "0"}, "slow");
    document.querySelector(".popup").style.display = "none";
}


/*=========================================================*/
/*swiper*/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true
});


/*===================================*/
var myVideo = document.getElementById("video1");
       
function popup_video(){    
    document.querySelector(".popup_video").style.display = "flex";
    myVideo.play(); 
}

function close_popup_video(){   
    myVideo.pause(); 
    document.querySelector(".popup_video").style.display = "none";
} 
var x=1;
function displayFn(){
    if (x==1){
        document.getElementById("second_gallery").style.display="flex";
        document.getElementById("Btn").innerHTML="Скрыть галерею";
        return x=0;
    }
    else{
        document.getElementById("second_gallery").style.display="none";
        document.getElementById("Btn").innerHTML="Показать галерею";
        return x=1;
    }
}

/*======================================*/
$(function(){
    $(".header a").on('click',function(){
        $("html,body").animate({
            scrollTop:$($.attr(this,'href')).offset().top

        },700);
    });

});
