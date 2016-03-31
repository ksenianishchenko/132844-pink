document.addEventListener("DOMContentLoaded", function(){
    var toggleWrapper = document.querySelector('.main-nav__toggle-wrapper');
    var nav = document.querySelector('.main-nav');
    var topMenu = document.querySelector('.main-header__menu');

    toggleWrapper.addEventListener('click', function(event) {
        event.preventDefault();
        toggleMenu();
    });
    
    toggleMenu();
    function toggleMenu(){
        var mainNav = document.querySelector(".main-nav");
        var visibleButton = document.querySelector(".main-nav-toggle:not(.hidden)");
        var hiddenButton = document.querySelector(".main-nav-toggle.hidden");
        
        visibleButton.classList.add("hidden");
        hiddenButton.classList.remove("hidden");
        
        if (mainNav.classList.contains("hidden")){
            mainNav.classList.remove("hidden");
        }else{
            mainNav.classList.add("hidden");
        }
        
        var visibleHeader = document.querySelector(".main-header__menu:not(.main-header__menu--opened");
        var hiddenHeader = document.querySelector(".main-header__menu.main-header__menu--opened");
        
        if (hiddenHeader){
            hiddenHeader.classList.remove("main-header__menu--opened");
        }
        else{
            visibleHeader.classList.add("main-header__menu--opened");
        }
    }
});

document.addEventListener("DOMContentLoaded", function(){
    var centerLatLng = new google.maps.LatLng(59.936204,30.322786);

var mapOptions = {

zoom: 18,

center: centerLatLng,

scrollwheel: false,

mapTypeId: google.maps.MapTypeId.ROADMAP

};

                var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                var image = 'img/icon-map-marker.svg';
                var marker = new google.maps.Marker({
                    position: centerLatLng,
                    map: map,
                    icon: image
                });
});