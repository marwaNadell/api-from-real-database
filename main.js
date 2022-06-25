let cartona=``;
async function togetapi(theendpoint){
  let req=await fetch(`https://api.themoviedb.org/3/${theendpoint}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2nGZbXyhVaykqJkEoUqs7qEmMXkl5XU-sgq19_QtrZcWLyKtuNZFN7oh8`);
  let thedata=await req.json();

for(let i=0;i<20;i++){
    let togetimg=`https://image.tmdb.org/t/p/w500${thedata.results[i].backdrop_path}`
    cartona+=`
    <div class="col-md-4 gy-5">
            <div class="thecard text-center" >
                
                <img src="${togetimg}" alt="" class="w-100 h-100">
                <div class="thedesc">
    
    <div class="thecontentofdesc fs-10 py-3">${thedata.results[i].original_title}</div>
    <div class="thecontentofdesc">${thedata.results[i].overview}</div>
    <div class="thecontentofdesc py-3">rate:${thedata.results[i].vote_average}</div>
    <div class="thecontentofdesc py-3">${thedata.results[i].release_date}</div>
    </div>
</div>
</div>
    
    `; 
}
document.getElementById("tocontroltherow").innerHTML=``;
document.getElementById("tocontroltherow").innerHTML=cartona;
cartona=``;

/*
 let togetimg=`https://image.tmdb.org/t/p/w500${thedata.results[1].backdrop_path}`
 document.getElementById("theorginaltitle").innerHTML=thedata.results[1].original_title;
 document.getElementById("theim").src=togetimg;

document.getElementById("thepa").innerHTML=thedata.results[1].overview;
//vote_average
document.getElementById("therate").innerHTML=thedata.results[1].vote_average;
document.getElementById("therelease").innerHTML=thedata.results[1].release_date;
*/
 }
 togetapi("movie/now_playing");


 let thepopularkey= document.getElementById("thepopular");
 thepopularkey.addEventListener("click",(e)=>{
let thevalue=e.target.value;
if(thevalue!="contactus"){
   $("html,body").animate({scrollTop:"0px"},100) ;
    togetapi(thevalue);
}


 })

































//thenav script start


let thezeropoint=0;





$(".matrix").click(function () {
    $(".themother").animate({left:"0px"},300);  

    if(thezeropoint==0){
        thezeropoint= 1;
        $(".matrix").removeClass().addClass( "matrix fa-solid fa-xmark" )
  $(".toup1").animate({bottom:"90%"},301,()=>{
    
    $(".toup2").animate({bottom:"75%"},301,()=>{

      $(".toup3").animate({bottom:"55%"},301,()=>{

        $(".toup4").animate({bottom:"35%"},301,()=>{

          $(".toup5").animate({bottom:"15%"},301,()=>{

            $(".toup6").animate({bottom:"0%"},301,()=>{

                
            }) 
            
            
            
          })

        })
      })
    })
  })
}else if(thezeropoint==1){
    thezeropoint=0;
    $(".matrix").removeClass().addClass( "fa-solid fa-bars fs-5 matrix" )
    $(".themother").animate({left:`-${theinnerwidthoftapsdiv}px`},300);
    $(".toup6").animate({bottom:"-10%"},55,()=>{
       
$(".toup5").animate({bottom:"-10%"},55,()=>{

  $(".toup4").animate({bottom:"-10%"},55,()=>{

    $(".toup3").animate({bottom:"-10%"},55,()=>{

      $(".toup2").animate({bottom:"-10%"},55,()=>{

        $(".toup1").animate({bottom:"-10%"},55,()=>{

            
        }) 
        
      })

    })
  })
})
})


}


});




let theinnerwidthoftapsdiv= $(".thetaps").innerWidth();
$(".themother").css("left",`-${theinnerwidthoftapsdiv}px`);



//the end of nav script












//start of the form script


let shat1=0;let shat2=0;
    let shat3=0;let shat4=0;
    let shat5=0;let shat6=0;
let thefirstrow=0;
let thevalid= document.getElementById("thevalid");

thevalid.addEventListener('blur',function(){

    document.querySelector("input[placeholder='Enter Your Name']").value;
    let nm=document.querySelector("input[placeholder='Enter Your Name']").value;
    let nmt=/^(\w{5,})$/;



    if(thevalid.value==""|| !nmt.test(nm)){
$(".one").css("display","block");
$(".two").css("display","block");
$(".two").css("color","black");
$(".two").css("backgroundColor","black");
shat1=1;
    }else{
        shat1=0;
  $(".one").css("display","none");
$(".two").css("display","none");
$(".two").css("color","#721c24");
$(".two").css("backgroundColor","#f5c6cb");
    }





})
let thevalidemail=document.getElementById("thevalidemail");
thevalidemail.addEventListener("blur",function(){
let theval=document.getElementById("thevalidemail").value;
let emt=/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,}))$/;

if(!emt.test(theval)){
    shat2=1;
    $(".two").css("display","block");
    $(".one").css("display","block");

$(".one").css("color","black");
$(".one").css("backgroundColor","black");

}else{
    shat2=0;
    $(".one").css("display","none");
$(".two").css("display","none");
$(".one").css("color","#721c24");
$(".one").css("backgroundColor","#f5c6cb");

}


})

setInterval(function () {
if(shat1==1 && shat2==1){
    $(".two").css("display","block");
    $(".one").css("display","block");
    $(".one").css("color","#721c24");
    $(".one").css("backgroundColor","#f5c6cb");
    $(".two").css("color","#721c24");
    $(".two").css("backgroundColor","#f5c6cb");
}else if(shat1==1 && shat2==0){
    $(".two").css("display","block");
    $(".one").css("display","block");
    $(".two").css("color","black");
    $(".two").css("backgroundColor","black");
    
}else if(shat1==0 && shat2==1){
    $(".two").css("display","block");
    $(".one").css("display","block");
    $(".one").css("color","black");
    $(".one").css("backgroundColor","black");
    $(".two").css("backgroundColor","#f5c6cb");
}

}, 50);

let thevalidphone=document.getElementById("thevalidphone");

thevalidphone.addEventListener("blur",function(){
let theval=document.getElementById("thevalidphone").value;
let pht=/^(0\d{11,12})$/;

if(!pht.test(theval)){
    shat3=1;
    $(".three").css("display","block");
$(".four").css("display","block");
$(".four").css("color","black");
$(".four").css("backgroundColor","black");

}else{
    shat3=0;
    $(".three").css("display","none");
$(".four").css("display","none");
$(".four").css("color","#721c24");
$(".four").css("backgroundColor","#f5c6cb");

}

    
})

let thevalidage=document.getElementById("thevalidage");

thevalidage.addEventListener("blur",function(){
let theval=document.getElementById("thevalidage").value;
let pht=/^(\d+)$/;
if(!pht.test(theval)){
    shat4=1;
    $(".three").css("display","block");
$(".four").css("display","block");
$(".three").css("color","black");
$(".three").css("backgroundColor","black");

}else{
    shat4=0;
    $(".three").css("display","none");
$(".four").css("display","none");
$(".three").css("color","#721c24");
$(".three").css("backgroundColor","#f5c6cb");
}

})

setInterval(function () {
if(shat3==1 && shat4==1){
    $(".four").css("display","block");
    $(".three").css("display","block");
    $(".three").css("color","#721c24");
    $(".three").css("backgroundColor","#f5c6cb");
    $(".four").css("color","#721c24");
    $(".four").css("backgroundColor","#f5c6cb");
}else if(shat3==1 && shat4==0){
    $(".four").css("display","block");
    $(".three").css("display","block");
    $(".four").css("color","black");
    $(".four").css("backgroundColor","black");
    
}else if(shat3==0 && shat4==1){
    $(".four").css("display","block");
    $(".three").css("display","block");
    $(".three").css("color","black");
    $(".four").css("backgroundColor","#f5c6cb");
}

}, 50);


let thevalidpass1=document.getElementById("thevalidpass1");
thevalidpass1.addEventListener("blur",function(){
let theval=document.getElementById("thevalidpass1").value;
let passre=/^((?=.*[A-Za-z])(?=.*\d).{8,})$/;

if(!passre.test(theval)){
    $(".five").css("display","block");
$(".six").css("display","block");
$(".six").css("color","black");
$(".six").css("backgroundColor","black");
shat5=1;
}else{
    shat5=0;
  $(".five").css("display","none");
$(".six").css("display","none");
$(".six").css("color","#721c24");
$(".six").css("backgroundColor","#f5c6cb");



}


})














let thevalidpass2=document.getElementById("thevalidpass2");
thevalidpass2.addEventListener("blur",function(){
let theval=document.getElementById("thevalidpass2").value;
let passre=/^((?=.*[A-Za-z])(?=.*\d).{8,})$/;

if(!passre.test(theval)){
 $(".six").css("display","block");
$(".five").css("display","block");
$(".five").css("color","black");
$(".five").css("backgroundColor","black");
shat6=1;
}else{
    shat6=0;
 $(".five").css("display","none");
$(".six").css("display","none");
$(".five").css("color","#721c24");
$(".five").css("backgroundColor","#f5c6cb");



}


})








setInterval(function () {
if(shat5==1 && shat6==1){
    $(".six").css("display","block");
    $(".five").css("display","block");
    $(".five").css("color","#721c24");
    $(".five").css("backgroundColor","#f5c6cb");
    $(".six").css("color","#721c24");
    $(".six").css("backgroundColor","#f5c6cb");
}else if(shat5==1 && shat6==0){
    $(".six").css("display","block");
    $(".five").css("display","block");
    $(".six").css("color","black");
    $(".six").css("backgroundColor","black");
    
}else if(shat5==0 && shat6==1){
    $(".six").css("display","block");
    $(".five").css("display","block");
    $(".five").css("color","black");
    $(".five").css("backgroundColor","black");
    $(".six").css("color","#721c24");
    $(".six").css("backgroundColor","#f5c6cb");
}

}, 50);

//end of the form script



























































//start of search engene













let realtimeapi=document.getElementById("realtimeapi");
let thearr=[];
let cartona2=``;


//vvvvvvvvvvvvvvvvvvvvvvvv
 realtimeapi.addEventListener("keyup",async function(event){
  
document.getElementById("tocontroltherow").innerHTML=` `;
let vall=realtimeapi.value;
if(event.keyCode==8){vall="";  thearr=[];cartona2=``; return 0;}
var kika=0;




async function togetapi(themoviename){

    themoviename=themoviename.toLowerCase();
    themoviename=themoviename.trim();
    let re = new RegExp(`\^(${themoviename})\$`);
    let re2=new RegExp(`\^(${themoviename})`);
 
for(let ii=1;ii<=1000;ii++){
    let req=await fetch(`https://api.themoviedb.org/3/movie/popular?page=${ii}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2nGZbXyhVaykqJkEoUqs7qEmMXkl5XU-sgq19_QtrZcWLyKtuNZFN7oh8`);
    let thedata=await req.json();

    for(let i=0;i<thedata.results.length;i++){


    if(re.test(thedata.results[i].original_title.toLowerCase())){
     
        if(! thearr.includes(thedata.results[i].id)){
             thearr.push(thedata.results[i].id)

          
            


let togetimg=`https://image.tmdb.org/t/p/w500${thedata.results[i].backdrop_path}`
cartona2+=`
<div class="col-md-4 gy-5">
    <div class="thecard text-center" >
        
        <img src="${togetimg}" alt="" class="w-100 h-100">
        <div class="thedesc">

<div class="thecontentofdesc fs-10 py-3">${thedata.results[i].original_title}</div>
<div class="thecontentofdesc">${thedata.results[i].overview}</div>
<div class="thecontentofdesc py-3">rate:${thedata.results[i].vote_average}</div>
<div class="thecontentofdesc py-3">${thedata.results[i].release_date}</div>
</div>
</div>
</div>

`;
$(".row").prepend(cartona2);
cartona2=``;
 kika=1;
        } 
          
  //xxxxxxxxxxxxxxxxxxxxxx
    }else if(re2.test(thedata.results[i].original_title.toLowerCase())&&kika==1){

        if(! thearr.includes(thedata.results[i].id)){
             thearr.push(thedata.results[i].id)

          
            


let togetimg=`https://image.tmdb.org/t/p/w500${thedata.results[i].backdrop_path}`
cartona2+=`
<div class="col-md-4 gy-5">
    <div class="thecard text-center" >
        
        <img src="${togetimg}" alt="" class="w-100 h-100">
        <div class="thedesc">

<div class="thecontentofdesc fs-10 py-3">${thedata.results[i].original_title}</div>
<div class="thecontentofdesc">${thedata.results[i].overview}</div>
<div class="thecontentofdesc py-3">rate:${thedata.results[i].vote_average}</div>
<div class="thecontentofdesc py-3">${thedata.results[i].release_date}</div>
</div>
</div>
</div>

`;
$(".row").append(cartona2);
cartona2=``;

        } 
//xxxxxxxxxxxxxxxxxxxxxx
    }
   
}

}

 }

 await togetapi(vall);



});



























document.getElementById("realtimeapi2").addEventListener("keyup",function(){



  togetapi("movie/popular");

});



