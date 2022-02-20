{
    let menulist = document.getElementById("menuList");

    let margintop = document.querySelector(".row");

    menuList.style.maxHeight = "0px";

    function togglemenu() {
        if(menulist.style.maxHeight == "0px"){
            menulist.style.maxHeight = "130px";
            margintop.style.marginTop = "130px";
            margintop.style.transition = "0.5s";
        } else {
            menulist.style.maxHeight = "0px";
            margintop.style.marginTop = "0px";
            margintop.style.transition = "0.5s";
        }
    }

}

{
    let loader = document.getElementById("preloader");

    window.addEventListener("load", function(){
        loader.style.display = "none";
    })
}