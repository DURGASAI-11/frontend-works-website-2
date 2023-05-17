function image1()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/bg-dark (1).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"
    
}
function image2()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/bg-dark (2).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image3()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/bg-dark (3).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image4()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/bulb.jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image5()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/bg-dark (1).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image6()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (6).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image7()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (2).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image90()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (1).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image91()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (2).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image92()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (3).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image93()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (4).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image94()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (5).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image95()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (6).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}
function image96()
{
    document.getElementById('bg-image').style.backgroundImage="url('images/at320pxto768px (7).jpg')"
    document.getElementById('bg-image').style.transition="all ease 1s"

}

var linestyle0={
    "transform-origin": "left",
    "transform": "rotate(40deg)",
    "transition":"all ease-in-out 0.5s",
    "width":"30px"

                }

 var linestyle1={
    "transform-origin": "left",
            "transform":"rotate(-40deg)",
            "transition":"all ease-in-out 0.5s",
            "width":"30px"
            
      
        }

var linestyle2={
     "transform-origin": "left-right",
     "transform": "rotate(0deg)",
     "transition":"all ease-in-out 1s",
                        }
       
 var linestyle3={
    "transform-origin": "left",
    "transform":"rotate(0deg)",
    "transition":"all ease-in-out 1s"
              
}
var menuBarOpen={
    "opacity":1,
    "transition":"all ease-in-out 0.5s",
    "z-index":1,
}
var menuBarClose={
    "opacity":0,
    "z-index":-1,
    "transition":"all ease-in-out 0.5s",
}
var underLines={
    "width":"200px",
    "height":"2px",
    "transition":"all ease-in-out 1s"
}
var underLineout={
    "width":"20px",
    "height":"1px",
    "transition":"all ease-in-out 1s"
}
function linemotion()
{
    Object.assign(document.getElementById('underline').style,underLines)
}
function linemotionout()
{
    Object.assign(document.getElementById('underline').style,underLineout)
}
function linemotiondeep()
{
    Object.assign(document.getElementById('underline1').style,underLines)
}
function linemotionoutdeep()
{
    Object.assign(document.getElementById('underline1').style,underLineout)
}
const menuLine=document.getElementById('menulines');
var i=0;
document.getElementById('m-r-links-id').style.zIndex=-1;
menuLine.addEventListener('click',function(){
    if(i%2==0){
     Object.assign(document.getElementById('img11').style,linestyle0)
     Object.assign(document.getElementById('img33').style,linestyle1)
    Object.assign(document.getElementById('m-r-links-id').style,menuBarOpen)
    document.getElementById('img-wrapper-id').style.opacity="0"
    document.getElementById('img-wrapper-id').style.transition="all ease 1s"
    document.getElementById('hover-links').style.visibility="visible";
    document.getElementById('hover-links1').style.visibility="visible";
    document.getElementById('hover-links2').style.visibility="visible";
    document.getElementById('hover-links3').style.visibility="visible";
    document.getElementById('hover-links4').style.visibility="visible";


    i++;
    }
    else{
        Object.assign(document.getElementById('img11').style,linestyle2)
         Object.assign(document.getElementById('img33').style,linestyle3)
         Object.assign(document.getElementById('m-r-links-id').style,menuBarClose)
        document.getElementById('img-wrapper-id').style.opacity="1"
        document.getElementById('img-wrapper-id').style.transition="all ease 1s"
        document.getElementById('hover-links').style.visibility="hidden";
        document.getElementById('hover-links1').style.visibility="hidden";
        document.getElementById('hover-links2').style.visibility="hidden";
        document.getElementById('hover-links3').style.visibility="hidden";
        document.getElementById('hover-links4').style.visibility="hidden";
        i++;
    }


})
const options={
    threshold:"0.6",
    rootMargin:"-100px"
}
const sectionCircle=document.querySelector('.black')
const observer=new IntersectionObserver(function(entries,observer)
{

    
    entries.forEach(entry =>
        {
            
            if(!entry.isIntersecting)
            {
               return;

            }
            else{
            console.log(entry.targer);
            entry.target.classList.toggle("bg-dark");
            }
        });
},options);
observer.observe(sectionCircle);



const countingSkill=document.querySelector('.count')
const  projcount=document.getElementById('pCount')
const observer1=new IntersectionObserver(function(skillentry,observer1 )
{
    var n1=40;
    var n;
    skillentry.forEach(entri=>{
    if(!entri.isIntersecting)
    {
           return
    }

})
})
observer1.observe(countingSkill)






var ii=0;
document.getElementById('shareicon').addEventListener('click',function(e){
    e.preventDefault();
    if(ii%2==0)
    {
        document.getElementById('icon1').style.transform="translateX(50px)";
    document.getElementById('icon1').style.transition="all ease 1s";
    document.getElementById('icon2').style.transform="translateY(-50px)";
    document.getElementById('icon2').style.transition="all ease 1s";
    document.getElementById('icon3').style.transform="translateY(50px)";
    document.getElementById('icon3').style.transition="all ease 1s";
    ii++
    }
    else{
        document.getElementById('icon1').style.transform="translateX(-0px)";
        document.getElementById('icon1').style.transition="all ease 1s";
        document.getElementById('icon2').style.transform="translateY(0px)";
        document.getElementById('icon2').style.transition="all ease 1s";
        document.getElementById('icon3').style.transform="translateZ(0px)";
        document.getElementById('icon3').style.transition="all ease 1s";
        ii++;
    }


})
/*
let scrollerId;
function startScroll()
{
let id=setInterval(function(){
window.scrollBy(0,2)
if(window.innerHeight+window.scrollY==document.body.offsetHeight)
{
    stopScroll();
}
},10)
return id;
}

function stopScroll(){
    clearInterval(scrollerId)
}
stopScroll();

scrollerId=startScroll();
document.body.addEventListener('keypress',function(event){
    if(event.which==13|| event.keyCode==13)
    {
        stopScroll();
    }
})

*/
