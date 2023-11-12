var openedMenu = false

var mob_menu = document.getElementsByClassName("mobile_menu")
var html_class = document.getElementsByClassName("html_class")

var menu_button = document.getElementById("menu_button")

function openWindow(str){
    window.location.href = str;
}

function openCloseMenu(){
    if(openedMenu){
        menu_button.setAttribute("src", "Images/menu.png")
        openedMenu = false
        mob_menu[0].style.opacity = '0'
        mob_menu[0].style.zIndex = '-999'
        mob_menu[0].style.pointerEvents = 'none'
        html_class[0].style.overflowY = 'auto';
    }else{
        menu_button.setAttribute("src", "Images/x_button.png")
        openedMenu = true;
        mob_menu[0].style.opacity = '1'
        mob_menu[0].style.zIndex = '999'
        mob_menu[0].style.pointerEvents = 'all'
        html_class[0].style.overflowY = 'hidden';
    }
}



document.getElementById("year").innerHTML = new Date().getFullYear();