$(document).ready(function(){
    let screenHeight = $(window).height();
    console.log(screenHeight)
    $(window).scroll(function (){
        
        let currentPos = $(this).scrollTop();
        console.log(currentPos);
        $(".nav-1").css("position","sticky");
        $(".nav-1").css("top","0");
        $(".nav-1").css("z-index","1");
        // if(currentPos > screenHeight){

        // }
    })
})