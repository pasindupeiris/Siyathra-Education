let menuClick = document.getElementById('menu-icon');
let menuList = document.getElementById('menuList');
let menuOff = document.getElementById('fa-xmark');

menuClick.addEventListener('click', function() {

    menuList.style.display = "block";

});

menuOff.addEventListener('click', function() {

    menuList.style.display = "none";

});