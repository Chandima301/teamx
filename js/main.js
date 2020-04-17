var toggleNavStatus = false;

function toggleNav(){
    if (toggleNavStatus == false){
        document.querySelector(".my-sidebar ul").style.opacity = "100%";
        document.querySelector(".my-sidebar ul").style.visibility = "visible";
        document.querySelector(".my-sidebar").style.width = "270px";
        toggleNavStatus = true;
    }
    else{
        document.querySelector(".my-sidebar ul").style.opacity = "0%";
        document.querySelector(".my-sidebar ul").style.visibility = "hidden";
        document.querySelector(".my-sidebar").style.width = "60px";
        toggleNavStatus = false;
    }
}