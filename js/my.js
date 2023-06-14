$(window).scroll(function(){
    if($(window).scrollTop()> 0){
        $("body").addClass("s_down")
    }
    else{
        $("body").removeClass("s_down")
    }
})