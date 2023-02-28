const header = document.querySelector(".navbar-dark");

console.log(header)
window.onscroll = function(){

    const top = window.scrollY;
    console.log(top);
    if(top > 100){
     header.classList.add("navbarDark")   
    }else{
        header.classList.remove("navbarDark");
    }
}









