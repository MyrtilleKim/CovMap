mapboxgl.accessToken = 'pk.eyJ1IjoidGhxdWFuZyIsImEiOiJja3NlaG11bm4xMHJhMm9wM3kzeDk3eWFyIn0.UaKcxdXdZmPIUa0PfbBqZw';
  function openNav() {
    document.getElementById("mySidebar").style.width = "80px";
    document.getElementById("main").style.marginLeft = "80px";
}


function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openCity(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    // $(".tabcontent").show();
}

function closeTab() {
    $(".tabcontent").hide();
}

navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation)

function sucessLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([106.682133, 10.765055])
};

function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });
    const nav = new mapboxgl.NavigationControl({
        visualizePitch: true
    });
    map.addControl(nav, 'top-right');
    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoidGhxdWFuZyIsImEiOiJja3NlaG11bm4xMHJhMm9wM3kzeDk3eWFyIn0.UaKcxdXdZmPIUa0PfbBqZw',
        unit: 'metric',
        language: 'fr-FR',
      });
    console.log("done");
    map.addControl(directions,'top-right');
}

// function search(err){
//     // console.log(err)
//     var directions = new MapboxDirections({
//         accessToken: 'pk.eyJ1IjoidGhxdWFuZyIsImEiOiJja3NlaG11bm4xMHJhMm9wM3kzeDk3eWFyIn0.UaKcxdXdZmPIUa0PfbBqZw',
//         unit: 'metric',
//       });
//     map.addControl(directions,'bottom-right');
// }