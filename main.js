
var numb = document.querySelectorAll(".ques").length;

for(let i=0 ; i<numb ; i++){
document.querySelectorAll(".ques")[i].addEventListener("click" , function(){
    // document.querySelectorAll("span")[i].style.display="block" ; 
    closeAll(i);
    if(document.querySelectorAll("span")[i].style.display=="block"){
        document.querySelectorAll("span")[i].style.display="none" ; 
        document.querySelectorAll(".a")[i].style.fontWeight="500" ;
        document.querySelectorAll(".pic")[i].style.transform = "rotate(0deg)"
        // document.querySelectorAll(".pic")[i].style.paddingLeft = "60px"
    }
    else{
        document.querySelectorAll("span")[i].style.display="block" ; 
        document.querySelectorAll(".a")[i].style.fontWeight= "900";
        document.querySelectorAll(".pic")[i].style.transform = "rotate(180deg)"
        // document.querySelectorAll(".pic")[i].style.paddingLeft = "100px"
    
    }

  

});

}

function closeAll(indx){
for(let i=0 ;i<numb; i++){
    if(i!=indx){
        document.querySelectorAll("span")[i].style.display="none" ; 
        document.querySelectorAll(".a")[i].style.fontWeight="500" ;   
        document.querySelectorAll(".pic")[i].style.transform = "rotate(0deg)" 
        // document.querySelectorAll(".pic")[i].style.paddingLeft = "60px"
    }   
    };
}

