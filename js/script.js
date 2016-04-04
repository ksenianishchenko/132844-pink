document.addEventListener("DOMContentLoaded", function(){
    var staticHeader = document.querySelector(".main-header--static");
    if (staticHeader){
        staticHeader.classList.remove("main-header--static");
    }
    
    var toggleWrapper = document.querySelector(".main-nav__toggle-wrapper");

    toggleWrapper.addEventListener("click", function(event) {
        event.preventDefault();
        toggleMenu();
    });
    
    toggleMenu();
    function toggleMenu(){
        var statesList = {
            OPENED: "main-header__wrapper--opened",
            CLOSED: "main-header__wrapper--closed"
        };
        
        var headerWrapper = document.querySelector(".main-header__wrapper")
       
        var toAdd, toDelete;
        if (headerWrapper.classList.contains(statesList.OPENED)){
           toAdd = statesList.CLOSED;
           toDelete = statesList.OPENED;
        }
        else{
           toAdd = statesList.OPENED;
           toDelete = statesList.CLOSED;
        }
       
        headerWrapper.classList.add(toAdd);
        headerWrapper.classList.remove(toDelete);
    }
    
    var mapElement = document.getElementById('map');
    if (mapElement && google) {
        var centerLatLng = new google.maps.LatLng(59.936204,30.322786);
        var mapOptions = {
            zoom: 18,
            center: centerLatLng,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var image = "img/icon-map-marker.svg";
        var marker = new google.maps.Marker({
            position: centerLatLng,
            map: map,
            icon: image
        });
    }
});
