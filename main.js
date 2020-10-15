$("#burgerMenu").on("click",(ev)=>{
    ev.preventDefault()
    $("#checkShow").click()
    $("#checkShow2").click()
    showNav=$("#checkShow").is(":checked")
    
    navElem=$("nav#nav-menu-container ul li")
    if(showNav){
      navElem.map((index,elem)=>{
        $(elem).css({"transition": `none`,'opacity':'0','right':'-20%'})
    
              })
     
      setTimeout(()=>{
        navElem.map((index,elem)=>{
          
          $(elem).css({"transition": `all 0.5s ease-in ${index*0.5}s`,"opacity":"1",'right':'0%'})
        })
      },1000)
    }
})

$(window).scroll(()=>{
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    // console.log(windowBottom)
    $(".profilCard").each(function(index){
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        var objectTop = $(this).offset().top;
        // console.log(objectTop)
        // console.log(objectBottom)
        // console.log(index)
        // console.log($(this).offset().top)
        
        if(objectTop<windowBottom && windowBottom<objectBottom){
        // console.log(true)
        // console.log(windowBottom)
            if(!$(this).hasClass("animationFadeUp"))
                $(this).addClass("animationFadeUp")
        }
    })
})
$("a.dropdown-item,a.menu").on("click",function(e){
    e.preventDefault()
    let data=$(this).data("target")
    let elem =$(`${data}`)
    let marginTop=parseFloat(elem.css("margin-top"))
    
    $("html,body").animate({scrollTop:`${elem.offset().top-marginTop}`},
    {duration:1000,
        easing:"swing"
    }
    )
    
})