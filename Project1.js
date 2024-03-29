let box = document.querySelector(".centerbox");

box.addEventListener("mousemove",function(details){ 
    let boxloctn = box.getBoundingClientRect();
    let center = boxloctn.width/2;
    let Width = boxloctn.width;
    // console.log(boxwidth)
    let insidebox = details.clientX - boxloctn.left;

    if(insidebox<center){
        // console.log("left")
        let red = gsap.utils.mapRange(0,center,255,0,insidebox)
        gsap.to(box,{
            backgroundColor:`rgb(${red},0,0)`,
            ease:Power4,
        });
        
    }
    else{
        // console.log("right")
        let blue = gsap.utils.mapRange(center,Width,0,255,insidebox)
        gsap.to(box,{
            backgroundColor:`rgb(0,0,${blue})`,
            ease:Power4,
        });
    }

})