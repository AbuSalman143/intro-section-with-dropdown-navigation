let arrow_down_fearures=document.querySelector("#arrow_down_fearures");
let arrow_up_fearures=document.querySelector("#arrow_up_fearures");
let arrow_down_company=document.querySelector("#arrow_down_company");
let arrow_up_company=document.querySelector("#arrow_up_company");
let features_li=document.querySelector(".Features-li");
let company_li=document.querySelector(".Company-li");
let features_list=document.querySelector(".Features-list");
let company_list=document.querySelector(".company-list");

features_li.addEventListener("mouseover",()=>{
    
        arrow_down_fearures.style.display="none";
        arrow_up_fearures.style.display="block";
        features_list.style.display="flex";
    
})
features_li.addEventListener("mouseleave",()=>{
  
        // arrow_down_fearures.style.display="block";
        // arrow_up_fearures.style.display="none";
        features_list.style.display="none";
  
    
})
features_list.addEventListener("mouseover",()=>{
    
        arrow_down_fearures.style.display="none";
        arrow_up_fearures.style.display="block";
        features_list.style.display="flex";
    
})






features_list.addEventListener("mouseleave",()=>{
        arrow_down_fearures.style.display="block";
        arrow_up_fearures.style.display="none";
        features_list.style.display="none";
})
    

company_li.addEventListener("mouseover",()=>{
        arrow_down_company.style.display="none";
        arrow_up_company.style.display="block";
        company_list.style.display="flex";
})

company_li.addEventListener("mouseleave",()=>{
        arrow_down_company.style.display="block";
        arrow_up_company.style.display="none";
        company_list.style.display="none";
})

let menu=document.querySelector(".menu");
let close_menu=document.querySelector(".close_menu");
let menu_bar=document.querySelector(".menu_bar");
let screemSize=window.matchMedia("(max-width:750px)");
console.log(screemSize.matches);




function toggelMenu(){
    if(menu.style.display==="none"){
        menu.style.display="block";
        close_menu.style.display="none";
    }else{
        menu.style.display="none";
        close_menu.style.display="block";
    }
}
function toggel(){
    if(screemSize.matches){
        menu_bar.classList.toggle("menubar-active");
    }
   
}

menu.addEventListener("click",()=>{
    toggelMenu()
    toggel();
})

close_menu.addEventListener("click",()=>{
    toggelMenu()
    toggel();
})